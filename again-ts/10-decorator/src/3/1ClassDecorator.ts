// 不带参数的类装饰器
function FirstClassDecorator(targetClass: any) {
  /* const a = new targetClass();
  a.buy();
  console.log("targetClass--", targetClass.prototype);
  console.log("targetClass--", targetClass.prototype.constructor.name);
  Object.keys(targetClass.prototype).forEach((methodname) => {
    console.log("方法", methodname);
    let dataprop = Object.getOwnPropertyDescriptor(
      targetClass.prototype,
      methodname
    );
    console.log("方法数据属性:", dataprop);
  }); */

  console.log("targetClass.name--", targetClass.name);
}

@FirstClassDecorator
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
