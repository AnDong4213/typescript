import axios from '../../src/index'

/* axios.post('/extend/post', { msg: '看看' })
  .then((res) => {
    console.log(res.data)
  }).catch((e) => {
    console.log(e)
  }) */

axios.interceptors.request.use(config => {
  config.headers.test += '1'
  return config
})
let interceptor1 = axios.interceptors.request.use(config => {
  config.headers.test += '2'
  return config
})
axios.interceptors.request.use(config => {
  config.headers.test += '3'
  return config
})
axios.interceptors.request.eject(interceptor1)

axios.interceptors.response.use(res => {
  res.data += '1'
  return res
})
let interceptor2 = axios.interceptors.response.use(res => {
  res.data += '2'
  return res
})
axios.interceptors.response.use(res => {
  res.data += '3'
  return res
})
axios.interceptors.response.eject(interceptor2)

axios({
  url: '/interceptor/get',
  method: 'get',
  headers: {
    test: '',
    name: 'AND'
  }
})
  .then((res) => {
    console.log(res)
    console.log(res.data)
  }).catch((e) => {
    console.log(e)
  })