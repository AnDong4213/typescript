class StringUtil {
  public static trimSpace(str: string): string {
    return str.replace(/\s+/g, "");
  }
}

function MethodInterceptor(paramsValue: any) {
  return function (
    targetClassPrototype: any,
    methodName: any,
    methodDecri: PropertyDescriptor
  ) {
    console.log("paramsValue---", paramsValue);
    console.log("进入方法装饰器: methodDecri:", methodDecri);
    const targetMethodSave = methodDecri.value;
    console.log("targetMethodSave:", targetMethodSave);

    methodDecri.value = function (...args: any[]) {
      console.log("this:", this);
      args = args.map((arg) => {
        if (typeof arg === "string") {
          return StringUtil.trimSpace(arg);
        }
        return arg;
      });
      console.log(args);
      targetMethodSave.apply(this, args);
      console.log("methodDecri.value:-------");
    };
  };
}

class RoleService {
  public roleName: string = "管理员";
  constructor() {}

  @MethodInterceptor("DistribRoles方法")
  DistribRoles(userName: string, isValid: boolean) {
    console.log("分配角色.....");
  }

  getRoleName() {
    console.log(this.roleName);
  }
}

const role = new RoleService();
role.DistribRoles("小     吴", true);
