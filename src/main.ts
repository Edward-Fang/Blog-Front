import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import pinia from '@/store'

// 引入全局样式
import '@/style/index.scss'
import '@/style/style.scss'
// 引入element-plus额外样式
import '@/style/element.scss'
// 引入提示样式，不然不显示
import 'element-plus/theme-chalk/el-message.css'

const app = createApp(App)
app.use(router).use(pinia)
app.mount('#app')
