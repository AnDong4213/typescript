import axios from '../../src/index'

/* axios({
  method: 'post',
  url: '/extend/post',
  data: {
    msg: 'hi--1'
  }
})
  .then((res) => {
    console.log(res.data)
  }).catch((e) => {
    console.log(e)
  })
axios('/extend/post', {
  method: 'post',
  data: {
    msg: 'hi--2222222'
  }
})
  .then((res) => {
    console.log(res.data)
  }).catch((e) => {
    console.log(e)
  })


axios.request({
  method: 'post',
  url: '/extend/post',
  data: {
    msg: 'hello'
  }
}).then((res) => {
  console.log(res.data)
}).catch((e) => {
  console.log(e)
})

axios.get('/extend/get')
  .then((res) => {
    console.log(res.data)
  }).catch((e) => {
    console.log(e)
  })

axios.post('/extend/post', { msg: '看看' })
  .then((res) => {
    console.log(res.data)
  }).catch((e) => {
    console.log(e)
  }) */

axios.patch('/extend/patch', { msg: 'patch看看' })
  .then((res) => {
    console.log(res.data)
  }).catch((e) => {
    console.log(e)
  })

interface ResponseData<T = any> {
  code: number
  result: T
  message: string
}

interface User {
  name: string
  age: number
}

function getUser<T>() {
  return axios.get<ResponseData<T>>('/extend/user')
    .then(res => res.data)
    .catch(err => console.error(err))
}


async function test() {
  const user = await getUser<User>()
  if (user) {
    console.log(user)
    console.log(user.result.name)
  }
}
test()