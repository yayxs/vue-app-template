const routes = [
  {
    path: '/',
    component: () => import('@/layouts/BaseLayout.vue'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/home'),
        meta: { title: '首页', keepAlive: false, isShowLeftText: false }
      },
      {
        path: '/mine',
        name: 'Mine',
        component: () => import('@/views/mine'),
        meta: { title: '我的', keepAlive: false, isShowLeftText: false }
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login'),
    meta: {}
  }
]

module.exports = {
  routes
}
