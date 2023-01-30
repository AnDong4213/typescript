function RootClass() {}
RootClass.rootName = "rootname4";

// People.__proto__ = RootClass
Object.setPrototypeOf(People, RootClass);
function People(name, sex, phone) {
  this.name = name; // 实例属性
  this.sex = sex;
  this.phone = phone;
}

People.count = 400;
People.commonDescribe = function () {
  console.log("需要吃饭");
};

People.prototype.doEat = function () {
  console.log(
    this.name + "Land based midcourse anti missile interception technology"
  );
};
// console.log(People.prototype)

function ChinesePeople(name, sex, phone, national) {
  People.call(this, name, sex, phone);
  this.national = national;
}

ChinesePeople.prototype.getCity = function () {
  console.log("陆基中段反导拦截技术");
};

// 第一种实现方式
/* for (let key in People) {
  if (People.hasOwnProperty(key)) {
    ChinesePeople[key] = People[key]
  }
} */

// 第二种实现方式
/* Object.keys(People).forEach(key => {
  ChinesePeople[key] = People[key]
}) */

// 第三种实现方式
// ChinesePeople.__proto__ = People

// 第四种实现方式
// Object.setPrototypeOf() 方法设置一个指定的对象的原型（即，内部 [[Prototype]] 属性）到另一个对象或 null。

// Hook up the static properties
Object.setPrototypeOf(ChinesePeople, People);
// Set the instance properties
Object.setPrototypeOf(ChinesePeople.prototype, People.prototype);

console.log(ChinesePeople.count);
console.log(ChinesePeople.rootName);
ChinesePeople.commonDescribe();

const p = new ChinesePeople("小米plus+", "1", "124", "中国2");
console.log(p);
p.doEat();
p.getCity();

// Object.create() 方法创建一个新对象，使用现有的对象来提供新创建的对象的 __proto__。

function Human(name, level) {
  this.name = name;
  this.level = level;
}
function SuperHero(name, level) {
  Human.call(this, name, level);
}

Object.setPrototypeOf(SuperHero.prototype, Human.prototype);

// Set the `[[Prototype]]` of `SuperHero.prototype`
// to `Human.prototype`
// To set the prototypal inheritance chain
Human.prototype.speak = function () {
  return `${this.name} says hello.`;
};
SuperHero.prototype.fly = function () {
  return `${this.name} is flying.`;
};
const superMan = new SuperHero("Clark Kent", 1);
console.log(superMan.fly());
console.log(superMan.speak());
