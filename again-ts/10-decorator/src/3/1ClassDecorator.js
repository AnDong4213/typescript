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
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
      console.log("Reflect.decorate", Reflect.decorate);
      r = Reflect.decorate(decorators, target, key, desc);
    } else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
// 不带参数的类装饰器
function FirstClassDecorator(targetClass) {
  console.log("targetClass.name--", targetClass.name);
}
function SecondClassDecorator(targetClass) {
  console.log("SecondClassDecorator.name--", targetClass.name);
}
var CustomerService = /** @class */ (function () {
  function CustomerService() {
    this.name = "测试";
  }
  CustomerService.prototype.buy = function () {
    console.log(this.name + "购买");
  };
  CustomerService.prototype.placeOrder = function () {
    //下单
    console.log(this.name + "下单购买");
  };
  CustomerService = __decorate(
    [FirstClassDecorator, SecondClassDecorator],
    CustomerService
  );
  return CustomerService;
})();
