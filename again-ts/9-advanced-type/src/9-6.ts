class People {
  public name!: string;
  public age!: number
  public address!: string
  eat() {

  }
}

class ChinesePeople  extends People {
  phone!: string
}

let cp = new ChinesePeople();

type extractType  = Extract<ChinesePeople, People>

// type Extract<T, U> = T extends U ? T : Boolean
type Extract<T, U> = T extends U ? T : never

type extractUnionType = Extract<string | number, string> //string || never

const aa: extractUnionType = {s:9 }

export {}
