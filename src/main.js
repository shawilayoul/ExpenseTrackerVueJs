import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Toast from 'vue-toastification'

import App from './App.vue'

const app = createApp(App)

app.use(createPinia())
app.use(Toast)

app.mount('#app')
