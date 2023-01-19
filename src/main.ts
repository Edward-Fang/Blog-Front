import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import { createPinia } from 'pinia'

// 引入全局样式
import '@/style/index.scss'
import '@/style/style.scss'

const app = createApp(App)
app.use(router).use(createPinia())
app.mount('#app')
