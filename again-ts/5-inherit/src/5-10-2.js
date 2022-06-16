"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
// 父类：Vechile   交通工具。
var Vechile = /** @class */ (function () {
    function Vechile(brand_, vechileNo_, days_, deposit_) {
        this.total = 0; // 支付的租赁总费用
        this.brand = brand_;
        this.vechileNo = vechileNo_;
        this.days = days_;
        this.deposit = deposit_;
        console.log("constructor Vechile=>this.brand:", this.brand);
    }
    // 计算租赁车的价格 ( calculateRent)
    Vechile.prototype.calculateRent = function () {
        console.log("calculateRent来自Vechile=>this.brand:", this.brand);
        console.log(this.brand + " 车牌号为:" + this.vechileNo + "开始被租");
        return 0;
    };
    //支付押金的方法( payDesposit)
    Vechile.prototype.payDesposit = function () {
        console.log(this.brand + " 车牌号为:" + this.vechileNo + " 支付了:" + this.deposit);
    };
    //  安全检测方法（safeShow)
    Vechile.prototype.safeShow = function () {
        console.log("车规则-----");
    };
    Vechile.count = 3;
    return Vechile;
}());
// 子类Car类 独有属性为type_
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(brand_, vechileNo_, days_, deposit_, type_) {
        var _this = 
        //  Vechile.call(this,brand_, vechileNo_, days_, total_, deposit_)
        _super.call(this, brand_, vechileNo_, days_, deposit_) || this;
        _this.type = type_;
        return _this;
    }
    // 根据车的型号来获取租用一天该型号车的租金
    Car.prototype.getPriceByType = function () {
        var rentMoneyByDay = 0; //每天的租金
        if (this.type === "普拉多巡洋舰") {
            rentMoneyByDay = 800;
        }
        else if (this.type === "凯美瑞旗舰版") {
            rentMoneyByDay = 400;
        }
        else if (this.type === "威驰智行版") {
            rentMoneyByDay = 200;
        }
        return rentMoneyByDay;
    };
    Car.prototype.calculateRent = function () {
        //方法重写 [override]
        // this.safeShow(); // 寄生组合继承模式 middle()
        _super.prototype.calculateRent.call(this); //=Vechile.prototype.calculateRent.call(this)
        console.log("Car:", Car.count);
        console.log("this.brand:", this.brand);
        return this.days * this.getPriceByType();
    };
    Car.prototype.checkIsWeigui = function (isOverWeight) {
        if (isOverWeight) {
            this.total = this.total + 500;
        }
    };
    return Car;
}(Vechile));
var car = new Car("普拉多", "京3A556", 3, 100000, "凯美瑞旗舰版");
console.log(car.calculateRent());
