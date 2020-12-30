import request from '@/utils/request'
/**
 * 获取首页的轮播图数据
 */
export function getBannerApi() {
  return request({
    url: '/home/banner',
    method: 'get',
  })
}
