// import $ from "JQuery";

/* JQuery.$(function () {});
JQuery.$("div").css("border", "1px solid red");
JQuery.$.ajax("http"); */

/* $(function () {});
$("div").css("border", "1px solid red");
$.post("http"); */

function isPlainObject(data: Record<string, any>) {
  return Object.prototype.toString.call(data) === "[object Object]";
}
console.log(isPlainObject({}));
console.log(isPlainObject([]));

interface Test1 {
  message: string;
  stack: string;
  result: any;
}
let test2 = {
  message: "444",
  stack: 2,
  result: {}
};

function hj(a: typeof test2, b: string) {
  console.log(a, b);
}
let hj2 = (a: typeof test2, b: string): void => {
  console.log(a, b);
};

hj({ message: "9", stack: 3, result: 9 }, "3");
hj2({ message: "9", stack: 3, result: 9 }, "99");

type AppAttrToObj<T, K extends string, V> = {
  [P in keyof T | K]: P extends keyof T ? T[P] : V;
};

type Test = AppAttrToObj<Test1, "qq", string>;
type Test3 = AppAttrToObj<Test, "weixin", string>;

interface Todo {
  title: string;
  completed: boolean;
  description: string;
}

/* type Omit1<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P];
}; */

type Omit1<T, K extends keyof T> = {
  [P in keyof T as Exclude<P, K>]: T[P];
};

type myOmit = Omit1<Todo, "title">;

// const arr = [1, 3, 5, "job"];
// arr = [9] // 无法分配到 "arr" ，因为它是常数
// arr[0] = 2; // 是可以修改的，如果加上 as const就不能修改了
const arr = [1, 3, 5, "job"] as const;
// arr[0] = 2; // 无法为“0”赋值，因为它是只读属性
console.log(arr);

function showArr(ar: readonly any[]) {
  console.log(ar);
}
showArr(arr);

// 一个在任何位置都不能被实例化的类就是一个抽象类(abstract class)
// new、实例化 的话没有实际意义，就可以定义为抽象类
abstract class People {
  public name!: string;
  public eat() {
    console.log("Eat");
  }

  public abstract step(): void;
}

export {};
