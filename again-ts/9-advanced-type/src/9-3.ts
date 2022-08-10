class ChinesePeople  {
  public name: string
  public sex: string
  public phone: string
  public national: string

  constructor(name: string, sex: string, phone: string, national: string) {
    this.name = name;
    this.sex = sex
    this.phone = phone
    this.national = national
  }
}

// 一个类的构造函数的类型表示
const MyChinesePeople: typeof ChinesePeople = ChinesePeople
const c1 = new MyChinesePeople('安安','男','123','汉');
console.log(c1)

// 通用写法
const MyChinesePeople2: new (...args: any[]) => any = ChinesePeople

type Constructor<T> = new (...args: any[]) => T;
const MyChinesePeople3: Constructor<ChinesePeople> = ChinesePeople