// 一个在任何位置都不能被实例化的类就是一个抽象类【abstract class 】

abstract class People {
  public name!: string;
  constructor(public profession?: string) {
    this.profession = "UI";
  }
  /* public eat() {
    console.log("People父类的eat");
  } */
  // 当抽象类把一个方法定义为抽象方法，那么会强制在所有子类中实现它
  public abstract eat(): void; // 抽象方法，没有方法体，带有abstract关键字

  static drink() {
    console.log("静态-果汁");
  }

  drink() {
    console.log("实例-果汁");
  }
}

// const p = new People(); // 无法创建抽象类的实例

class AmericanPeople extends People {
  public phone!: string;
  public eat() {
    console.log("用叉子吃...");
  }
}

class ChinesePeople extends People {
  public eat() {
    console.log("用筷子吃饭哈...");
  }
}

class TuzhuPeople extends People {
  public eat() {
    console.log("用手抓吃...");
  }
}

// 父类的对象变量people可以接受任何一个子类的对象,
// 例如可以接受AmericanPeople,ChinesePeople,TuzhuPeople子类对象
let people: People = new AmericanPeople();
// 从而用这个父类的对象变量来调用子类中重写的方法而输出不同的结果.
people.eat();
people = new ChinesePeople();
people.eat();
people = new TuzhuPeople();
people.eat();
console.log("----------------------------");
TuzhuPeople.drink();
people.drink();
console.log(people.profession);

export {};
