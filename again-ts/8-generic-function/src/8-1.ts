function quickSort<T>(ar: Array<T>): Array<T> {
  let arr = ar.slice();
  if (arr.length < 2) {
    return arr;
  }

  var left: Array<T> = [];
  var right: Array<T> = [];
  // var mid = arr.splice(Math.floor(arr.length / 2), 1)[0];
  // var mid = arr.splice(arr.length / 2 >> 1, 1)[0];
  var mid = arr.splice(arr.length >> 1, 1)[0];
  // console.log("mid:", mid);
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < mid) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(mid, quickSort(right));
}

var chineseNumArr = [
  3, 1, 8, 20, 923, 15, 2, 7, 13, 11, 19, 181, 453, 5, 6, 17, 4, 106
];

let numberArrSort = quickSort(chineseNumArr);
console.log("numberArrSort2:", numberArrSort);
/* console.log(
  "numberArrSort2:",
  chineseNumArr.sort((a, b) => a - b)
); */

// 中文排序
function sortChinese<T>(arr: Array<T>): T[] {
  return arr.sort((c1, c2) => (c1 as any).localeCompare(c2, "zh-CN"));
}
/* var chineseArr = ["武汉", "郑州", "太原", "济南", "沈阳", "大连", "鹅城"];
console.log("numberArrSort2:", sortChinese(chineseArr)); */

// (2). 字符串自排序
function strSelfSort(str: string): string {
  return quickSort(str.split("")).join("");
}
/* console.log(strSelfSort("chinese")); */

// 判断数组中是否有中文元素
function isChinese<T>(arr: Array<T>): boolean {
  const pattern = /[\u4e00-\u9fa5]+/g;
  return arr.some((str) => pattern.test(str as any));
}
console.log(isChinese(["kkk", "k了kh"]));

// 中文+英文、数字数组排序混合方法
/* function sort<T>(arr: Array<T>): T[] {
  if (isChinese(arr)) {
    //如果是中文数组
    return sortChinese(arr);
  }
  let newArr = arr.map((item) => {
    return typeof item === "string" ? strSelfSort(item) : item;
  });
  //英文、数字数组排序
  return quickSort(newArr as any);
} */

function sort(data: string, count?: number): string; //[可有可无]
function sort<T>(data: T, count?: number): T; //分工明确
function sort(data: any, count: number = 5): any {
  if (typeof data === "string") {
    //如果是字符串
    return strSelfSort(data); // 按照字符串自排序
  }
  if (data instanceof Array) {
    //如果data是数组
    if (isChinese(data)) {
      //如果是中文数组
      return sortChinese(data);
    }
    let newArr = data.map((item) => {
      return typeof item === "string" ? strSelfSort(item) : item;
    });
    //英文、数字数组排序
    return quickSort(newArr as any);
  }
}
