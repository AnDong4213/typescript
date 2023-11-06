declare type cssSelector = {
  css: (key: string, value: string) => cssSelector;
};

declare function $(ready: () => void): void;

declare function $(selector: any): cssSelector;
