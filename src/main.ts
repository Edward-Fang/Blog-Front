import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import { createPinia } from 'pinia'

// 引入全局样式
import '@/style/index.scss'
import '@/style/style.scss'
// 引入提示样式，不然不显示
import 'element-plus/theme-chalk/el-message.css'

const app = createApp(App)
app.use(router).use(createPinia())
app.mount('#app')
