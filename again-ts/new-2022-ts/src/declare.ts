// declare 关键字用来告诉编译器，某个类型是存在的，可以在当前文件中使用。
// 就是让当前文件可以使用其他文件声明的类型
declare enum E1 {
  A,
  B
}

declare let x: number;

declare function sayHello(name: string): void;

declare namespace GreetingLib {
  interface LogOptions {
    verbose?: boolean;
  }
  interface AlertOptions {
    modal: boolean;
    title?: string;
    color?: string;
  }
}
