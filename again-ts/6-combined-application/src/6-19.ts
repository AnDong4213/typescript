// 数组中元素的数据类型都一般是相同的（any[] 类型的数组可以不同），如果存储的元素数据类型不同，则需要使用元组。

// 元组中允许存储不同类型的元素，元组可以作为参数传递给函数。

// 元组标签
let [username, age, ...rest]: [
  name_: string,
  age_: number,
  ...rest: Array<any>,
  descri_: string // rest后可以在有类型，最后一个
] = ["张三", 23, "北京市海淀东四东路33号", "133", "一路同行,一起飞", "78"];
console.log(username, age);
console.log(rest);

/* let constNum2 = [10, 30, 40, 60, "abc"];
//  把元组退化成"数组"
// 这样写不报错  let [x2, ...y2]: [number, ...any[]] = [10, 30, 40, 60, "abc"];
// let [x2, ...y2]: [number, ...any[]] = constNum2; // 错误
let [x2, ...y2]: [...any[]] = constNum2; // 正确
console.log("x2:", x2);
console.log("y2:", y2); */

// 另一种写法
let constNum2 = [10, 30, 40, 60, "abc"] as const;
let [x2, ...y2]: readonly [number, ...any[]] = constNum2;
//readonly 和 as const 都是表示固定不变的，包括数组和元组中每一个元素都不能改变
console.log("x2:", x2);
console.log("y2:", y2);

let constNum5 = [10, 30, 40, 60, "abcd"] as const;
// readonly等效于as const
function tail(arr: readonly [any, ...any[]]) {
  // arr[0] = 33; // 报错
  let [first, ...rest] = arr;
  return rest;
}
console.log(tail(constNum5));

export {};
