class People {
  public name!: string;
  public age!: number;
  public address!: string;
  eat() {}
}

class ChinesePeople extends People {
  phone!: string;
}

let cp = new ChinesePeople();

type extractType = Extract<ChinesePeople, People>;

// type Extract<T, U> = T extends U ? T : Boolean
type Extract<T, U> = T extends U ? T : never;

type extractUnionType = Extract<string | number, string>; //string || never

// const aa: extractUnionType = { s: 9 };  // 不能将类型“{ s: number; }”分配给类型“string”。

const bb: extractUnionType = 'str'
console.log(bb)

type Person = {
  name: string
  age: number
  sex: boolean
};

type PersonKeys = keyof Person;
type Age = Exclude<PersonKeys, "name">;
const age: Age = 'sex'


interface Worker {
  name: string
  age: number
  email: string
  salary: number
}
interface Student {
  name: string
  age: number
  email: string
  grade: number
}

type W = keyof Worker
const kk: W = 'salary'

export {};
