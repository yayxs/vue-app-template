import Vue from 'vue'
import VueRouter from 'vue-router'
import { routerMode } from '@/config'

// hack router push callback
// const originalPush = Router.prototype.push
// Router.prototype.push = function push(location, onResolve, onReject) {
//   if (onResolve || onReject)
//     return originalPush.call(this, location, onResolve, onReject)
//   return originalPush.call(this, location).catch((err) => err)
// }

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    meta: {
      index: 1,
      title: '首页',
      showTab: true,
      keepAlive: true,
    },
    component: () => import('@/views/home/index.vue'),
  },
  {
    path: '/classify',
    name: 'Classify',
    meta: {
      index: 1,
      title: '分类',
      showTab: true,
      keepAlive: true,
    },
    component: () => import('@/views/classify/index.vue'),
  },
  {
    path: '/shopCart',
    name: 'ShopCart',
    meta: {
      index: 1,
    },
    component: () => import('@/views/shopCart/index.vue'),
  },
  {
    path: '/mine',
    name: 'Mine',
    meta: {
      index: 1,
    },
    component: () => import('@/views/mine/index.vue'),
  },
]

const createRouter = () =>
  new VueRouter({
    mode: routerMode, //  if is history模式 需要配置vue.config.js publicPath
    base: process.env.BASE_URL,
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        return {
          x: 0,
          y: 0,
        }
      }
    },
    routes,
  })

const router = createRouter()

export default router
