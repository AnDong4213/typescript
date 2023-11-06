import Customer from "./test";
import { EnumAuditStatus } from "./test";

export let x = "12345";
console.log(x);

export class Student {
  name: string;

  constructor() {
    this.name = "lm";
  }

  study() {
    console.log(this.name);
  }
}

export let set: Set<string> = new Set<string>(["abc"]);

// any 和 unknown是任何类型的父类

// let price: any = undefined;
// let price: unknown = undefined;
// let price: undefined = undefined;
// let price: unknown = null;
/* let price: number = undefined; 报错 */

let stuObj = { age: 3, username: "了" };
const age = "age";
console.log(stuObj[age]);

/* const max = Number.MAX_SAFE_INTEGER;
const maxBigOne = max + 1;
const maxBigTwo = max + 2;
console.log(max);
console.log(maxBigOne === maxBigTwo);  // true  */

/* const a: bigint = BigInt(9);
const max = BigInt(Number.MAX_SAFE_INTEGER);
const maxBigOne = max + BigInt(1);
const maxBigTwo = max + BigInt(2);
console.log(max);
console.log(maxBigOne === maxBigTwo);
console.log(a); */

const max = BigInt(Number.MAX_SAFE_INTEGER);
const maxBigOne = max + 1n;
const maxBigTwo = max + 2n;
console.log(max);
console.log(maxBigTwo);
console.log(maxBigOne === maxBigTwo);
console.log(maxBigOne < maxBigTwo);

// 推导never
type DataFlow = number | string;
function dfWithNever(df: DataFlow) {
  if (typeof df === "number") {
    console.log(df.toFixed(2));
  } else if (typeof df === "string") {
    console.log(df.length);
  } else {
    let data = df;
    console.log(data);
  }
}
dfWithNever("kk");
dfWithNever(12.78539);

enum Week {
  Monday = 1,
  Tuesday,
  Wensday,
  ThirsDay,
  Friday,
  Sarturday,
  Sunday
}

class MyAduit {
  getAduitStatus(status: EnumAuditStatus): void {
    if (status === EnumAuditStatus.NO_ADUIT) {
      console.log("没有审核");
    } else if (status === EnumAuditStatus.MANAGER_ADUIT_SUCCESS) {
      console.log("经理审核通过");
    } else if (status === EnumAuditStatus.FINAL_ADUIT_SUCCESS) {
      console.log("财务审核通过");
    } else {
      console.log("审核失败");
    }
  }
}

const aduit = new MyAduit();
aduit.getAduitStatus(EnumAuditStatus.FINAL_ADUIT_SUCCESS);

interface Product {
  id: number | string;
  count: number;
  [key: string]: any;
  transfer(): void;
  transfer2: () => void;
}
interface Getter {
  [key: string]: (state: any) => void;
}

// type 和 interface
/* 1，定义类型范围不同
interface 只能定义对象类型或接口当名字的函数类型。
type 可以定义任何类型，包括基础类型、联合类型 ，交叉类型，元组。
2，接口可以extends 一个或者多个 接口或类， 也可以继承type，但type 类型没有继承功能
3，用 type 交叉类型 & 可让类型中的成员合并成一个新的 type 类型，但接口不能交叉合并
4，接口可以合并声明，type没有这个功能 */

interface Error {
  name: string;
}
interface Error {
  message: string;
  stack?: string;
}
let error: Error = {
  message: "uu",
  name: "99"
};

interface ActionContext {
  (state: any, commit: any): void;
}

let actionContext: ActionContext = (state: any, commit: any) => {
  console.log(state);
};

export type IncreBool = boolean | 1 | 0;
export function mounted(t: IncreBool) {
  if (t) {
    console.log("YES");
  } else {
    console.log("NO-1");
  }
}
mounted(0);
mounted(1);

export {};
