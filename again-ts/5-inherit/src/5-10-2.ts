// 父类：Vechile   交通工具。
class Vechile {
  static count: number = 3;
  public brand: string; // 品牌
  public vechileNo: string; // 车牌号
  public days: number; // 租赁天数
  public total: number = 0; // 支付的租赁总费用
  public deposit: number; // 押金
  constructor(
    brand_: string,
    vechileNo_: string,
    days_: number,
    deposit_: number
  ) {
    this.brand = brand_;
    this.vechileNo = vechileNo_;

    this.days = days_;
    this.deposit = deposit_;
    console.log("constructor Vechile=>this.brand:", this.brand);
  }
  // 计算租赁车的价格 ( calculateRent)
  public calculateRent() {
    console.log("calculateRent来自Vechile=>this.brand:", this.brand);

    console.log(this.brand + " 车牌号为:" + this.vechileNo + "开始被租");
    return 0;
  }
  //支付押金的方法( payDesposit)
  payDesposit() {
    console.log(
      this.brand + " 车牌号为:" + this.vechileNo + " 支付了:" + this.deposit
    );
  }

  //  安全检测方法（safeShow)
  public safeShow() {
    console.log("车规则-----");
  }
}

// 子类Car类 独有属性为type_
class Car extends Vechile {
  // public brand: string = "nobrand"
  public type: string; //车的型号
  constructor(
    brand_: string,
    vechileNo_: string,
    days_: number,
    deposit_: number,
    type_: string
  ) {
    //  Vechile.call(this,brand_, vechileNo_, days_, total_, deposit_)
    super(brand_, vechileNo_, days_, deposit_);
    this.type = type_;
  }
  // 根据车的型号来获取租用一天该型号车的租金
  public getPriceByType() {
    let rentMoneyByDay: number = 0; //每天的租金
    if (this.type === "普拉多巡洋舰") {
      rentMoneyByDay = 800;
    } else if (this.type === "凯美瑞旗舰版") {
      rentMoneyByDay = 400;
    } else if (this.type === "威驰智行版") {
      rentMoneyByDay = 200;
    }
    return rentMoneyByDay;
  }

  public calculateRent() {
    //方法重写 [override]
    // this.safeShow(); // 寄生组合继承模式 middle()
    super.calculateRent(); //=Vechile.prototype.calculateRent.call(this)
    console.log("Car:", Car.count);
    console.log("this.brand:", this.brand);
    return this.days * this.getPriceByType();
  }
  checkIsWeigui(isOverWeight: boolean) {
    if (isOverWeight) {
      this.total = this.total + 500;
    }
  }
}

let car = new Car("普拉多", "京3A556", 3, 100000, "凯美瑞旗舰版");
console.log(car.calculateRent());
for (let oo in car) {
  console.log("oo---", oo);
}

export {};
