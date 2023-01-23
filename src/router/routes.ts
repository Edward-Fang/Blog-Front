import Layout from '@/layout/index.vue'

export const systemRoutes = [
  {
    path: '/login',
    component: () => import('@/pages/admin/login/index.vue'),
    meta: { title: '登录', show: false }
  },
  {
    path: '/404',
    component: Error,
    meta: { title: '该页面不存在', show: false }
  }
]
export const basicRoutes = [
  {
    path: '/',
    redirect: '/home',
    component: Layout,
    meta: { show: false },
    children: [
      {
        path: '/home',
        component: () => import('@/pages/home/index.vue'),
        meta: { name: '首页', icon: 'mdi:home', show: true }
      },
      {
        path: '/menu',
        component: () => import('@/pages/menu/index.vue'),
        meta: {
          name: '目录',
          icon: 'mdi:microsoft-xbox-controller-menu',
          show: true
        }
      },
      {
        path: '/post',
        component: () => import('@/pages/post/index.vue'),
        meta: { name: '博客', show: false }
      },
      {
        path: '/timeline',
        component: () => import('@/pages/timeline/index.vue'),
        meta: {
          name: '时间线',
          icon: 'mdi:timeline-clock',
          show: true
        }
      },
      {
        path: '/amusement',
        component: () => import('@/pages/amusement/index.vue'),
        meta: {
          name: '娱乐',
          icon: 'mdi:motion-play',
          show: true
        }
      },
      {
        path: '/messageboard',
        component: () => import('@/pages/messageboard/index.vue'),
        meta: {
          name: '留言板',
          icon: 'mdi:message-text',
          show: true
        }
      },
      {
        path: '/aboutme',
        component: () => import('@/pages/aboutme/index.vue'),
        meta: {
          name: '关于我',
          icon: 'mdi:account-box-multiple',
          show: true
        }
      }
    ]
  }
]

export const asyncRoutes = [
  {
    path: '/admin',
    component: Layout,
    children: [
      {
        path: '/manage',
        component: () => import('@/pages/admin/index.vue'),
        meta: { name: '管理', icon: 'mdi:file-cog-outline', show: true }
      }
    ]
  }
]
