// type 和 interface可以不用加 declare

/* type cssSelector = {
  css: (key: string, value: string) => cssSelector;
};

declare function $(ready: () => void): void;

declare function $(selector: any): cssSelector; */

// 可以把命名空间当成对象看
// 使用命名空间就是防止重名的
/* declare namespace JQuery {
  type cssSelector = {
    css: (key: string, value: string) => cssSelector;
  };

  export function $(ready: () => void): void;

  export function $(selector: any): cssSelector;

  export namespace $ {
    export function ajax(url: string, setting?: any): void;
  }
} */

// module  模块声明

declare module "JQuery" {
  type cssSelector = {
    css: (key: string, value: string) => cssSelector;
  };

  function $(ready: () => void): void;

  function $(selector: any): cssSelector;

  namespace $ {
    function ajax(url: string, setting?: any): void;
    function post(url: string, setting?: any): void;
  }

  // export default $;
  export = $;
}
