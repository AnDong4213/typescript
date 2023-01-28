// 带参数的类装饰器
function FirstClassDecorator(classinfo: string) {
  console.log("classinfo----", classinfo);
  return function (targetClass: any) {
    /* const a = new targetClass();
    a.buy(); */
    console.log("targetClass.name--", targetClass.name);
  };
}

@FirstClassDecorator("装饰CustomerService类的信息")
class CustomerService {
  name: string = "测试";
  constructor() {}

  buy() {
    console.log(this.name + "购买");
  }
  placeOrder() {
    //下单
    console.log(this.name + "下单购买");
  }
}

export {};
