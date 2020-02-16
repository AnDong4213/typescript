const z = 10

let myAdd = function (x: number, y: number): number {
  return x + y + z  // 函数的类型只是由参数类型和返回值类型组成的。 函数中使用的捕获变量不会体现在类型里。 实际上，这些变量是函数的隐藏状态并不是组成 API 的一部分。
}
console.log(myAdd(1, 3))
