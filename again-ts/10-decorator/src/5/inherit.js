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

var Parent = (function () {
  function Parent(age, name) {
    this.p_age = 10;
    this.p_name = "小莫";
    this.p_age = age;
    this.p_name = name;
  }
  Parent.prototype.getInfo = function () {
    console.log("info   ", this.p_name, this.p_age);
  };
  return Parent;
})();

var Children = (function (_super) {
  __extends(Children2, _super);
  function Children2(age, name, education) {
    // var _this = _super.call(this, age, name) || this;
    _super.call(this, age, name);
    var _this = this;

    _this.c_education = "undergraduate";
    _this.department = "math";
    _this.c_education = education;
    _this.department = "chinese";
    return _this;
  }
  Children2.prototype.getInfo2 = function () {
    console.log(this.department, "--", this.c_education);
  };
  return Children2;
})(Parent);

var test = new Children(23, "小米", "本科");
console.log(test);
test.getInfo();
test.getInfo2();
