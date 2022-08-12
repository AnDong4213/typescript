import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from './store'

import i18nPlugin from './plugins/i18n'

const app = createApp(App)

app.provide('Message', 'Hello-Provide')
app.use(i18nPlugin, {
  greetings: {
    hello: '我是插件哈!',
  },
})

app.use(pinia).use(router).mount('#app')
