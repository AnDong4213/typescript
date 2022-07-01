// 订单详情类
export default class OrderDetail {
  public orderDetailId: number | undefined;
  public productName: string;
  public price!: number;
  public count!: number;

  constructor(
    orderDetailId_: number,
    productName_: string,
    count_: number,
    price_: number
  ) {
    this.orderDetailId = orderDetailId_;
    this.productName = productName_;
    this.price = price_;
    this.count = count_;
  }

  public getTotal(): number {
    return this.price * this.count;
  }
}
