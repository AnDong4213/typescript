// const 为何也能被修改？如何解决？

const arr = [10, 30, 40, "abc"] as const;
// arr[0] = 1999; // 无法分配到 "0" ，因为它是只读属性

console.log(arr[0]);

function showArr(arr: readonly any[]) {
  console.log(arr);
}
showArr(arr); // 类型 "readonly [10, 30, 40, "abc"]" 为 "readonly"，不能分配给可变类型 "any[]"。TS4上在参数上加readonly
