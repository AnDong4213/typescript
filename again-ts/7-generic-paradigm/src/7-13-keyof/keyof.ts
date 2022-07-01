import Order from "./Order";

let obj = { address: "博鳌", phone: 1111, descri: "顺利" };

/* type mType = typeof obj;
// keyof 表示获取一个类或者一个对象类型 或者一个接口类型的所有属性名[ key ]组成的联合类型。
// keyof的参数是 类型，不能是值
type keyOfType = keyof mType; // type keyOfType = "address" | "phone" | "descri" */

type keyOfType = keyof typeof obj;
type keyOfType2 = "CONSOLE";

interface Obj2 {
  str: string;
  age: number;
}
type mType2 = keyof Obj2;
let str: mType2 = "age";
// let str2: mType2 = "age2"; // 报错
type ValueType = Obj2["str"]; // 类型也能像对象那样取值，只能用['']形式

// 获取Order类上所有属性+所有的public方法名组成的联合类型
type keyOfOrders = keyof Order;
let allValue: keyOfOrders = "doEat";

type orderIdTYpe = Order["phone"];
let p: orderIdTYpe = "33";

export {};
