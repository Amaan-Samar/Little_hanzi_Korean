import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './style.css'

import './assets/main.css'
// import '../register-service-worker.js check setup'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
