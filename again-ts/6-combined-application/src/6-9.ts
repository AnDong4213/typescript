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
    if (a.__proto__ === b.prototype) {
      return true;
    } else {
      a = a.__proto__;
    }
  }
  return false;
}
console.log(myInstanceof(aa, StringUtil));

export {};
