import router from './router'
import { getPageTitle } from 'utils'

import { getToken } from 'utils/auth'
const whiteList = ['/login'] // 登录不需要权限

router.beforeEach((to, _, next) => {
  document.title = getPageTitle(to.meta.title)
  const hasToken = getToken()
  if (hasToken) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      // 登录外的其他页面
      next()
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      const redirectPath = `/login?redirect=${to.path}`
      next(redirectPath)
    }
  }
})
