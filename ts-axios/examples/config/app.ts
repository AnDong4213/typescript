import axios from '../../src/index'
import { AxiosTransformer } from '../../src/types'
import qs from 'qs'

/* axios.interceptors.request.use(config => {
  config.headers.test2 = 1
  return config
}) */  // 待确定位置

axios.defaults.headers.common['test2'] = 123599

/* axios({
  url: '/config/post',
  method: 'post',
  // data: qs.stringify({ a: 1 }),
  data: { a: 1 },
  headers: {
    test: 321
  }
})
  .then((res) => {
    console.log(res.data)
  }).catch((e) => {
    console.log(e)
  }) */


/* axios({
  transformRequest: [(function (data) {
    data.c = 992
    return qs.stringify(data)
    // return data
  }), ...(axios.defaults.transformRequest as AxiosTransformer[])],
  transformResponse: [...(axios.defaults.transformResponse as AxiosTransformer[]), function (data) {
    if (typeof data === 'object') {
      data.b = 2
    }
    return data
  }],
  url: '/config/post',
  method: 'post',
  data: {
    a: 1
  }
}).then((res) => {
  console.log(res.data)
}) */

const instance = axios.create({
  transformRequest: [(function (data) {
    data.c = 992
    return qs.stringify(data)
    // return data
  }), ...(axios.defaults.transformRequest as AxiosTransformer[])],
  transformResponse: [...(axios.defaults.transformResponse as AxiosTransformer[]), function (data) {
    if (typeof data === 'object') {
      data.b = 2
    }
    return data
  }]
})
instance({
  url: '/config/post',
  method: 'post',
  data: {
    a: 199
  }
})
  .then((res) => {
    console.log(res.data)
  }) 