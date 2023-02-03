import "reflect-metadata";

type MyMethodDecoratorType = (
  targetClassPrototype: any,
  methodName: string,
  dataProps: PropertyDescriptor
) => void;

export default function Get(reqPath: string): MyMethodDecoratorType {
  return function (targetClassPrototype, methodName, dataProps) {
    console.log("进入到方法饰器", "path:", reqPath);

    const TargetClass = targetClassPrototype.constructor;
    const TargetClassObj = new TargetClass();

    Reflect.defineMetadata("path", reqPath, targetClassPrototype, methodName);
  };
}
