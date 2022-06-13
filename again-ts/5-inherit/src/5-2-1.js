class Parent {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Son {
  constructor(favor, sex) {
    this.favor = favor;
    this.sex = sex;
  }
}
const son1 = new Son("篮球", "男");
console.log("son1", son1);

console.log("Son.prototype", Son.prototype);
Son.prototype = new Parent("张三", 25);
console.log("Son.prototype.constructor", Son.prototype.constructor === Parent); // false
console.log("Son.prototype.constructor", Son.prototype.constructor === Son); // true
const son2 = new Son("游戏", "女");
console.log("son2", son2);
console.log(Son.prototype === son2.__proto__); // true
console.log(Son.prototype.__proto__ === Parent.prototype); // false
