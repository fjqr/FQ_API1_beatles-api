import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
const app = createApp(App)

app.use(router)

const vm = app.mount('#app')
export default  vm