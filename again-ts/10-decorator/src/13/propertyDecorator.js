"use strict";
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
    console.log("c--", r);
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };

// Object.defineProperty(exports, "__esModule", { value: true });

function loginProperty(attrValue) {
  console.log("attrValue--", attrValue);
  return function (targetclassPrototype, attrname) {
    console.log("targetclassPrototype：", targetclassPrototype);
    console.log("attrname：", attrname);
    targetclassPrototype.constructor.custLevelDescri = function () {
      console.log("消费5000元升级为贵宾");
      console.log("消费10000元升级为贵宾,赠送微波炉一个");
    };
  };
}

// 顾客目标类
var CustomerService = (function () {
  function CustomerService() {
    this.custname = "王五";
  }
  CustomerService.prototype.show = function () {
    console.log("顾客名:", this.custname);
  };
  CustomerService.prototype.login = function () {
    console.log("login--");
  };
  __decorate(
    [loginProperty("顾客登记")],
    CustomerService.prototype,
    "degree",
    void 0
  );
  return CustomerService;
})();
CustomerService.custLevelDescri();
