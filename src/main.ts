import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// 引入通用样式，浏览器表现是一致的
import 'normalize.css'
// 引入项目中一些通用样式
import '@/assets/styles/common.less'

import router from './router'

import { createPinia } from 'pinia'

import XtxUI from './components'

const app = createApp(App)
app.use(router)
app.mount('#app')
app.use(createPinia())
app.use(XtxUI)
