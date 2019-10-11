// alert('hello world in TypeScript!');
let log = console.log.bind(console);

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


class Shape {
    area: number;
    private color: string;

    constructor(public name: string, width: number, public height: number) {
        this.area = width * height;
        this.color = "pink";
    }
    shoutout() {
        return "I'm " + `'${this.color}',` + " " + `'${this.name}'` +  " with an area of " + `'${this.area}'` + " cm squared.";
    }
}
var square = new Shape("square", 30, 30);
log( square.shoutout() );
log( 'Area: ' + square.area );
log( 'Name: ' + square.name );
log( 'Color: ' + square.color );
log( 'Width: ' + square.width );
log( 'Height: ' + square.height );
log('--------------------------------------------------')

class Shape3D extends Shape {
    volume: number;
    constructor(public name: string, width: number, height: number,length: number) {
        super( name, width, height );
        this.volume = length * this.area;
    }
    shoutout() {
        return "I'm " + this.name +  " with a volume of " + this.volume + " cm cube.";
    }
    superShout() {
        return super.shoutout();
    }
}
var cube = new Shape3D("cube", 30, 30, 30);
log( cube.shoutout() );
log( cube.superShout() );










