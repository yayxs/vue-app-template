import Mock from 'mockjs'
import { builder } from '../helper'
import { getQueryParameters } from '@/utils'
const vastHomeBannerImgs = [
  {
    img:
      'https://m.360buyimg.com/babel/s750x300_jfs/t1/104517/14/15980/188439/5e7311fcE32a88066/4461e1fb99fc7cf6.jpg',
  },
  {
    img:
      'https://m.360buyimg.com/babel/s750x300_jfs/t1/91722/36/15702/155940/5e743902E12329b15/bf74028004890c45.jpg',
  },
  {
    img:
      'https://m.360buyimg.com/babel/s750x300_jfs/t1/101273/30/14675/149408/5e698fd3E34e671d0/20f810d02067d342.jpg',
  },
]

const genHandler = (options) => {
  const queryParameters = getQueryParameters(options)
  console.log('queryParameters', queryParameters)

  const data = []
  for (let i = 0, len = 3; i < len; i++) {
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

Mock.mock(/\/home\/banner/, 'get', genHandler)
