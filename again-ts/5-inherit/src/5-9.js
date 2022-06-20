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
People.prototype.age = 19;

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
function _extends(parent, son) {
  // 第一步: 创建一个寄生构造函数
  function Middle() {
    this.constructor = son;
  }
  Middle.prototype = parent.prototype;
  // 第二步:创建一个寄生新创建的构造函数的实例对象
  return new Middle();
}
ChinesePeople.prototype = _extends(People, ChinesePeople);
const p = new ChinesePeople("小米plus+", "1", "124", "中国2");
console.log(p);

// 主要用于遍历对象的可枚举属性，包括自有属性、继承自原型的属性
for (let oo in p) {
  // console.log("oo---", oo);
  if (p.hasOwnProperty(oo)) {
    // Object.getOwnProperty主要用于返回对象的自有属性，包括可枚举和不可枚举的属性，不包括继承自原型的属性。
    console.log("pp---", oo);
  }
}

console.log(Object.keys(p)); // Object.keys主要用于遍历对象自有的可枚举属性，不包括继承自原型的属性和不可枚举的属性。

p.doEat();
console.log(p.age);
