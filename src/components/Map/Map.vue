<template>
    <div class="amap-page-container" id='amapBox'>
      <el-amap ref="map" vid="amapDemo" 
      :amap-manager="amapManager" 
      :center="center" 
      :zoom="zoom" 
      :plugin="plugin" 
      :events="events"
      resizeEnable="true"
      id="amap">
      </el-amap>
    </div>
  </template>

  <style>
    #amap {
      height: 600px !important;
      
    }
  </style>

  <script>
  
  import VueAMap from 'vue-amap';
import Vue from 'vue'
import $ from 'jquery'
Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  key: 'c3d6332c240fba68a55509ade65594fe',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4'
});
    // NPM 方式
    // import { AMapManager } from 'vue-amap';
    // CDN 方式
    let amapManager = new VueAMap.AMapManager();
    export default {
        name:"Amap",
      data: function() {
        return {
          timer:null,
          amapManager,
          zoom: 12,
          center: [121.59996, 31.197646],
          events: {
            init: (o) => {
              console.log(o.getCenter())
              // console.log(this.$refs.map.$$getInstance())
              // o.getCity(result => {
              //   console.log(result)
              // })
            },
            'moveend': () => {
            },
            'zoomchange': () => {
            },
            'click': (e) => {
              alert('map clicked');
            },
            'resize':(e)=>{
              console.log(e)
              
              // clearTimeout(this.timer);
              this.timer = setTimeout(()=>{
                
                console.log(1);
                // console.log(document.getElementById("amap"))
                $("#amap").css({width:e.newsize.width})
                // console.log($("#amap"))
              },200)
            }
          },
          plugin: ['ToolBar', {
            pName: 'MapType',
            defaultType: 0,
            events: {
              init(o) {
                console.log(o);
              }
            }
          }]
        };
      },

      mounted(){

      },

      methods: {

      }
    };
</script>