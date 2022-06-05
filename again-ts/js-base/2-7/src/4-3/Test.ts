import MyLocalStorage from "./Mylocalstorage";
MyLocalStorage.getInstance();
MyLocalStorage.getInstance();

// const my = new MyLocalStorage();
// my.setItem("age", 23);
MyLocalStorage.addTotal();
console.log(MyLocalStorage.getTotal());
