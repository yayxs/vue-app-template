import axios from 'axios'
import store from 'store'
import { Toast } from 'vant'
import { baseURL, requestTimeout, contentType } from 'config'
const service = axios.create({
  baseURL,
  withCredentials: true,
  timeout: requestTimeout,
  headers: {
    'Content-Type': contentType
  }
})

service.interceptors.request.use(
  config => {
    if (!config.hideloading) {
      Toast.loading({
        forbidClick: true
      })
    }
    if (store.getters.token) {
      config.headers['X-Token'] = ''
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
service.interceptors.response.use(
  response => {
    Toast.clear()
    const res = response.data
    if (res.status && res.status !== 200) {
      // 登录超时,重新登录
      if (res.status === 401) {
        // store.dispatch('FedLogOut').then(() => {
        //   location.reload()
        // })
      }
      return Promise.reject(res || 'error')
    } else {
      return Promise.resolve(res)
    }
  },
  error => {
    Toast.clear()
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)

export default service
