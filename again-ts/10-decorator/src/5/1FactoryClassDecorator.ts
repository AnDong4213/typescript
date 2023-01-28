// 需求：对已经开发好的项目中的任何一个类，创建实例时，
// 打印日志信息，
// 输出哪一个类被创建了,并输出传递了哪些参数信息

// 这样写，@LoggerInfoDecorator有报错
// 不能将类型“new (...args: any) => LoggerSonClass”分配给类型“new (name: string) => Test”。类型“LoggerSonClass”缺少类型“Test”中的以下属性: name, age, eat
/* function LoggerInfoDecorator(targetClass: any) {
  class LoggerSonClass extends targetClass {
    constructor(...args: any) {
      super(...args);
      console.log("日志信息...targetClass:", targetClass.name);
    }
  }
  return LoggerSonClass;
} */

// function LoggerInfoDecorator(targetClass: new (...args: any) => Test) {
function LoggerInfoDecorator<T extends { new (...args: any): any }>(
  targetClass: new (...args: any) => Test
) {
  class LoggerSonClass extends targetClass {
    constructor(...args: any) {
      super(...args);
      console.log("日志信息...targetClass:");
    }

    methodone() {
      console.log("methodone:", this.name);
    }
  }
  return LoggerSonClass;
}

@LoggerInfoDecorator
class Test {
  name: string;
  age!: number;

  constructor(name: string) {
    this.name = name;
  }

  eat() {
    console.log(this.name, "吃饭");
  }
}

let test = new Test("wer");
(test as any).methodone();
test.eat();

type TestConstructorType = new (...args: any) => Test;
let LoggerSonClass = LoggerInfoDecorator(Test);
let LoggerSonClassInstance = new LoggerSonClass("王五");
LoggerSonClassInstance.methodone();

export {};
