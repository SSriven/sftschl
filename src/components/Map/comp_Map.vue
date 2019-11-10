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
  #amapBox{
    height:100%;
  }
    #amap {
      /* height: 90% !important; */
      max-width:625px;
      max-height:270px;
      margin:0 auto;
    }
  </style>

  <script>
  
  // import VueAMap from 'vue-amap';
// import Vue from 'vue'
import $ from 'jquery'
    // NPM 方式
    // import { AMapManager } from 'vue-amap';
    // CDN 方式
    
    export default {
        name:"Amap",
      data: function() {
        return {
          timer:null,
          amapManager:new this.$VueAMap.AMapManager(),
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
              // console.log(e)
              
              // clearTimeout(this.timer);
              // this.timer = setTimeout(()=>{
                
              //   console.log(1);
              //   // console.log(document.getElementById("amap"))
              //   $("#amap").css({width:e.newsize.width})
              //   // console.log($("#amap"))
              // },200)
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
        // this.amapManager = new this.$VueAMap.AMapManager();
      },

      methods: {

      }
    };
</script>