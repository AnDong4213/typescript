class Parent {
  public p_age: number = 10;
  public p_name: string = "小莫";

  constructor(age: number, name: string) {
    this.p_age = age;
    this.p_name = name;
  }

  getInfo() {
    console.log("info   ", this.p_name, this.p_age);
  }
}

class Children extends Parent {
  public c_education: string = "undergraduate";
  department: string = "math";

  constructor(age: any, name: any, education: string) {
    super(age, name);
    this.c_education = education;
    this.department = "chinese";
  }

  getInfo2() {
    console.log(this.department, "--", this.c_education);
  }
}

const test = new Children(23, "小米", "本科");
console.log(test);
test.getInfo();
test.getInfo2();
