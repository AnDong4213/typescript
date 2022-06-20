// 寄生组合继承
/* 
寄生组合继承模式=借用构造函数继承+寄生继承。

寄生组合继承既沿袭了借用构造函数+原型链继承两个优势，而且解决了借用构造函数+原型链继承调用了两次父类构造函数为属性赋值的不足。寄生组合继承模式保留了借用构造函数继承，寄生组合继承模式使用寄生继承代替了原型链继承。

什么是寄生继承呢？就是 ChinesePeople.prototype 不再指向 new People( ) 出来的对象空间，而用 People 类 【父构造函数】的原型对象属性“克隆”了一个对象。再让ChinesePeople.prototype指向这个新对象，很好的避免了借用构造函数+原型链继承调用了两次父类构造函数为属性赋值的不足。
*/

function People(name, sex, phone) {
  this.name = name; // 实例属性
  this.sex = sex;
  this.phone = phone;
}

People.prototype.doEat = function () {
  console.log(this.name + "吃饭.pp..");
};

function ChinesePeople(name, sex, phone, national) {
  People.call(this, name, sex, phone);
  this.national = national;
}
/* function Middle() {}
Middle.prototype = People.prototype;
ChinesePeople.prototype = new Middle();
ChinesePeople.prototype.constructor = ChinesePeople;
const p = new ChinesePeople("小米", "1", "124", "中国2"); */

// 封装
/* function _extends(parent, son) {
  // 第一步: 创建一个寄生构造函数
  function Middle() {
    this.constructor = son;
  }
  Middle.prototype = parent.prototype;
  // 第二步:创建一个寄生新创建的构造函数的实例对象
  return new Middle();
}
ChinesePeople.prototype = _extends(People, ChinesePeople);
const p = new ChinesePeople("小米plus", "1", "124", "中国2"); */

ChinesePeople.prototype = Object.create(People.prototype)
ChinesePeople.prototype.constructor = ChinesePeople
const p = new ChinesePeople("小米note", "1", "124", "中国2");

console.log(p);
p.doEat();
console.log('---------------------------------------------------------------')

// Object.create() 方法创建一个新对象，使用现有的对象来提供新创建的对象的 __proto__。
const person = {
  isHuman: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  }
};
const me = Object.create(person, {
  age: {
    value: 25,
    writable: true
  }
});
console.log(me);
console.log(me.__proto__); // {isHuman: false, printIntroduction: ƒ}
console.log(me.isHuman); // false
me.name = "华为";
me.isHuman = true;
me.printIntroduction();
console.log(me);

/* const pe = {};
console.log(pe.__proto__); // 有值
console.log(pe.prototype); // undefined，没有值
function aa() {}
console.log('aa.__proto__', aa.__proto__) // 有值  */

function Shape() {
  this.x = 0;
  this.y = 0;
}
Shape.prototype.move = function (x, y) {
  this.x += x;
  this.y += y;
  console.info("Shape moved.");
};

function Rectangle() {
  Shape.call(this); // call super constructor.
}
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

const rect = new Rectangle();
rect.move(1, 1);

console.log(Object.prototype);
