import "reflect-metadata";

export default function ControllerDecorator(rootPath: string) {
  return function <T>(targetClass: { new (...args: any[]): T }) {
    Object.keys(targetClass.prototype).forEach((methodnamekey) => {
      const routerpath = Reflect.getMetadata(
        "path",
        targetClass.prototype,
        methodnamekey
      );
      console.log("routerpath:", routerpath);
    });
  };
}
