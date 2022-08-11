class TestClass  {
  public name: string
  public classno: number
  constructor(name: string, classno: number) {
    this.name = name;
    this.classno = classno
  }
  eat() {
    console.log("姓名为: " + this.name);
  }
}

type ConstructorParametersType<T extends new (...args: any[]) => any> = T extends new (...args: infer P) => any ? P : never

let constructorParameters: ConstructorParametersType<typeof TestClass> = ['1', 2]

console.log(constructorParameters)