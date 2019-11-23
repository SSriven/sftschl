import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/view_Home.vue'
import GovStaff from '../views/view_GovStaff.vue'
import Login from '../views/view_Login.vue'


Vue.use(VueRouter);

const routes = [

  {
    path: '/',
    name: 'govstaff',
    meta: {
      requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
    },
    component: GovStaff
  },
  {
    path: '/govstaff',
    name: 'govstaff',
    component: GovStaff
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
];

const router = new VueRouter({
  mode: 'history',
  base: '/VueTest',
  routes
});

export default router
