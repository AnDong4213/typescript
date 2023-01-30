/* new 关键字会进行如下的操作：

创建一个空的简单JavaScript对象（即{}）；
为步骤1新创建的对象添加属性__proto__，将该属性链接至构造函数的原型对象 ；
将步骤1新创建的对象作为this的上下文 ；
如果该函数没有返回对象，则返回this。 */

// 原型链继承的不足
// ​ 局限性：不能通过子类构造函数向父类构造函数传递参数

function Parent(name, age) {
  this.name = name;
  this.age = age;
}
Parent.prototype.friends = ["李四", "王文英"];

function Son(favor, sex) {
  this.favor = favor;
  this.sex = sex;
}

const son1 = new Son("篮球", "男");
console.log("son1", son1);

console.log("Son.prototype", Son.prototype);

console.log("-----------------------------");

Son.prototype = new Parent("张三", 25); // 原型链继承
Son.prototype.haha = function () {
  console.log("哈哈哈哈--");
};

console.log("Son.prototype.constructor", Son.prototype.constructor === Parent); // true
Son.prototype.constructor = Son; // 容易被遗忘的
console.log("Son.prototype.constructor", Son.prototype.constructor === Parent); // false
const son2 = new Son("游戏", "女");
console.log("son2", son2);
console.log("son2", son2.age);
console.log("son2", son2.friends);
son2.haha();

console.log(Son.prototype === son2.__proto__); // true
console.log(Son.prototype.__proto__ === Parent.prototype); // true
