// 泛型基础示例
/* function identity(arg: number): number {
  return arg
} */
/* function identity(arg: any): any {
  return arg
} */

// 需要一种方法使返回值的类型与传入参数的类型是相同的。使用了--类型变量，它是一种特殊的变量，只用于表示类型而不是值。
function identity<T>(arg: T): T {
  return arg
}
// let output = identity<string>('myString2')   // 传入所有的参数，包含类型参数：
let output = identity(33)  // 利用类型推论 -- 即编译器会根据传入的参数自动地帮助我们确定 T 的类型：
console.log(output)

// 使用泛型变量
function loggingIdentity<Y>(arg: Y[]): Y[] {
  console.log(arg.length)
  return arg
}
console.log(loggingIdentity([1, '2', 3, { a: 2 }]))
