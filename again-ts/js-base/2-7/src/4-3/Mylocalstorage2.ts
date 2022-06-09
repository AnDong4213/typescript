// 3）饿汉式单件设计模式实现步骤

// ​ 构建单件设计模式[饿汉式单件设计模式 立即创建对象]
// ​ 第一步：把构造器设置为私有的，不允许外部来创建类的实例【对象】
// ​ 第二步: 建立一个静态引用属性，同时把这个静态引用属性直接指向一个对象【 new MyLocalStorage()】
// ​ 第三步：外部调用第二步提供的静态方法来获取一个对象

class MyLocalStorage2 {
  // 对象属性【对象的基本类型属性和对象的引用属性】
  // 静态属性【静态的基本类型属性和静态的引用属性】
  static localstorage: MyLocalStorage2 = new MyLocalStorage2();
  static count: number = 3
  private constructor() {
    console.log("这是TS的单件设计模式的静态方法的构造器");
  }

  public setItem(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value))
  }


  public getItem(key: string) {
    let value = localStorage.getItem(key)
    return value != null ? JSON.parse(value) : null;
  }
}

// console.log(MyLocalStorage2.prototype)
// MyLocalStorage2.localstorage.getItem