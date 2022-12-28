import { ResolveType, FailType, ExecutorType } from "./actiontype";

export default class Promise<T = any> {
  public resolve!: ResolveType;
  public reject!: FailType;
  public resolve_success_value: any;
  public reject_fail_value: any;
  public status!: string;

  // 保存成功状态要执行的函数 订阅函数一般放在数组里
  public onResolveCallbacks: (() => void)[] = [];
  // 保存失败状态要执行的函数
  public onRejectCallbacks: (() => void)[] = [];

  constructor(executor: ExecutorType<T>) {
    this.status = "pending";
    this.resolve = (value: any): any => {
      if (this.status === "pending") {
        this.status = "success";
        this.resolve_success_value = value;
        console.log("resolve函数的结果:", value);
      }
    };

    this.reject = (reason: any): any => {
      if (this.status === "pending") {
        this.status = "fail";
        this.reject_fail_value = reason;
        console.log("reject函数的结果:", reason);
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
      let result;
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
        this.onResolveCallbacks.push(() => {
          result = resolveInThen(this.resolve_success_value);
        });
      }
    });
  }
}
