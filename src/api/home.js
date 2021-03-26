import request from 'utils/request'

export function getList(data) {
  return request({
    url: '/home/getList',
    method: 'get',
    data
  })
}
