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

var __param =
  (this && this.__param) ||
  function (paramIndex, decorator) {
    return function (target, key) {
      decorator(target, key, paramIndex);
    };
  };

function UrlParam(params) {
  return function (targetClassPrototype, methodname, paramindex) {
    console.log("params---", params);
    console.log("targetClassPrototype:", targetClassPrototype);
    console.log("methodname:", methodname);
    console.log("paramindex:", paramindex);
    targetClassPrototype.info = params;
  };
}
var People = (function () {
  function People() {}
  People.prototype.eat = function (address, who) {
    console.log("address:", address);
  };
  __decorate([__param(0, UrlParam("地址信息"))], People.prototype, "eat", null);
  return People;
})();

console.log(new People().info);
