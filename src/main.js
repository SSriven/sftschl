import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/plugin_elements.js'
import './plugins/plugin_amap.js'
import './plugins/plugin_myEcharts.js'
import 'element-ui/lib/theme-chalk/index.css';


Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
