// 匿名

function LoggerInfoDecorator(targetClass: new (...args: any) => Test) {
  return class extends targetClass {
    public __de: string = "装饰器属性";
    constructor(...args: any) {
      super(...args);
      console.log("日志信息...targetClass:", (targetClass as any).name);
    }

    methodone() {
      console.log("methodone:", this.name, this.__de);
    }
  };
}

@LoggerInfoDecorator
class Test {
  name: string;
  age: number = 9;
  haha!: () => void;

  constructor(name: string) {
    this.name = name;
  }

  eat() {
    console.log(this.name, "吃饭", this.age);
  }
}

Test.prototype.haha = function () {
  console.log("测试----");
};

let test = new Test("小米");
(test as any).methodone();
test.eat();
test.haha();

export {};
