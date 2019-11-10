import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/view_Home.vue'
import GovStaff from '../views/view_GovStaff.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'govstaff',
    component: GovStaff
  },
  {
    path: '/govstaff',
    name: 'govstaff',
    component: GovStaff
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
