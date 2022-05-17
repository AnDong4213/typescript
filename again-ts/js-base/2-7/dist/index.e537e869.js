class Order {
    orderId = 0;
    date = new Date();
    custname = "nocustname";
    phone = "111";
    // public orderDetail:OrderDetail[]=[]
    orderDetailArray = [];
    constructor(orderId_, date_, custname_, phone_, orderDetailArray_){
        this.orderId = orderId_;
        this.date = date_;
        this.custname = custname_;
        this.phone = phone_;
        this.orderDetailArray = orderDetailArray_;
    }
}
var orderDate = new Date(2023, 10, 17, 5, 20, 0);
let orderDetailOne = new OrderDetail(10, "电视机", 5000, 3);
let orderDetailTwo = new OrderDetail(11, "桌子", 2000, 2);
let order = new Order(1, orderDate, "李四", "34325", [
    orderDetailOne,
    orderDetailTwo
]);
console.log(order);

//# sourceMappingURL=index.e537e869.js.map
