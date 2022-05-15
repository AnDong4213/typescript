//prototype是(函数对象空间)中由系统自动给它分配的一个原始属性叫原型对象属性，简称原型。prototype指向的空间叫做函数原型对象空间

function QQUsers(QQNo_, QQAge_, QQMark_) {
  this.QQNo = QQNo_; //QQ号
  this.QQAge = QQAge_; //Q龄
  this.QQMark = QQMark_; //QQ标签
  //引用对象类型=引用类型=对象类型=引用数据类型
  // 数组也是一种引用数据类型
  // this.commonfriends = ["骑驴看海", "大漠上的英雄", "坚实的果子", "小草"]; //共同好友
  // 方法也是一种引用数据类型
  this.show = function () {
    console.log(`QQ号:${this.QQNo},QQ龄:${this.QQAge},QQ标注:${this.QQMark}`);
    console.log(`共同的好友是:${this.commonfriends}`);
  };
}

QQUsers.prototype.show = function () {
  console.log(999);
};

// new 运算符创建一个用户定义的对象类型的实例或具有构造函数的内置对象的实例。

/* new 关键字会进行如下的操作：

创建一个空的简单JavaScript对象（即{}）；
为步骤1新创建的对象添加属性__proto__，将该属性链接至构造函数的原型对象 ；
将步骤1新创建的对象作为this的上下文 ；
如果该函数没有返回对象，则返回this。 */

const aa = new QQUsers("1543463", 21, "后继乏人");
const bb = new QQUsers("164353", 3, "跟你讲开发");

QQUsers.prototype = {
  commonfriends: ["abc", "bcd", "骑驴看海"]
};

/* console.log(QQUsers.prototype === aa.__proto__); // true
console.log(aa.__proto__ === bb.__proto__); // true */

// aa.__proto__.show();
aa.show();

/* const aa = {};
console.log(aa.prototype); // undefined */
