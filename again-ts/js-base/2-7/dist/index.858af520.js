class Person {
    // public name: string | undefined; // ts4.0 之前属性如果没有赋值的解决方法，增加一个undefined的数据类型
    name = "noname";
    phone = "15675754234";
    age = 22;
    getAge = ()=>{};
    // 对象的变量 = 实例的变量 = 类的【非静态的】属性 = 简称属性
    // 对象属性 或者 实例属性
    // 【构造器】
    constructor(name_, age_, phone_){
        this.name = name_;
        this.age = age_;
        this.phone = phone_;
        this.getAge = function() {
            console.log(this.age);
        };
    }
    doEat(who, address) {
        console.log(`${this.name}和${who}吃饭，在${address}吃饭`);
    }
}
let lisi = new Person("李四", 23, "145");
lisi.doEat("张三", "王府井");
lisi.getAge();
console.log(lisi);
console.log(Person.prototype);

//# sourceMappingURL=index.858af520.js.map
