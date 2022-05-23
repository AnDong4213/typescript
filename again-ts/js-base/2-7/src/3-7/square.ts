// 构造器重载

type chartParam = {
  width?: number;
  height?: number;
  radius?: number;
};

class Square {
  public width: number;
  public height: number;

  constructor(width_: number, height_: number);
  constructor(objValue: chartParam); // 重载签名
  // constructor(value: number | chartParam) {}  // 一般用any
  // 实现签名
  constructor(value: any, height_: number = 0) {
    if (typeof value === "object") {
      this.width = value.width;
      this.height = value.height;
    } else {
      this.width = value;
      this.height = height_;
    }
  }

  public getArea(): number {
    return this.height * this.width;
  }
}

let square = new Square(4, 5);
console.log(square.getArea());
const obj: chartParam = { width: 3, height: 29 };
let square2 = new Square(obj);
console.log(square2.getArea());

interface DecodeOptions {
  complete?: boolean | undefined;
  json?: boolean | undefined;
}

interface CompleteInter {
  complete: true;
}

interface JsonInter {
  json: true;
}

interface JwtHeader {
  alg: string | Algorithm;
  typ?: string | undefined;
  // ...其他key-value省略
}
export interface JwtPayload {
  [key: string]: any;
  iss?: string | undefined;
  sub?: string | undefined;
  // ...其他key-value省略
}

export interface Jwt {
  header: JwtHeader;
  payload: JwtPayload;
  signature: string;
}
// S100
export function decode(
  token: string,
  options: DecodeOptions & { complete: true; json: true }
): Jwt;
export function decode(
  token: string,
  options: DecodeOptions & { json: true }
): null | JwtPayload;
export function decode(
  token: string,
  options?: DecodeOptions
): null | JwtPayload | string {
  let data: any;
  // 代码实现省略....
  return data;
}
