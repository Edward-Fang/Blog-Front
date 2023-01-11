import Home from '@/pages/home/index.vue'
import Post from '@/pages/post/index.vue'
import Menu from '@/pages/menu/index.vue'
import Amusement from '@/pages/amusement/index.vue'
import MessageBoard from '@/pages/message-board/index.vue'
import TimeLine from '@/pages/time-line/index.vue'
import Error from '@/pages/error/index.vue'
import AboutMe from '@/pages/about-me/index.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    name: 'home'
  },
  {
    path: '/menu',
    component: Menu,
    name: 'menu'
  },
  {
    path: '/post',
    component: Post,
    name: 'post'
  },
  {
    path: '/amusement',
    component: Amusement,
    name: 'amusement'
  },
  {
    path: '/message-board',
    component: MessageBoard,
    name: 'message-board'
  },
  {
    path: '/time-line',
    component: TimeLine,
    name: 'time-line'
  },
  {
    path: '/about-me',
    component: AboutMe,
    name: 'about-me'
  },
  {
    path: '/:W+',
    component: Error,
    name: 'error'
  }
]

export default routes
