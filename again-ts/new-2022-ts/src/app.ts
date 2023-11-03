import Customer from "./test";

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

export {};
