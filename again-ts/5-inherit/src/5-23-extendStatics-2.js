module.exports = extendStatics = (function () {
  let extendStatics =
    Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array &&
      function (d, b) {
        d.__proto__ = b;
      }) ||
    function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

  return function (d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype =
      b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
    /* d.prototype =
      ((__.prototype = b.prototype), console.log("这都可以"), new __()); */

    // Object.setPrototypeOf(d.prototype, b.prototype);
  };
})();

console.log({ __proto__: [] } instanceof Array);

// 封装
/* function _extends(parent, son) {
  // 第一步: 创建一个寄生构造函数
  function Middle() {
    this.constructor = son;
  }
  Middle.prototype = parent.prototype;
  // 第二步:创建一个寄生新创建的构造函数的实例对象
  return new Middle();
} */

const instanceOf = function (A, B) {
  let p = A;
  while (p) {
    if (p === B.prototype) {
      return true;
    }
    // p = p.__proto__;
    p = Object.getPrototypeOf(p);
  }
  return false;
};
// console.log(instanceOf([], Object)); // true
// console.log(instanceOf({ __proto__: [] }, Array)); // true
