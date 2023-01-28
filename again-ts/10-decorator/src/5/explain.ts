class Parent {
  age!: number;
}

class Test extends Parent {
  public name: string = "test";

  methodOne() {
    console.log(this.name);
  }
}

let CopyParent = Parent;
CopyParent = Test;

export {};
