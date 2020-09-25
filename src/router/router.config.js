/**
 * desc constantRoutes
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
  },
  {
    path: '/401',
    name: '401',
    component: () => import('@/views/401'),

  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404'),

  },
];

export const asyncRoutes = [
  {
    path: '/',
    component: import('@/layouts/basic'),
    redirect: '/home',
    meta: {
      title: '首页',
      keepAlive: false,
    },
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/home/index'),
        meta: { title: '首页', keepAlive: false },
      },
    ],
  },
  {
    path: '*',
    redirect: '/404',
  },
];

const constantRouterMapList = [
  {
    path: '/login',
    component: () => import('@/views/login'),
  },
  {
    path: '/',
    component: () => import('@/layouts/basic'),
    redirect: '/home',
    meta: {
      title: '首页',
      keepAlive: false,
    },
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/home/index'),
        meta: { title: '首页', keepAlive: false },
      },
    ],
  },
  {
    path: '*',
    redirect: '/404',
  },
];

export default constantRouterMapList;
