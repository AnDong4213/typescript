let People = function (name, sex, phone) {
  this.name = name; // 实例属性
  this.sex = sex;
  this.phone = phone;
}

People.count = 300
People.commonDescribe = function() {
  console.log('需要吃饭')
}

People.prototype.doEat = function () {
  console.log(this.name + "吃饭.pp..");
};
// console.log(People.prototype)

function ChinesePeople(name, sex, phone, national) {
  People.call(this, name, sex, phone);
  this.national = national;
}

ChinesePeople.prototype.getCity = function () {
  console.log("BJ");
};

for (let key in People) {
  console.log(key)
}

// Object.create() 方法创建一个新对象，使用现有的对象来提供新创建的对象的 __proto__。
