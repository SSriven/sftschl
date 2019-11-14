import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/plugin_elements.js'
import './plugins/plugin_amap.js'
import './plugins/plugin_myEcharts.js'
import 'element-ui/lib/theme-chalk/index.css';
import tabContentClass from './Model/TabPageClass.js';

console.log(new tabContentClass("1","2","3"));



Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
