import OrderDetail from "./OrderDetail";

class Order {
  public orderId: number = 0;
  public date: Date = new Date();
  public custname: string = "nocustname";
  public phone: string = "111";
  // public orderDetail:OrderDetail[]=[]
  public orderDetailArray: Array<OrderDetail> = [];

  constructor(
    orderId_: number,
    date_: Date,
    custname_: string,
    phone_: string,
    orderDetailArray_: Array<OrderDetail>
  ) {
    this.orderId = orderId_;
    this.date = date_;
    this.custname = custname_;
    this.phone = phone_;
    this.orderDetailArray = orderDetailArray_;
  }

  haha() {
    console.log(999);
  }
}

var orderDate = new Date(2023, 10, 17, 5, 20, 0);

let orderDetailOne = new OrderDetail(10, "电视机", 5000, 3);
let orderDetailTwo = new OrderDetail(11, "桌子", 2000, 2);

let order = new Order(1, orderDate, "李四", "34325", [
  orderDetailOne,
  orderDetailTwo
]);
console.log(order.orderDetailArray);
console.log(Order.prototype);
/* console.log(typeof Order);
console.log(typeof Array);
console.log(typeof Object);  // 都是  function */
