const routesConfig = {
  constantRouter: [
    {
      path: '/nopermission',
      name: 'Nopermission',
      meta: {
        index: 1,
      },
      component: () =>
        import(
          /* webpackChunkName: "NoPermission" */ '@/views/error/NoPermission'
        ),
    },
    {
      path: '*',
      name: '404',
      component: () =>
        import(/* webpackChunkName: "404" */ '@/views/error/404'),
    },
    {
      // 默认页面
      path: '/',
      component: () => import(/* webpackChunkName: "index" */ '@/views/index'),
      redirect: '/index',
      children: [
        {
          path: 'home',
          name: 'Home',
          meta: {
            index: 1,
          },
          component: () => import('@/views/home/index.vue'),
        },
        {
          path: 'classify',
          name: 'Classify',
          meta: {
            index: 1,
          },
          component: () => import('@/views/classify/index.vue'),
        },
        {
          path: 'shopCart',
          name: 'ShopCart',
          meta: {
            index: 1,
          },
          component: () => import('@/views/shopCart/index.vue'),
        },
        {
          path: 'mine',
          name: 'Mine',
          meta: {
            index: 1,
          },
          component: () => import('@/views/mine/index.vue'),
        },
      ],
    },
  ],
}
module.exports = routesConfig
