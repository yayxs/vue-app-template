import Mock from 'mockjs'
import { builder } from '../helper'
import { getQueryParameters } from '@/utils'

const categoryNameList = [
  {
    name: '热门推荐',
  },
  {
    name: '手机数码',
  },
  {
    name: '电脑办公',
  },
  {
    name: '家用电器',
  },
  {
    name: '计生情趣',
  },
  {
    name: '美妆护肤',
  },
  {
    name: '个护清洁',
  },
  {
    name: '汽车生活',
  },
  {
    name: '京东超市',
  },
  {
    name: '男装',
  },
  {
    name: '男鞋',
  },
  {
    name: '女装',
  },
  {
    name: '女鞋',
  },
  {
    name: '母婴童装',
  },
  {
    name: '图书音像',
  },
  {
    name: '运动户外',
  },
  {
    name: '内衣配饰',
  },
  {
    name: '食品生鲜',
  },
  {
    name: '酒水饮料',
  },
  {
    name: '家具家装',
  },
  {
    name: '箱包手袋',
  },
  {
    name: '钟表珠宝',
  },
  {
    name: '玩具乐器',
  },
  {
    name: '医疗保健',
  },
  {
    name: '宠物生活',
  },
]

const genHandler = (options) => {
  const queryParameters = getQueryParameters(options)

  const data = []
  for (let i = 0, len = categoryNameList.length; i < len; i++) {
    const tmpKey = i + 1
    data.push({
      _id: tmpKey,
      name: categoryNameList[i]['name'],
      updatedAt: Mock.mock('@datetime'),
    })
  }

  return builder(data)
}

Mock.mock(/\/classify\/left/, 'get', genHandler)
