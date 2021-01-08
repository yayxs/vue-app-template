import Mock from 'mockjs'
import { builder } from '../helper'
import { getQueryParameters } from '@/utils'
const vastHomeBannerImgs = [
  {
    img:
      'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/155630/22/3079/207681/5feb03d9E4e236ce4/8563e79379a8fb1d.jpg!cr_1125x445_0_171!q70.jpg.dpg',
  },
  {
    img:
      'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/146590/19/19858/98147/5fe408eeEc5b31e80/7d653ab33cc95a56.jpg!q70.jpg.dpg',
  },
  {
    img:
      'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/157847/35/715/197973/5fec1331E7c2b0805/2f2a6d035a88b08d.jpg!q70.jpg.dpg',
  },
  {
    img:
      'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/144017/3/14667/326339/5fb41e56E866d3148/2634adfb4b611118.jpg!cr_1125x445_0_171!q70.jpg.dpg',
  },
  {
    img:
      'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/155125/31/10976/148857/5fe19c51E5f312134/b79e3ce82d1e6214.jpg!q70.jpg.dpg',
  },
  {
    img:
      'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/144017/3/14667/326339/5fb41e56E866d3148/2634adfb4b611118.jpg!cr_1125x445_0_171!q70.jpg.dpg',
  },
  {
    img:
      'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/151613/16/12670/168489/5febe080E081103c4/8b86a3fae827369c.jpg!cr_1125x445_0_171!q70.jpg.dpg',
  },
]

const categoryList = [
  {
    name: '天猫新品',
    icon:
      'https://gw.alicdn.com/tfs/TB1OIxTcLc3T1VjSZLeXXbZsVXa-183-144.png?getAvatar=1',
  },
  {
    name: '今日爆款',
    icon:
      'https://gw.alicdn.com/tfs/TB1OIxTcLc3T1VjSZLeXXbZsVXa-183-144.png?getAvatar=1',
  },
  {
    name: '天猫国际',
    icon:
      'https://gw.alicdn.com/tfs/TB1OIxTcLc3T1VjSZLeXXbZsVXa-183-144.png?getAvatar=1',
  },
  {
    name: '饿了么',
    icon:
      'https://gw.alicdn.com/tfs/TB1OIxTcLc3T1VjSZLeXXbZsVXa-183-144.png?getAvatar=1',
  },
  {
    name: '天猫超市',
    icon:
      'https://gw.alicdn.com/tfs/TB1OIxTcLc3T1VjSZLeXXbZsVXa-183-144.png?getAvatar=1',
  },
  {
    name: '充值中心',
    icon:
      'https://gw.alicdn.com/tfs/TB1OIxTcLc3T1VjSZLeXXbZsVXa-183-144.png?getAvatar=1',
  },
  {
    name: '机票酒店',
    icon:
      'https://gw.alicdn.com/tfs/TB1OIxTcLc3T1VjSZLeXXbZsVXa-183-144.png?getAvatar=1',
  },
  {
    name: '金币庄园',
    icon:
      'https://gw.alicdn.com/tfs/TB1OIxTcLc3T1VjSZLeXXbZsVXa-183-144.png?getAvatar=1',
  },
  {
    name: '阿里拍卖',
    icon:
      'https://gw.alicdn.com/tfs/TB1OIxTcLc3T1VjSZLeXXbZsVXa-183-144.png?getAvatar=1',
  },
  {
    name: '淘宝吃货',
    icon:
      'https://gw.alicdn.com/tfs/TB1OIxTcLc3T1VjSZLeXXbZsVXa-183-144.png?getAvatar=1',
  },
  {
    name: '今日爆款',
    icon:
      'https://gw.alicdn.com/tfs/TB1OIxTcLc3T1VjSZLeXXbZsVXa-183-144.png?getAvatar=1',
  },
  {
    name: '分类',
    icon:
      'https://gw.alicdn.com/tfs/TB1OIxTcLc3T1VjSZLeXXbZsVXa-183-144.png?getAvatar=1',
  },
  {
    name: '天猫美食',
    icon:
      'https://gw.alicdn.com/tfs/TB1OIxTcLc3T1VjSZLeXXbZsVXa-183-144.png?getAvatar=1',
  },
  {
    name: '阿里健康',
    icon:
      'https://gw.alicdn.com/tfs/TB1OIxTcLc3T1VjSZLeXXbZsVXa-183-144.png?getAvatar=1',
  },
  {
    name: '口碑生活',
    icon:
      'https://gw.alicdn.com/tfs/TB1OIxTcLc3T1VjSZLeXXbZsVXa-183-144.png?getAvatar=1',
  },
  {
    name: '闲鱼',
    icon:
      'https://gw.alicdn.com/tfs/TB1OIxTcLc3T1VjSZLeXXbZsVXa-183-144.png?getAvatar=1',
  },
  {
    name: '会员中心',
    icon:
      'https://gw.alicdn.com/tfs/TB1OIxTcLc3T1VjSZLeXXbZsVXa-183-144.png?getAvatar=1',
  },
  {
    name: '造点新货',
    icon:
      'https://gw.alicdn.com/tfs/TB1OIxTcLc3T1VjSZLeXXbZsVXa-183-144.png?getAvatar=1',
  },
  {
    name: '土货鲜食',
    icon:
      'https://gw.alicdn.com/tfs/TB1OIxTcLc3T1VjSZLeXXbZsVXa-183-144.png?getAvatar=1',
  },
]

const genCateListHandler = (options) => {
  const queryParameters = getQueryParameters(options)
  console.log('queryParameters', queryParameters)

  const data = []
  for (let i = 0, len = categoryList.length; i < len; i++) {
    const tmpKey = i + 1
    data.push({
      _id: tmpKey,
      icon: categoryList[i]['icon'],
      name: categoryList[i]['name'],
      updatedAt: Mock.mock('@datetime'),
    })
  }

  return builder(data)
}

const genBannerHandler = (options) => {
  const queryParameters = getQueryParameters(options)
  console.log('queryParameters', queryParameters)

  const data = []
  for (let i = 0, len = vastHomeBannerImgs.length; i < len; i++) {
    const tmpKey = i + 1
    data.push({
      _id: tmpKey,
      img: vastHomeBannerImgs[i]['img'],
      type: 1,
      updatedAt: Mock.mock('@datetime'),
    })
  }

  return builder(data)
}
Mock.mock(/\/home\/banner/, 'get', genBannerHandler)
Mock.mock(/\/home\/cateList/, 'get', genCateListHandler)
