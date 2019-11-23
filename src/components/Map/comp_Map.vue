<template>
    <div class="amap-page-container" :id='amapBox_id'>
        <el-amap :vid="amap_id" :zoom="zoom" :plugin="plugin"  class="amap-demo" :id="amap_id" :center="center">
            <el-amap-marker v-for="(marker,index) in markers"
                            :key="index"
                            :position="marker.position"
                            :content="getContentHtml(marker.content,marker.level)"
                            visible="true"
                            :offset="[-30,-33]"
                            :vid="index">
            </el-amap-marker>
        </el-amap>
    </div>
  </template>

  <style>
  .amap-page-container{
    height:100%;
  }
    .amap-demo {
       height: 90% !important;
      width:625px;
      /*max-height:270px;*/
      margin:0 auto;
    }
  </style>

  <script>

    export default {
        name:"Amap",
      data: function() {
        return {
            amap_id:"amap_"+Math.round(Math.random()*100000) + new Date().getTime(),
            amapBox_id:'amapBox_'+Math.round(Math.random()*100000) + new Date().getTime(),
            count: 1,
            zoom: 12,
            i:0,
            center: [115.8309967752457,28.650550306535255],
            // 定义点坐标组数组
            markerGroups: [
                [
                    {
                        position: [115.91875328979495,28.661433713542777],
                        level:4,
                        content: '南昌',
                        contry: '中国',
                    },
                    {
                        position: [115.8309967752457,28.650550306535255],
                        level:1,
                        content: '南昌航空大学D栋',
                        contry: '中国',
                    },
                    {
                        position: [115.8035148616791, 28.654876501958107],
                        level:2,
                        content: '南昌大学',
                        contry: '中国'
                    },
                    {
                        position: [115.82109405956271,28.667562193725143],
                        level:3,
                        content: '江西科技师范大学',
                        contry: '中国'
                    },
                    {
                        position: [115.85052325687411,28.656034517458934],
                        level:4,
                        content: '南昌之星',
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
          getContentHtml(content,level) {
              // 未避免被简书转化未设置img的src属性
              // return '<i class="myiconuniE900" style="color:red"></i> '+
              //     '<p style="font-size: 13px;margin-left:  -25px;color: yellow;background-color: red;text-align: center;">' +
              //     ''+ content + '' +
              //     '</p>';
              let color = "";
              if(level === 1)
                  color = "red";
              else if(level === 2)
                  color = "orange";
              else if(level === 3)
                  color = "yellow";
              else
                  color = "blue";
              let htmlStr = `<div class="addr-flag">
                                    <i class="addr-flag-icon myiconuniE900" style="color: ${color};"></i>
                                </div>
                                <div class="addr-flag-text">${content}</div>`;
              return htmlStr;
          }
      },

        computed: {
            // 点坐标组getter方法 通过i从点坐标组数组中获取点坐标组
            markers: function () {
                // `this` points to the vm instance
                return this.markerGroups[this.i];
            },
            // 当前国家getter方法
            contry: function () {
                return this.markerGroups[this.i][0].contry;
            }
        }
    };
</script>