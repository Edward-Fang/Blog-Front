import Layout from '@/layout/index.vue'

export const basicRoutes = [
  {
    path: '/',
    redirect: '/home',
    component: Layout,
    children: [
      {
        path: '/home',
        component: () => import('@/pages/home/index.vue'),
        meta: { title: 'home' }
      },
      {
        path: '/menu',
        component: () => import('@/pages/menu/index.vue'),
        meta: { title: 'menu' }
      },
      {
        path: '/post',
        component: () => import('@/pages/post/index.vue'),
        meta: { title: 'post' }
      },
      {
        path: '/amusement',
        component: () => import('@/pages/amusement/index.vue'),
        meta: { title: 'amusement' }
      },
      {
        path: '/messageboard',
        component: () => import('@/pages/messageboard/index.vue'),
        meta: { title: 'message-board' }
      },
      {
        path: '/timeline',
        component: () => import('@/pages/timeline/index.vue'),
        meta: { title: 'timeline' }
      },
      {
        path: '/aboutme',
        component: () => import('@/pages/aboutme/index.vue'),
        meta: { title: 'about-me' }
      }
    ]
  },
  {
    path: '/404',
    component: Error
  }
]
