function getToken() {
  var array = new Uint32Array(1);
  window.crypto.getRandomValues(array);
  var token = array[0];
  const random = array[0] / 0xffffffff;
  return token;
}
console.log(getToken());
console.log(Math.random());

const mRandom = () => {
  // crypto 需要考虑浏览器兼容
  const crypto =
    window.crypto ||
    window.webkitCrypto ||
    window.mozCrypto ||
    window.oCrypto ||
    window.msCrypto;
  const array = new Uint32Array(1);
  crypto.getRandomValues(array);
  const random = array[0] / 0xffffffff;

  return random;
};
console.log(mRandom());

function randomPassword(size) {
  let seed = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9"
  ]; //数组
  let createString = "",
    seedLength = seed.length; //数组长度
  for (let i = 0; i < size; i++) {
    let j = Math.floor(mRandom() * seedLength);
    createString += seed[j];
  }
  return createString;
}
console.log(randomPassword(10));

function getDateTime() {
  var date = new Date(),
    year = date.getFullYear(),
    month = date.getMonth() + 1,
    day = date.getDate(),
    hour = date.getHours(),
    minute = date.getMinutes(),
    second = date.getSeconds();
  month = checkTime(month);
  day = checkTime(day);
  hour = checkTime(hour);
  minute = checkTime(minute);
  second = checkTime(second);
  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  return (
    "" +
    year +
    "年" +
    month +
    "月" +
    day +
    "日" +
    hour +
    "时" +
    minute +
    "分" +
    second +
    "秒"
  );
}

console.log(getDateTime());
