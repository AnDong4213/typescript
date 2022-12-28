import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from './store'

import ElementPlus from 'element-plus'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.css'
import 'element-plus/theme-chalk/index.css'

import i18nPlugin from './plugins/i18n'
import rawDisplayer from './components/infra/raw-displayer'

require('bootstrap')

const app = createApp(App)

app.provide('Message', 'Hello-Provide')
app.use(i18nPlugin, {
  greetings: {
    hello: '我是插件你共--!',
  },
})

app.use(ElementPlus)
app.component('rawDisplayer', rawDisplayer)

app.use(pinia).use(router).mount('#app')
