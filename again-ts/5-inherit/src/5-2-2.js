/* new 关键字会进行如下的操作：

创建一个空的简单JavaScript对象（即{}）；
为步骤1新创建的对象添加属性__proto__，将该属性链接至构造函数的原型对象 ；
将步骤1新创建的对象作为this的上下文 ；
如果该函数没有返回对象，则返回this。 */

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
Son.prototype = Parent.prototype; // 如果Son.prototype 指向Parent.prototype
Son.prototype.constructor = Son;
console.log("Son.prototype.constructor", Parent.prototype.constructor === Son); // 如果Son.prototype 指向Parent.prototype ，Parent.prototype.constructor指向了Son，这是不对的

console.log("-----------------------====------");

const son2 = new Son("游戏", "女");
console.log("son2", son2);
console.log("son2", son2.age);
console.log("son2", son2.friends);
console.log(son2.__proto__ === Son.prototype); // true
console.log(Son.prototype.__proto__ === Parent.prototype); // false
console.log(Object.prototype);

let a = { aa: 8 };
let b = a;
b.aa = 9;
console.log(a, b);
