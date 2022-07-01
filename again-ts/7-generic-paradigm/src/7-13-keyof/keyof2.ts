import Order from "./Order";
import OrderDetail from "./OrderDetail";

class ObjectRefImpl<T extends object, K extends keyof T> {
  public readonly __v_isRef = true;

  constructor(
    private readonly _object: T,
    private readonly _key: K,
    private readonly _defaultValue?: T[K]
  ) {}

  get value() {
    const val = this._object[this._key];
    return val === undefined ? (this._defaultValue as T[K]) : val;
  }

  set value(newVal) {
    this._object[this._key] = newVal;
  }

  public getId() {}
}

let orderDetailOne = new OrderDetail(10, "电视机", 5000, 3);
let orderDetailTwo = new OrderDetail(11, "桌子", 2000, 2);
var orderDate = new Date(2023, 10, 17, 5, 20, 0);
let order = new Order(1, orderDate, "李武", "15910394684", [
  orderDetailOne,
  orderDetailTwo
]);
console.log(order);

// let objectRefImpl = new ObjectRefImpl<Order, "phone">(order, "phone");
let objectRefImpl = new ObjectRefImpl(order, "phone");
console.log(objectRefImpl.value);
// objectRefImpl.value = "33";
// console.log(objectRefImpl.value);
