import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import UserPage from '../views/UserPage.vue'
import DetailPage from '../views/DetailPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/user',
    name: 'user',
    component: UserPage
  },
  {
    path: '/user/:id',
    name: 'DetailPage',
    component: DetailPage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
