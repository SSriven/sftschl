import VueAMap from 'vue-amap';
import Vue from 'vue'

Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  key: 'c3d6332c240fba68a55509ade65594fe',
  // 插件集合
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor','AMap.Geolocation'],
  v: '1.4.4'
});
Vue.prototype.$VueAMap = VueAMap