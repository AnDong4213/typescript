import OrderDetail from "./OrderDetail";

class Order {
  constructor(
    public orderId: number,
    public date: Date,
    public custname: string,
    public phone: string,
    public orderDetailArray: Array<OrderDetail>
  ) {}

  haha() {
    console.log(999);
  }
}

var orderDate = new Date(2023, 10, 17, 5, 20, 0);

let orderDetailOne = new OrderDetail(10, "电视机2", 5000, 3);
let orderDetailTwo = new OrderDetail(11, "桌子", 2000, 2);

let order = new Order(1, orderDate, "李四", "34325", [
  orderDetailOne,
  orderDetailTwo
]);
console.log(order);
console.log(order.orderDetailArray);
console.log(Order.prototype);
