import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import LoginComponent from './pages/Login/LoginComponent'
import HomeComponent from './pages/Home/HomeComponent'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'login', component: LoginComponent },
  { path: '/home', name: 'home', component: HomeComponent },
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
