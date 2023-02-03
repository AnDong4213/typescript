// 元数据--为了帮助类，方法，属性实现一定的功能，而附加在其上的一些数据
// 分类: 自定义的元数据  内置元数据
import "reflect-metadata";

// 底层属性装饰器type  PropertyDecorator
// declare type PropertyDecorator = (target: Object, propertyKey: string | symbol) => void;

type MyPropDecorator = (
  targetClassPrototype: any,
  propertyKey: string | symbol
) => void;

export function Inject(injectid: string): MyPropDecorator {
  console.log("injectid---", injectid);
  return (targetClassPrototype, propertyKey) => {
    const PropClass = Reflect.getMetadata(
      "design:type",
      targetClassPrototype,
      propertyKey
    );
    const PropClassObj = new PropClass();
    PropClassObj.login();
  };
}
