const routerConfig = {
  constantRoutes: [
    {
      path: '/login',
      name: 'Login',
      component: () =>
        import(/* webpackChunkName: "login" */ '@/views/login/index'),
      hidden: true,
    },
    {
      path: '/register',
      name: 'Register',
      component: () =>
        import(/* webpackChunkName: "register" */ '@/views/register/index'),
      hidden: true,
    },
    {
      path: '/401',
      name: '401',
      component: () =>
        import(/* webpackChunkName: "401" */ '@/views/error/401'),
      hidden: true,
    },

    {
      path: '/404',
      name: '404',
      component: () =>
        import(/* webpackChunkName: "404" */ '@/views/error/404'),
    },
  ],
  asyncRoutes: [
    {
      path: '/',
      redirect: '/home',
      children: [
        {
          path: 'home',
          name: 'Home',
          meta: {
            index: 1,
            title: '首页',
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
        {
          path: '*',
          redirect: '/404',
          hidden: true,
        },
      ],
    },
  ],
}
module.exports = routerConfig
