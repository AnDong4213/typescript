module.exports = extendStatics = (function () {
  function getStaticExtendsWithForIn(Son, Parent) {
    for (let key in Parent) {
      if (Object.prototype.hasOwnProperty.call(Parent, key)) {
        Son[key] = Parent[key];
      }
    }
  }

  // if (p.hasOwnProperty(key)) {}

  function getStaticExtendsWithObjectkeys(Son, Parent) {
    Object.keys(Parent).forEach((key) => {
      Son[key] = Parent[key];
    });
  }

  // 我们 Son.__proto__=Parent  目的是让Son来访问Parent类中的静态属性或静态方法，而且仅此用而已，自写自用。
  function getStaticExtendsWithProto(Son, Parent) {
    Son.__proto__ = Parent;
  }

  /*  MyextendStatics  = function(Son, Parent) {
        MyextendStatics = Object.setPrototypeOf || getStaticExtendsWithForIn || getStaticExtendsWithObjectkeys || getStaticExtendsWithProto
        return MyextendStatics(Son, Parent)
      }
      return MyextendStatics */

  return function (Son, Parent) {
    let MyextendStatics =
      Object.setPrototypeOf ||
      getStaticExtendsWithForIn ||
      getStaticExtendsWithObjectkeys ||
      getStaticExtendsWithProto;
    MyextendStatics(Son, Parent);
  };
})();
