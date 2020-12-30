import { isIE } from '@/utils/validate'

import { isProd, isPre } from '@/utils'

if (!isProd || isPre) {
  if (isIE()) {
    console.error('now id env')
  }

  const Mock = require('mockjs')
  require('./services/home')
  // 延迟时间
  Mock.setup({
    timeout: 800, // setter delay time
  })
}
