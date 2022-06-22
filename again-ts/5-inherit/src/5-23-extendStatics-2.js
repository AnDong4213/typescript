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
    /* function __() {
      this.constructor = d;
    }
    // d.prototype =
    //   b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
    // d.prototype =
    //   ((__.prototype = b.prototype), console.log("这都可以"), new __()); */

    Object.setPrototypeOf(d.prototype, b.prototype);
  };
})();

// console.log({ __proto__: [] } instanceof Array);
