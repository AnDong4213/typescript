// 通用函数类型
type commonFunc = (...args: any) => any;

interface commonFunc2 {
  (...args: any): any;
}

class ShopCartService {
  public productName: string;
  public count: number;
  static count = 9;

  constructor(p: string, count: number) {
    this.productName = p;
    this.count = count;
  }

  addShopCart() {
    console.log("增加商品:", this.productName + ":数量:", this.count);
  }
}

// new不是创建的意思，仅代表后面的函数是构造函数
// 泛型工厂函数类型
type commonGp<T> = new (...args: any) => T;
interface commonGp2<U> {
  new (...args: any): U;
}

// 类构造函数对象变量
// ShopCartService.count;
console.log("===", ShopCartService.name);
console.log("---", Reflect);

const as2: commonGp2<ShopCartService> = ShopCartService;
console.log(new as2("TV2", 88).productName);

// type MyClassDecorator = <T>(targetClass: new (...args: any[]) => T) => any;
type MyClassDecorator = <T>(targetClass: { new (...args: any[]): T }) => any;

/* function Controller(rootPath: string): MyClassDecorator {
  return function <T>(targetClass: { new (...args: any[]): T }) {};
} */
function Controller(rootPath: string): MyClassDecorator {
  return function (targetClass) {};
}
