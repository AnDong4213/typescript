function quickSort<T extends number>(arr: Array<T>): Array<T> {
    if (arr.length < 2) { return arr }
  
    var left: Array<T> = [];
    var right: Array<T> = [];
    // var mid = arr.splice(arr.length / 2 >> 1, 1)[0];
    var mid = arr.splice(arr.length >> 1, 1)[0];
    console.log("mid:", mid)
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] < mid) {
        left.push(arr[i]);
      } else {
        right.push(arr[i])
      }
    }
    return quickSort(left).concat(mid, quickSort(right))
  }
  
  
  var chineseNumArr = [3, 1, 8, 20, 923, 15, 2, 7, 13, 11, 19, 181,453, 5, 6, 17, 4, 1060];
  
  let chineseArrSort = quickSort(chineseNumArr)
  console.log("chineseArrSort2:", chineseArrSort)
  chineseArrSort.forEach(n => {
    // console.log(n.toFixed(2))
  })