import List from "./List";

class Node<T> {
  public currentvalue!: T;
  public next!: Node<T>;
  public prev!: Node<T>;
  constructor(prev: Node<T>, currentvalue: T, next: Node<T>) {
    this.prev = prev;
    this.currentvalue = currentvalue;
    this.next = next;
  }
}
// LinkedList 具体实现同学们先不管，重心先放到TS泛型和多态，泛型约束上
class LinkedList<T> implements List<T> {
  has(value: T): boolean {
    throw new Error("Method not implemented.");
  }
  public first!: Node<T>;
  public currentOrLast!: Node<T>;
  public index: number = 0; // 集合大小
  size() {
    return this.index ? this.index : 0;
  }
  public addFirst(newValue: T): void {}
  public add(index: number, newValue: T): void;
  public add(newValue: T): void;
  public add(indexornewvalue: any, newValue: any = 0): void {}
  public checkIndex(index: number) {
    if (index >= this.index) {
      throw new Error(`提供的索引值大于元素个数:"this.size`);
    }
  }
  public get(index: number): T {
    let t: any;
    return t;
  }

  node(index: number): Node<T> {
    let t: any;
    return t;
  }

  remove(indexOrnodeobj: number): number;
  remove(indexOrnodeobj: T): T;
  remove(indexOrnodeobj: any): any {
    let t: any;
    return t;
  }

  public unlink(nodeRemoved: Node<T>) {
    return nodeRemoved;
  }
}

// 多态体现在： 1.父类对象变量可以接受任何它的子类对象
//  2. 接口类型对象变量可以接受任何它的实现类的对象
let arrayList: List<string> = new LinkedList<string>();

arrayList.add("王五");
arrayList.add("吴俊泽");
arrayList.add("张海同");
arrayList.add("周陈平");
arrayList.add("陈平");
arrayList.add("霍东阁");
arrayList.add("张洪海");
console.log("arrayList", arrayList);

export {};
