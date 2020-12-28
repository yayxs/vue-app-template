import Vue from 'vue'
import Router from 'vue-router'
const { publicPath,} = require('./src/config')

// hack router push callback
const originalPush = Router.prototype.push
Router.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch((err) => err)
}

Vue.use(Router)

const createRouter = () =>
  new Router({
    // mode: 'history', //  history模式 需要配置vue.config.js publicPath
    base: process.env.BASE_URL,
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        return {
          x: 0,
          y: 0
        }
      }
    }
    routes:,
  })

const router = createRouter()
export default router
