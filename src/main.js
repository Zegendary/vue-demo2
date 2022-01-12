import Vue from 'vue/dist/vue'
import VueRouter from 'vue-router'
import BlogDetail from './pages/BlogDetail.vue'
import Home from './pages/Home.vue'
import BlogList from './pages/BlogList.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  {path: '/', component: Home},
  {path: '/blogs', component: BlogList},
  {path: '/blogs/:id', component: BlogDetail},
]
const router = new VueRouter({
  routes
})

new Vue({
  router
}).$mount('#app')
