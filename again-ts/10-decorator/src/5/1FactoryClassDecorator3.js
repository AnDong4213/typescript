"use strict";
// 匿名
var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError(
          "Class extends value " + String(b) + " is not a constructor or null"
        );
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
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

Object.defineProperty(exports, "__esModule", { value: true });

function LoggerInfoDecorator(targetClass) {
  return /** @class */ (function (_super) {
    __extends(class_1, _super);
    function class_1() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      var _this = _super.apply(this, args) || this;
      _this.__de = "装饰器属性";
      console.log("日志信息...targetClass:", targetClass.name);
      return _this;
    }
    class_1.prototype.methodone = function () {
      console.log("methodone:", this.name, this.__de);
    };
    return class_1;
  })(targetClass);
}
var Test = /** @class */ (function () {
  function Test(name) {
    this.age = 9;
    this.name = name;
  }
  Test.prototype.eat = function () {
    console.log(this.name, "吃饭", this.age);
  };
  Test = __decorate([LoggerInfoDecorator], Test);
  return Test;
})();
Test.prototype.haha = function () {
  console.log("测试----");
};
var test = new Test("小米");
test.methodone();
test.eat();
test.haha();
