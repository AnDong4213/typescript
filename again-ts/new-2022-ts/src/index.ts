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
