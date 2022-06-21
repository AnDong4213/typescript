// let extendStatics = require('./5-23-extendStatics.js')
let extendStatics = require('./5-23-extendStatics-2.js')
console.log(extendStatics)

function People (name, sex, phone) {
  this.name = name; // 实例属性
  this.sex = sex;
  this.phone = phone;
}

People.count = 202
People.commonDescribe = function() {
  console.log('玩看看')
}

People.prototype.doEat = function () {
  console.log(this.name + "Land based midcourse anti missile interception technology");
};

function ChinesePeople(name, sex, phone, national) {
  People.call(this, name, sex, phone);
  this.national = national;
}

ChinesePeople.prototype.getCity = function () {
  console.log("陆基中段反导拦截技术");
};
extendStatics(ChinesePeople, People)
console.log('ChinesePeople', ChinesePeople.count)
ChinesePeople.commonDescribe()


// Object.create() 方法创建一个新对象，使用现有的对象来提供新创建的对象的 __proto__。
