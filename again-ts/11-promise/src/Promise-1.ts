import { ResolveType, FailType, ExecutorType } from "./actiontype";

export default class Promise<T = any> {
  public resolve!: ResolveType;
  public reject!: FailType;
  public resolve_success_value: any;
  public reject_fail_value: any;
  public status!: string;

  constructor(executor: ExecutorType<T>) {
    this.status = "pending";
    this.resolve = (value: any): any => {
      if (this.status === "pending") {
        this.status = "success";
        // value[10] = 1000;
        this.resolve_success_value = value;
        console.log("成功的结果:", value);
      }
    };

    this.reject = (reason: any): any => {
      if (this.status === "pending") {
        this.status = "fail";
        this.reject_fail_value = reason;
        console.log("失败的结果:", reason);
      }
    };

    try {
      executor(this.resolve, this.reject);
    } catch (err: any) {
      this.status = "pending";
      this.reject(err.toString());
      throw new Error("程序终止");
    }
  }

  then(resolveInThen: ResolveType, rejectinThen: FailType) {
    if (this.status === "success") {
      resolveInThen(this.resolve_success_value);
      console.log("resolveInThen执行");
    }

    if (this.status === "fail") {
      rejectinThen(this.reject_fail_value);
      console.log("rejectinThen执行");
    }
  }
}
