import { createApp } from 'vue'
import App from './App.vue'

// Vuex Store

// Vue Router
import router from "./router"

// Common CSS for UI
//import "./assets/css/styles.css";
import "./assets/css/kt_egov_new.css"
import "./assets/css/jquery-ui.css"
import "vueperslides/dist/vueperslides.css"

const app = createApp(App)
app.use(router)
app.mount('#app')
