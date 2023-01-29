"use strict";
// 需求：对已经开发好的项目中的任何一个类，创建实例时，
// 打印日志信息，
// 输出哪一个类被创建了,并输出传递了哪些参数信息
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
// 这样写，@LoggerInfoDecorator有报错
// 不能将类型“new (...args: any) => LoggerSonClass”分配给类型“new (name: string) => Test”。类型“LoggerSonClass”缺少类型“Test”中的以下属性: name, age, eat
/* function LoggerInfoDecorator(targetClass: any) {
  class LoggerSonClass extends targetClass {
    constructor(...args: any) {
      super(...args);
      console.log("日志信息...targetClass:", targetClass.name);
    }
  }
  return LoggerSonClass;
} */
// function LoggerInfoDecorator(targetClass: new (...args: any) => Test) {
function LoggerInfoDecorator(targetClass) {
  var LoggerSonClass = /** @class */ (function (_super) {
    __extends(LoggerSonClass, _super);
    function LoggerSonClass() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      var _this = _super.apply(this, args) || this;
      console.log("日志信息...targetClass:");
      return _this;
    }
    LoggerSonClass.prototype.methodone = function () {
      console.log("methodone:", this.name);
    };
    return LoggerSonClass;
  })(targetClass);
  return LoggerSonClass;
}
var Test = /** @class */ (function () {
  function Test(name) {
    this.name = name;
  }
  Test.prototype.eat = function () {
    console.log(this.name, "吃饭");
  };
  Test = __decorate([LoggerInfoDecorator], Test);
  return Test;
})();
var test = new Test("wer");
test.methodone();
test.eat();
