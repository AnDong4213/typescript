import axios from '../../src/index'
// const date = new Date()

axios({
  method: 'get',
  url: '/simple/get',
  params: {
    date: 99
  }
})