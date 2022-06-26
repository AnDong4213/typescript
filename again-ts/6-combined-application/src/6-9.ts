// instanceof 运算符 用于检测构造函数或class类的 prototype 属性是否出现在某个实例对象的原型链上。

console.log([] instanceof Object);

class StringUtil {
  public static trimSpace(str: string): string {
    return str.replace(/\s+/g, "");
  }
}

const aa = new StringUtil();
console.log(aa instanceof StringUtil);

function myInstanceof(a: any, b: any) {
  while (a) {
    if (a === b.prototype) {
      return true;
    }
    // a = a.__proto__;
    a = Object.getPrototypeOf(a);
  }
  return false;
}

const instanceOf = function (A: any, B: any) {
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
console.log(myInstanceof(aa, StringUtil));

export {};
