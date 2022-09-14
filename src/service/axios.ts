import axios from 'axios'
// axios 配置选项
axios.defaults.baseURL = 'http://httpbin.org'
axios.defaults.timeout = 10000
// axios.defaults.headers = {}
axios.get('/get', {
  params: {
    name: 'Ma',
    age: 18
  }
})

export default axios
