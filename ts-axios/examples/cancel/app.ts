import axios, { Canceler } from '../../src/index'

const CancelToken = axios.CancelToken
const source = CancelToken.source()

/* axios.get('/cancel/get', {
  cancelToken: source.token
})
  .then(res => {
    console.log(res)
    console.log(123456789)
  })
  .catch(function (e) {
    if (axios.isCancel(e)) {
      console.log('Request canceled--哈哈哈', e.message)
    }
  })

setTimeout(() => {
  source.cancel('Operation canceled by the user')

  setTimeout(() => {
    axios.post('/cancel/post', { a: 1 }, { cancelToken: source.token })
      .then(res => {
        console.log(res)
        console.log('0000000000')
      })
      .catch(function (e) {
        if (axios.isCancel(e)) {
          console.log(e.message + '---' + '嘿嘿嘿')
        }
      })
  }, 100)
}, 100) */

let cancel: Canceler

axios.get('/cancel/get', {
  cancelToken: new CancelToken(c => {
    cancel = c
  })
})
  .then(res => {
    console.log(res)
  })
  .catch(function (e) {
    if (axios.isCancel(e)) {
      console.log('Request canceled')
    }
  })

setTimeout(() => {
  cancel('坎坎坷坷')
}, 1500)   // 1500和500