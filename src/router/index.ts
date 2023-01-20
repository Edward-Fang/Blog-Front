import { createRouter, createWebHistory } from 'vue-router'
import { systemRoutes, basicRoutes, asyncRoutes } from './routes'
import NProgress from '@/utils/nprogress'
import { changeTitle } from '@/utils'
import { getToken } from '@/utils/auth'

const routes = [...systemRoutes, ...basicRoutes]
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {
      top: 0
    }
  }
})

export const addRoutes = () => {
  asyncRoutes.forEach(item => {
    router.addRoute(item)
  })
}

if(getToken()) {
  addRoutes()
}

router.beforeEach((to, _from, next) => {
  NProgress.start()
  // if (store.state.user.token || whiteList.indexOf(to.path) !== -1) {
  next()
  // } else {
  //   next('/login') // 全部重定向到登录页
  // }
  to.meta.name ? changeTitle(to.meta.name) : "Edward's Blog" // 动态title
})

router.afterEach((to, _from) => {
  // const keepAliveComponentsName = store.getters['keepAlive/keepAliveComponentsName'] || []
  // const name = to.matched[to.matched.length - 1].components.default.name
  // if (to.meta && to.meta.cache && name && !keepAliveComponentsName.includes(name)) {
  //   store.commit('keepAlive/addKeepAliveComponentsName', name)
  // }
  NProgress.done()
})

export default router
