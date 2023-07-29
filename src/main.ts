import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVfm } from 'vue-final-modal'
import VueTelInput from 'vue-tel-input'
import 'vue-tel-input/vue-tel-input.css'
  
import './assets/main.scss'
import './assets/css/bootstrap-grid.min.css'
import 'vue-final-modal/style.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)
const vfm = createVfm()

app.use(VueTelInput)
app.use(vfm)
app.use(createPinia())
app.use(router)
app.mount('#app')
