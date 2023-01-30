// 借用构造函数+原型链继承组合模式

// 缺点：调用了两次父类构造函数 【 People 构造函数】 new People 调用构造函数带来问题：
/*
1，进入 People 构造函数为属性赋值，分配内存空间，浪费内存；
2，赋值导致效率下降一些，关键是new People 赋的值无意义，出现代码冗余，new ChinesePeople出来的对象和这些值毫不相干，是通过子类 ChinesePeople 构造函数中的 call 来向父类People构造函数赋值。
*/

function People(name, sex, phone) {
  this.name = name; // 实例属性
  this.sex = sex;
  this.phone = phone;
}

People.prototype.doEat = function () {
  console.log(this.name + "吃饭..p..");
};

function ChinesePeople(name, sex, phone, national) {
  People.call(this, name, sex, phone);
  this.national = national;
}
ChinesePeople.prototype = new People(); // 进入 People 构造函数为属性赋值，分配内存空间，浪费内存；
// ChinesePeople.prototype = People.prototype; // People.prototype.constructor指向了ChinesePeople，这是不对的
ChinesePeople.prototype.constructor = ChinesePeople;
// console.log(People.prototype.constructor);

const p = new ChinesePeople("小米", "1", "124", "中国");
console.log(p);
p.doEat();
