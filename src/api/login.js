import request from 'utils/request'
export function getCodeImg() {
  return request({
    url: 'auth/code',
    method: 'get'
  })
}
export function login(data) {
  return request({
    url: 'auth/login',
    method: 'post',
    data
  })
}
