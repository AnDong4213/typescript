// infer关键字用来定义泛型里面推断出来的类型参数，而不是外部传入的类型参数
// 它通常跟条件运算符一起使用，用在extends关键字后面的父类型之中

type Flatten<Type> = Type extends Array<infer Item> ? Item : Type;
type Str = Flatten<string[]>;

// type Flatten<Type, Item> = Type extends Array<Item> ? Item : Type;
// type Str = Flatten<string, []>;
