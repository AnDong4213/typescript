// 对现有的数组进行封装，实现比Set取值更方便的结合，用方法重载实现
//  2.提供get方法 remove方法 显示方法【add方法】
// 其中需求中的remove方法有两个，我们用方法重载来实现

// 方法重载
class ArrayList {
  constructor(public elements: Array<object>) {}

  get(index: number) {
    return this.elements[index];
  }

  show() {
    this.elements.forEach((ele) => {
      console.log(ele);
    });
  }

  remove(value: number): number;
  remove(value: object): object;
  remove(value: any): any {
    this.elements = this.elements.filter((ele, index) => {
      if (typeof value === "number") {
        return value !== index;
      } else {
        return ele !== value;
      }
    });
    return value;
  }
}

let stuOne = { stuname: "wnagwu", age: 23 };
let stuTwo = { stuname: "lisi", age: 39 };
let stuThree = { stuname: "liuqi", age: 31 };

let arrayList = new ArrayList([stuOne, stuTwo, stuThree]);
console.log(arrayList);

// arrayList.remove(1);
arrayList.remove(stuOne);

arrayList.show();
