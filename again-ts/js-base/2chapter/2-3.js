//prototype是(函数对象空间)中由系统自动给它分配的一个原始属性叫原型对象属性，简称原型。prototype指向的空间叫做函数原型对象空间

function QQUsers(QQNo_, QQAge_, QQMark_) {
  this.QQNo = QQNo_; //QQ号
  this.QQAge = QQAge_; //Q龄
  this.QQMark = QQMark_; //QQ标签
  //引用对象类型=引用类型=对象类型=引用数据类型
  // 数组也是一种引用数据类型
  this.commonfriends = ["骑驴看海", "大漠上的英雄", "坚实的果子", "小草"]; //共同好友
  // 方法也是一种引用数据类型
  this.show = function () {
    console.log(`QQ号:${this.QQNo},QQ龄:${this.QQAge},QQ标注:${this.QQMark}`);
    console.log(`共同的好友是:${this.commonfriends}`);
  };
}
const aa = new QQUsers();
const bb = new QQUsers();
console.log(QQUsers.prototype === aa.__proto__);
console.log(aa.__proto__ === bb.__proto__);

/* const aa = {};
console.log(aa.prototype); // undefined */
