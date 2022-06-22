// let extendStatics = require('./5-23-extendStatics.js')
let extendStatics = require("./5-23-extendStatics-2.js");
// console.log(extendStatics)

function People(name, sex, phone) {
  this.name = name; // 实例属性
  this.sex = sex;
  this.phone = phone;
}

People.count = 405;
People.commonDescribe = function () {
  console.log("哈哈");
};

People.prototype.doEat = function () {
  console.log(this.name + "anti missile interception technology");
};

function ChinesePeople(name, sex, phone, national) {
  People.call(this, name, sex, phone);
  this.national = national;
}

ChinesePeople.prototype.getCity = function () {
  console.log("北京");
};
extendStatics(ChinesePeople, People);
console.log("ChinesePeople.count", ChinesePeople.count);
ChinesePeople.commonDescribe();

const p = new ChinesePeople("小米plus--", "1", "124", "中国2");
p.doEat();
p.getCity();

// Object.create() 方法创建一个新对象，使用现有的对象来提供新创建的对象的 __proto__。
