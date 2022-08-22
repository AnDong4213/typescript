type Customer = {
  custname: string,
  age: number
}

type twoType<T, K> = K extends keyof T ? T[K] : never
const num: twoType<Customer, 'age'> = 9
console.log(num)

type anyType = keyof any   // type anyType = string | number | symbol
const m: anyType = 'true'

type oneType<K> = K extends keyof any ? K : never
let strName = "abc";
type threeResultType = oneType<typeof strName>
const as: threeResultType = strName
console.log(as)

type resultGoodsType  = Record<string, Customer>
const objarray: resultGoodsType = {a: { custname: "wangwu", age: 23}}
console.log(objarray)

export {};
