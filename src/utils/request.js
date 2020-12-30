import axios from 'axios'
// import store from '@/store'
// import { Toast } from 'vant'
import { baseURL, requestTimeout } from '@/config'
const request = axios.create({
  baseURL,
  timeout: requestTimeout, // 请求超时时间
})

request.interceptors.request.use(
  function (config) {
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

request.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    return Promise.reject(error)
  }
)
export default request
