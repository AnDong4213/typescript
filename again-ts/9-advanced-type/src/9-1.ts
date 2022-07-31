//（1）infer 出现在 extends 条件语句后的函数类型的参数类型位置上

// 仅条件类型的 "extends" 子句中才允许 "infer" 声明
interface Customer {
    custname: string
    buymoney: number
  }

  type custFuncType  = (cust: Customer,str: string) => string

//   type interType = (params: infer P) => any // 写法是错误的...
  type inferType<T> = T extends (params: infer P) => any ? P : T

  type inferResultType = inferType<custFuncType>