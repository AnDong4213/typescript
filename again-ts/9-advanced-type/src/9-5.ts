class TestClass {
  public name: string;
  public classNo: number;
  constructor(name: string, classNo: number) {
    this.name = name;
    this.classNo = classNo;
  }
  eat() {
    console.log("姓名: " + this.name + "，班级：" + this.classNo);
  }
}

type Constructor<T> = new (...args: any[]) => T;

type ConstructorParametersType<T extends new (...args: any[]) => any> =
  T extends new (...args: infer P) => any ? P : never;

let constructorParameters: ConstructorParametersType<typeof TestClass> = [
  "1",
  2
];
console.log(constructorParameters);
console.log("------------------------------------------------");

/* function createInstance<T>(constructor: Constructor<T>, ...args: any[]) {
  // return new constructor(args[0], args[1])
  return new constructor(...args)
}
createInstance<TestClass>(TestClass, "wangwu", 115,).eat(); */

function createInstance<T, CP extends new (...args: any[]) => any>(
  constructor: Constructor<T>,
  ...args: ConstructorParametersType<CP>
) {
  return new constructor(...args);
}
createInstance<TestClass, typeof TestClass>(TestClass, "wangwu", 151930).eat();

// type LeftTrim<T extends string> = T extends ` ${infer P}` ? LeftTrim<P> : T

export {};
