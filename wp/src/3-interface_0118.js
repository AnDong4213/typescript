var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var p1 = { x: 2, y: 3 };
var a = [1, 2, 3];
var ro = a;
// ro.push(9)
console.log(ro);
function createSquare(config) {
    var newSquare = { color: 'white', area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
// let obj = { color: 'red', width: 8, bb: 9 } // 就是squareOptions
// let mySquare = createSquare(obj) // 不报错
// let mySquare = createSquare({ color: 'red', width: 67, bb: 9 } as SquareConfig)  // 不报错
var mySquare = createSquare({ color: 'red', width: 5, bb: 9 });
console.log(mySquare);
var mySearch = function (src, sub) {
    var result = src.search(sub);
    return result > -1;
};
console.log(mySearch('andong', 'an6'));
var arr = [99, 77, 666];
console.log(arr[2]);
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Dog;
}(Animal));
