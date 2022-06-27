//  请编写一个操作对象方法和属性的函数实现以下功能
//   1. 当对象字符串属性有空格时就去掉空格后输出.
//   2. 当遇到对象方法时就执行,其他数据类型的属性一律直接输出
//   3.只有对象中包含allowInput属性时,才允许输出。
//   4. 函数接收到外部传入的null,undefined,{}时，直接输出不是一个合法的对象。

// 类型守卫：在 语句的块级作用域【if语句内或条目运算符表达式内】缩小变量范围的一种类型推断的行为。

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

// 自定义类型守卫
function isString(str: any): str is string {
  return typeof str === "string";
}

function isFunction(func: any): func is Function {
  return typeof func === "function";
}

function processObjOutput(obj: any) {
  let value: unknown;
  if (obj && "allowInput" in obj) {
    Object.keys(obj).forEach((key) => {
      value = obj[key];
      if (isString(value)) {
        console.log(key + ":", StringUtil.trimSpace(value));
      } else if (isFunction(value)) {
        obj[key]();
      } else {
        // console.log(key + "+-:", +(<any>value));
        console.log(key + "+-:", +(value as any));
      }
    });
  } else {
    console.log("不是一个合法的对象");
  }
}

// processObjOutput({});
processObjOutput(testObj);

/* function Person(age: number) {
  this.age = age;
} Ts中不能 new一个函数，只能 class
new Person(); */

export {};
