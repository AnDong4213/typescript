// 带参数的方法装饰器

function MyMethodDecorator(methodPath: string) {
  return function MyMethodDecorator(
    targetClassPrototype: any,
    key: string,
    methodDecri: PropertyDescriptor
  ) {
    console.log("methodPath--", methodPath);
    console.log("targetClassPrototype:", targetClassPrototype); //
    console.log("key:", key);
    console.log("数据属性:", methodDecri);
    methodDecri.value(); // 执行被装饰器修饰的方法
  };
}

class RoleService {
  public roleName: string = "管理员";
  constructor() {}

  @MyMethodDecorator("/food")
  DistribRoles() {
    // 分配角色
    console.log("分配角色.....");
  }

  getRoleName() {
    console.log(this.roleName);
  }
}
export {};
