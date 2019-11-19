import * as _ from 'lodash';
class Greeter {
  age = 13
  greeting: string
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return _.join(['Hello', ' ', this.greeting], '');
  }
};
let greeter = new Greeter('world');
console.log(greeter.greet())
class Child extends Greeter {
  names = 88
  name() {
    return 'Dog'
  }
}
console.log(new Child('TS'))

// let isDone: boolean = true;

// let list: number[] = [1, 2, 3, 8];
// let list: Array<number> = [1, 2, 9];


