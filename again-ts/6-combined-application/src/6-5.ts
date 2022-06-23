let symid = Symbol('objid')
let obj = {[symid]: 1210, userName: '看看', age: 23}
let id = obj[symid]
console.log(id)

let jj = symid as unknown