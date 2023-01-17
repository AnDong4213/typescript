import { ResolveType, FailType, ExecutorType } from "./actiontype";

export default class Promise<T = any> {
  public resolve!: ResolveType;
  public reject!: FailType;
  public resolve_success_value: any;
  public reject_fail_value: any;
  public status!: string;

  // 保存成功状态要执行的函数 订阅模式一般定义一个数组，数组里面保存函数
  public onResolveCallbacks: (() => void)[] = [];
  // 保存失败状态要执行的函数
  public onRejectCallbacks: (() => void)[] = [];

  constructor(executor: ExecutorType<T>) {
    console.log("99999");
    this.status = "pending";
    this.resolve = (value: any): any => {
      if (this.status === "pending") {
        console.log("onResolveCallbacks---", this.onResolveCallbacks);
        this.status = "success";
        this.resolve_success_value = value;
        console.log("resolve函数的结果:", value);
        this.onResolveCallbacks.forEach((callback) => callback());
      }
    };

    this.reject = (reason: any): any => {
      if (this.status === "pending") {
        this.status = "fail";
        this.reject_fail_value = reason;
        console.log("reject函数的结果:", reason);
        this.onRejectCallbacks.forEach((callback) => callback());
      }
    };

    try {
      // console.log("执行次数---");
      executor(this.resolve, this.reject);
    } catch (err: any) {
      this.status = "pending";
      this.reject(err.toString());
      throw new Error("程序终止");
    }
  }

  then(resolveInThen: ResolveType, rejectinThen: FailType) {
    return new Promise((resolve, reject) => {
      let result: any;
      console.log("this.status", this.status);
      if (this.status === "success") {
        result = resolveInThen(this.resolve_success_value);
        resolve(result);
        console.log("resolveInThen--执行");
      }

      if (this.status === "fail") {
        result = rejectinThen(this.reject_fail_value);
        reject(result);
        console.log("rejectinThen--执行");
      }

      if (this.status === "pending") {
        console.log("异步的then---");
        this.onResolveCallbacks.push(() => {
          result = resolveInThen(this.resolve_success_value);
          if (isPromise(result)) {
            console.log("------------------", result);
            /* setTimeout(() => {
              resolve(result.resolve_success_value);
            }, 5); */
            result.then(
              (resolveSuccess) => {
                resolve(resolveSuccess);
              },
              (rejectSuccess) => {
                reject(rejectSuccess);
              }
            );
          } else {
            console.log("订阅函数resolve执行---", result);
            resolve(result);
          }
        });

        this.onRejectCallbacks.push(() => {
          result = rejectinThen(this.reject_fail_value);
          console.log("订阅函数reject执行---", result);
          reject(result);
        });
      }
    });
  }
}

function isPromise(val: any): val is Promise {
  return isObject(val) && isFunction(val.then);
}

function isObject(val: any): val is Record<any, any> {
  return val !== null && typeof val === "object";
}

function isFunction(data: any): data is Function {
  return typeof data === "function";
}
