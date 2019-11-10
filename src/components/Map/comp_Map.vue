<template>
    <div class="amap-page-container" id='amapBox'>
        <el-amap vid="amapDemo" :zoom="zoom" :plugin="plugin"  class="amap-demo" id="amap">
            <el-amap-marker v-for="(marker,index) in markers"
                            :key="index"
                            :position="marker.position"
                            :content="marker.content"
                            visible="true"
                            draggable="false"
                            :vid="index">
            </el-amap-marker>
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

    export default {
        name:"Amap",
      data: function() {
        return {
            count: 1,
            zoom: 4,
            i:0,
            // center: [121.5273285, 31.21515044],
            // 定义点坐标组数组
            markerGroups: [
                [
                    {
                        position: [113.78109,35.19799],
                        content: this.getContentHtml('郑州'),
                        contry: '中国'
                    },
                    {
                        position: [116.30621, 39.976121],
                        content: this.getContentHtml('北京'),
                        contry: '中国'
                    },
                    {
                        position: [108.909426,34.513185],
                        content: this.getContentHtml('西安'),
                        contry: '中国'
                    },
                    {
                        position: [118.919945,32.374795],
                        content: this.getContentHtml('南京'),
                        contry: '中国'
                    }
                ],
                [
                    {
                        position: [71.45065999999997,51.18287],
                        content: this.getContentHtml('阿斯塔纳'),
                        contry: '哈萨克斯坦'
                    },
                    {
                        position: [76.93102999999996, 43.27214],
                        content: this.getContentHtml('阿拉木图'),
                        contry: '哈萨克斯坦'
                    }
                ]
            ],

          plugin: ['ToolBar', {
            pName: 'MapType',
            defaultType: 0,
            events: {
              init(o) {
                // console.log(o);
              }
            }
          }]
        };
      },

      mounted(){
        // this.amapManager = new this.$VueAMap.AMapManager();
      },

      methods: {
          getContentHtml(content) {
              // 未避免被简书转化未设置img的src属性
              return '<p>' +
                  '<i class="el-icon-map-location" style="color:red"></i>' +
                  '</p>' +
                  '<p style="font-size: 13px;margin-left:  -25px;color: yellow;background-color: red;text-align: center;">' +
                  ''+ content + '' +
                  '</p>';
          }
      },

        computed: {
            // 点坐标组getter方法 通过i从点坐标组数组中获取点坐标组
            markers: function () {
                // `this` points to the vm instance
                return this.markerGroups[this.i];
            },
            // 当前地图中心getter方法
            center: function () {
                return this.markerGroups[this.i][0].position;
            },
            // 当前国家getter方法
            contry: function () {
                return this.markerGroups[this.i][0].contry;
            }
        }
    };
</script>