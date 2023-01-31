var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc,
      d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };

var StringUtil = (function () {
  function StringUtil() {}
  StringUtil.trimSpace = function (str) {
    return str.replace(/\s+/g, "");
  };
  return StringUtil;
})();

function MethodInterceptor(paramsValue) {
  return function (targetClassPrototype, methodName, methodDecri) {
    console.log("paramsValue---", paramsValue);
    console.log("进入方法装饰器: methodDecri:", methodDecri);
    var targetMethodSave = methodDecri.value;
    console.log("targetMethodSave:", targetMethodSave);
    methodDecri.value = function () {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      console.log("this:", this);
      args = args.map(function (arg) {
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

var RoleService = (function () {
  function RoleService() {
    this.roleName = "管理员";
  }
  RoleService.prototype.DistribRoles = function (userName, isValid) {
    console.log("分配角色.....");
  };
  RoleService.prototype.getRoleName = function () {
    console.log(this.roleName);
  };
  __decorate(
    [MethodInterceptor("DistribRoles方法")],
    RoleService.prototype,
    "DistribRoles",
    null
  );
  return RoleService;
})();
var role = new RoleService();
role.DistribRoles("小     吴", true);
