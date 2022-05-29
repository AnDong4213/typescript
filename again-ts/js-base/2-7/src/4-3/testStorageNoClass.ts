localStorage.setItem("count", "30");

let obj = { username: "liwu", age: 12 };
localStorage.setItem("loginUser", JSON.stringify(obj));

//  问题1 代码零散
let value = localStorage.getItem("loginUser");
value = value !== null ? JSON.parse(value) : null;
console.log(value);
