import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '../views/LoginView/LoginView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/list',
    name: 'list',
    component: () => import('../views/ListView/ListView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
