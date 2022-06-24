//  请编写一个操作对象方法和属性的函数实现以下功能
//   1. 当对象字符串属性有空格时就去掉空格后输出.
//   2. 当遇到对象方法时就执行,其他数据类型的属性一律直接输出
//   3.只有对象中包含allowInput属性时,才允许输出。
//   4. 函数接收到外部传入的null,undefined,{}时，直接输出不是一个合法的对象。

// 类型守卫：在 语句的块级作用域【if语句内或条目运算符表达式内】缩小变量的一种类型推断的行为。

class StringUtil {
  public static trimSpace(str: string): string {
    return str.replace(/\s+/g, "");
  }
}

interface TestInter {
  username: string;
  eat(): void;
  age: number;
  allowInput?: any;
}

let testObj: TestInter = {
  username: " wan  g wu",
  age: 23,
  eat() {
    console.log(StringUtil.trimSpace(this.username) + " 吃饭");
  },
  allowInput: 0
};

function processObjOutput(obj: any) {
  let value;
  if (obj && "allowInput" in obj) {
    Object.keys(obj).forEach((key) => {
      value = obj[key];
      if (typeof value === "string") {
        console.log(key + ":", StringUtil.trimSpace(value));
      } else if (typeof value === "function") {
        obj[key]();
      } else {
        console.log(key + ":", +value);
      }
    });
  } else {
    console.log("不是一个合法的对象");
  }
}

processObjOutput({});
processObjOutput(testObj);

const oA = { a: 1, b: 2 };
const oB = [1, 3, 5];
const oBb = oB.toString();
console.log(oBb === "1,3,5"); // true
console.log(oBb.split(",")); //['1', '3', '5']
console.log(oB.join(",") === "1,3,5"); // true
const oC = [oA];
console.log(oC.toString()); // [object Object]
console.log(Object.prototype.toString.call(oC)); // [object Array]
console.log(Array.isArray(oC));

/* function Person(age: number) {
  this.age = age;
} Ts中不能 new一个函数，只能 class
new Person(); */
