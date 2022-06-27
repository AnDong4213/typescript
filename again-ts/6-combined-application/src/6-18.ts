// 可变元组，之前元组不可变

/* let [username, age]: [string, number] = [
  "wang",
  23,
  "海口海淀岛四东路3号",
  "133123333",
  "一路同行,一起飞"
]; */
// 不能将类型“[string, number, string, string, string]”分配给类型“[string, number]”。源具有 5 个元素，但目标仅允许 2 个。

/* let [username, age, ...rest]: [string, number, ...Array<any>] = [
  "张三",
  23,
  "北京海淀东四东路3号",
  "133123333",
  "一路同行,一起飞"
];
console.log(username, age);
console.log(rest); */

// 元组标签
let [username, age, ...rest]: [
  name_: string,
  age_: number,
  ...rest: Array<any>
] = ["张三", 23, "北京市海淀东四东路3号", "133", "一路同行,一起飞"];
console.log(username, age);
console.log(rest);

// npm install -g --force typescript@latest
