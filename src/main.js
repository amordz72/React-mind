import "bootstrap/dist/css/bootstrap.min.css"
import Notifications from '@kyvg/vue3-notification'
// Import one of the available themes


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store/store"

 
createApp(App)
.use(Notifications)
    .use(router)
    .use(store).mount('#app')



import "bootstrap/dist/js/bootstrap.js"