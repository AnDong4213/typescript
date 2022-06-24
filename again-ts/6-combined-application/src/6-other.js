const oD = {
  a: 1,
  b: 2,
  eat() {
    console.log(this.b);
  }
};

function oE(c) {
  this.c = c;
  this.b = 77;
  this.eat = function () {
    console.log(this.c);
  };
}
oE.call(oD, 8);
console.log(oD.c);
// console.log(oD.b);
oD.eat();

// export {};
console.log(Object.prototype.toString.call(8));
