// infer 的定义：infer 表示在 extends(泛型约束) 条件语句中以占位符出现的用来修饰数据类型的关键字，被修饰的数据类型等到使用时才能被推断出来。

//（2）infer 出现在 extends 条件语句后的函数类型的返回值类型上

// 仅条件类型的 "extends" 子句中才允许 "infer" 声明，extends的泛型约束中，infer后的数据类型不需要在定义就可以使用
interface Customer {
  custName: string;
  buyMoney: number;
}

type custFuncType = (cust: Customer) => string;

type inferType<T> = T extends (params: any) => infer P ? P : T; // 只有一个参数

type inferResultType = inferType<custFuncType>;

const ex: inferResultType = "Tom2";

console.log(ex);

// （3） infer 会出现在类型的泛型具体化类型上。
type ElementOf<T> = T extends Set<infer P> ? P : never;
const ev2: ElementOf<Set<string>> = "9";

export {};
