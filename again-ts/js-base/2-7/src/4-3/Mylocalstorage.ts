// 构建单件设计模式
//   第一步：把构造器设置为私有的，不允许外部来创建类的实例【对象】
//   第二步: 至少应该提供一个外部访问的方法或属性，外部可以通过这个方法或属性来得到一个对象，所以应该把这个方法设置为静态方法
//   第三步：外部调用第二步提供的静态方法来获取一个对象

export default class MyLocalStorage {
  public constructor() {}

  public setItem(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public getItem(key: string) {
    const value = localStorage.getItem(key);
    return value != null ? JSON.parse(value) : null;
  }
}
