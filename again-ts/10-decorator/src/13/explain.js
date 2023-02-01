function Customer() {
  this.custname = "王柳";
}

Customer.prototype.buy = function (things) {
  console.log(this.custname, "购买----");
  console.log(things);
};

class StringUtil {
  static trimSpace(str) {
    return str.replace(/\s+/g, "");
  }
}

let dataProps = Object.getOwnPropertyDescriptor(Customer.prototype, "buy");
const dataPropMethod = dataProps.value;

dataProps.value = function (...args) {
  args = args.map((arg) => {
    if (typeof arg === "string") {
      return StringUtil.trimSpace(arg);
    }
    return arg;
  });
  console.log("方法前置拦截----");
  dataPropMethod.apply(this, args);
  console.log("----方法后置拦截");
};
Object.defineProperty(Customer.prototype, "buy", dataProps);

let cust = new Customer();
cust.buy("视  频");

// 顾客目标类
class CustomerService {
  custname = "王五";
  degree;
  constructor() {}

  show() {
    console.log("顾客名:", this.custname);
  }

  login() {
    console.log("login--");
  }

  static haha() {
    console.log(this.hihi);
  }
}
CustomerService.prototype.constructor.hihi = function () {
  console.log("---hihi");
};
CustomerService.haha();
CustomerService.hihi();
