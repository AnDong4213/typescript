const toString = Object.prototype.toString

export function isDate(val: any): val is Date {
  return toString.call(val) === '[Object Date]'
}

export function isObject(val: any): val is Object {
  return val !== null && typeof val === 'object'
}

export function isPlainObject(val: any): val is Object {
  return toString.call(val) === '[object Object]'
}

export function extend<T, U>(to: T, from: U): T & U {
  for (const key in from) {
    (to as T & U)[key] = from[key] as any
  }
  return to as T & U
}

export function deepMerge(...objs: any[]): any {
  const result = Object.create(null)
  objs.forEach(obj => {
    if (obj) {
      Object.keys(obj).forEach(key => {
        const val = obj[key]
        if (isPlainObject(val)) {
          if (isPlainObject(result[key])) {
            result[key] = deepMerge(result[key], val)
          } else {
            result[key] = deepMerge({}, val)
          }
        } else {
          result[key] = val
        }
      })
    }
  })

  return result
}

// console.log(deepMerge({ test: "31" }, { common: { Accept: "application/json, text/plain, */*" }, delete: {}, post: { 'Content- Type': "application/x-www-form-urlencoded" } }))
// console.log(deepMerge({ a: 1, d: 99, aa: { u: 99, nn: 33 } }, { b: 9, c: 8, a: 4, aa: { mm: 2, nn: 8 } }))
// { b: 9, c: 8, a: 4, aa: { mm: 2, nn: 8 } }

// Object.keys(88).forEach(key => {console.log(key)})  // 不报错...
/* let arr = [22, 55]
Object.keys(arr).forEach(key => {
  console.log(key)
  console.log(arr[Number(key)])
}) */
/* Object.values({ arr1: 66, arr2: 76, arr3: 86 }).forEach(key => {
  console.log(key)
  console.log(Array.of(key))
}) */