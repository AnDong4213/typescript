// 2 编写业务类
export class UserService {
  constructor() {
    console.log("创建UserService类对象...");
  }
  pname: string = "用户";
  public login() {
    console.log(this.pname + "登录....");
  }
}
