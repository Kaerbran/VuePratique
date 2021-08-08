import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'  // "/index.js" rajouté ici.

createApp(App)
    .use(router)    
    .mount('#app')
