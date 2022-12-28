// infer 的定义：infer 表示在 extends 条件语句中以占位符出现的用来修饰数据类型的关键字，被修饰的数据类型等到使用时才能被推断出来。

//（1）infer 出现在 extends 条件语句后的函数类型的参数类型位置上

// 仅条件类型的 "extends" 子句中才允许 "infer" 声明
interface Customer {
  custname: string;
  buymoney: number;
}

type custFuncType = (cust: Customer, str: string) => string;

//   type interType = (params: infer P) => any // 写法是错误的...
type inferType<T> = T extends (params: infer P) => any ? P : T;
// (params: infer P) => any只有一个参数，custFuncType有两个
type inferResultType = inferType<custFuncType>;
// type inferResultType = (cust: Customer, str: string) => string

/* type custFuncType = (cust: Customer, str: string) => string;
type inferType<T> = T extends (params: infer P, ...rest: any[]) => any ? P : T; // any[]不能是unknown[]
// P占位的是第一个参数，并且custFuncType符合(params: infer P, ...rest: any[]) => any，所以返回Customer
type inferResultType = inferType<custFuncType>; // type inferResultType = Customer */

/* type custFuncType = (cust: Customer, str: string) => string;
type inferType<T> = T extends (params: infer P, str: string) => any ? P : T;
type inferResultType = inferType<custFuncType>; // type inferResultType = Customer */

type FirstIfString<T> = T extends [infer S, ...unknown[]]
  ? S extends string
    ? S
    : null
  : undefined;
type A = FirstIfString<[string, number, number]>;
type B = FirstIfString<["hello", number, number]>;
type C = FirstIfString<["hello" | "world", boolean]>;
const CC: C = "hello";

type D = FirstIfString<[boolean, number, string]>;
type E = FirstIfString<[]>;

console.log(CC);

// 第二种写法
type FirstIfString2<T> = T extends [infer S extends string, ...unknown[]]
  ? S
  : never;
type C2 = FirstIfString<["hello" | "world", boolean]>;
