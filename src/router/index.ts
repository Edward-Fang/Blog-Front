import { createRouter, createWebHistory } from 'vue-router'
import { basicRoutes } from './routes'
import NProgress from '@/utils/nprogress'
import { changeTitle } from '@/utils'

const router = createRouter({
  history: createWebHistory(),
  routes: basicRoutes,
  scrollBehavior(to, from, savedPosition) {
    return {
      top: 0
    }
  }
})

router.beforeEach((to, _from, next) => {
  NProgress.start()
  // if (store.state.user.token || whiteList.indexOf(to.path) !== -1) {
  next()
  // } else {
  //   next('/login') // 全部重定向到登录页
  // }
  to.meta.title ? changeTitle(to.meta.title) : "Edward's Blog" // 动态title
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
