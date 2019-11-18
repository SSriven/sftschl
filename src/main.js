import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/plugin_elements.js'
import './plugins/plugin_amap.js'
import './plugins/plugin_myEcharts.js'
import './plugins/Loading.js'
import 'element-ui/lib/theme-chalk/index.css';
import './assets/style.css';
import './assets/css_amap_flag.css';

Vue.config.productionTip = false;
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)){ // 判断该路由是否需要登录权限
    if (localStorage.user_id) { // 判断当前的user_id是否存在 ； 登录存入的user_id
      next();
    }
    else {
      next({
        path: '/login',
        query: {redirect: to.fullPath} // 将要跳转路由的path作为参数，传递到登录页面
      })
    }
  }
  else {
    next();
  }
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
