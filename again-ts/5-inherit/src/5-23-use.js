// let extendStatics = require('./5-23-extendStatics.js')
let extendStatics = require("./5-23-extendStatics-2.js");
// console.log(extendStatics)

function People(name, sex, phone) {
  this.name = name; // 实例属性
  this.sex = sex;
  this.phone = phone;
}

People.count = 404;
People.commonDescribe = function () {
  console.log("哈哈");
};

People.prototype.doEat = function () {
  console.log(this.name + "anti missile interception technology");
};

extendStatics(ChinesePeople, People);
function ChinesePeople(name, sex, phone, national) {
  People.call(this, name, sex, phone);
  this.national = national;
}

ChinesePeople.prototype.getCity = function () {
  console.log("北京");
};
// extendStatics(ChinesePeople, People);  放在此处父类的原型会覆盖子类的原型
console.log("ChinesePeople.count", ChinesePeople.count);
ChinesePeople.commonDescribe();

const p = new ChinesePeople("小米plus--", "1", "124", "中国2");
p.doEat();
p.getCity();

// console.log("p instanceof People", p instanceof People);  //  true

// Object.create() 方法创建一个新对象，使用现有的对象来提供新创建的对象的 __proto__。
/* const o = Object.create(null)
console.log(o) // {}
console.log(o.__proto__)   // undefined */

const aa = { a: 1, b: 2 };
function bb(age) {
  this.age = age;
  return this;
}
const cc = bb.call(aa, 24);
console.log(cc); // {a: 1, b: 2, age: 24}
console.log(aa); // {a: 1, b: 2, age: 24}
console.log(aa.age);
