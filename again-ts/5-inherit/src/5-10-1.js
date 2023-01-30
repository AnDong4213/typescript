/* class A {
  constructor() {
    this.x = 1;
  }
  print() {
    console.log(this.x);
  }
}

class B extends A {
  constructor() {
    super();
    this.x = 2;
  }
  m() {
    // super.print.call(this)
    super.print();
  }
}

let b = new B();
b.m()  // 2 */

class A {
  constructor() {
    this.x = 1;
  }
}
class B extends A {
  constructor() {
    super();
    this.x = 2;
    super.aaa = 9;
    super.x = 3; // 通过super对某个属性赋值，这时super就是this，赋值的属性会变成子类实例的属性。
    console.log(super.x); // undefined  A.prototype.x，所以返回undefined。
    console.log(this.x); // 3
  }
}
let b = new B();
console.log(b);

// 如果super作为对象，用在静态方法之中，这时super将指向父类，而不是父类的原型对象。

// 在子类的静态方法中通过super调用父类的方法时，父类方法内部的this指向当前的子类，而不是子类的实例。
/* class A {
  constructor() {
    this.x = 1;
  }
  static print() {
    console.log("this.x", this.x); // this指向的是B，而不是B的实例。
  }

  print() {
    console.log("this.x----", this.x);
  }
}
class B extends A {
  constructor() {
    super();
    this.x = 2;
  }
  static m() {
    super.print();
  }
}

A.x = 66;
B.x = 33;
B.m(); // 33
A.print(); // 66 */
