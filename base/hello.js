var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// alert('hello world in TypeScript!');
var log = console.log.bind(console);
/* function area(shape: string, width: number, height: number) {
    var area = width * height;
    return "I'm a " + shape + " with an area of " + area + " cm squared.";
}
log(area("rectangle", 30, 15)) */
// 接口
/* interface Shape {
    name: string;
    width: number;
    height: number;
    color?: string;
}
function area(shape: Shape) {
    var area = shape.width * shape.height;
    return "I'm " + shape.name + " with area " + area + " cm squared";
}
log( area( {name: "rectangle", width: 30, height: 15} ) );
log( area( {name: "square", width: 30, height: 30, color: "blue"} ) ); */
/* var shape = {
    name: "rectangle",
    popup: function() {
        log('This inside popup(): ' + this.name);
        setTimeout(() => {
            log('This inside setTimeout(): ' + this.name);
            log("I'm a " + this.name + "!");
        }, 500);
 
    }
};
shape.popup(); */
var Shape = /** @class */ (function () {
    function Shape(name, width, height) {
        this.name = name;
        this.height = height;
        this.area = width * height;
        this.color = "pink";
    }
    Shape.prototype.shoutout = function () {
        return "I'm " + ("'" + this.color + "',") + " " + ("'" + this.name + "'") + " with an area of " + ("'" + this.area + "'") + " cm squared.";
    };
    return Shape;
}());
var square = new Shape("square", 30, 30);
log(square.shoutout());
log('Area: ' + square.area);
log('Name: ' + square.name);
log('Color: ' + square.color);
log('Width: ' + square.width);
log('Height: ' + square.height);
log('--------------------------------------------------');
var Shape3D = /** @class */ (function (_super) {
    __extends(Shape3D, _super);
    function Shape3D(name, width, height, length) {
        var _this = _super.call(this, name, width, height) || this;
        _this.name = name;
        _this.volume = length * _this.area;
        return _this;
    }
    Shape3D.prototype.shoutout = function () {
        return "I'm " + this.name + " with a volume of " + this.volume + " cm cube.";
    };
    Shape3D.prototype.superShout = function () {
        return _super.prototype.shoutout.call(this);
    };
    return Shape3D;
}(Shape));
var cube = new Shape3D("cube", 30, 30, 30);
log(cube.shoutout());
log(cube.superShout());
