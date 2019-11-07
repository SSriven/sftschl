//Tabs标签页
<template>
    <div class="tabs">
        <el-tabs v-model="editableTabsValue2" type="card" closable @tab-remove="removeTab"
        @tab-click='clickTab'>
            <el-tab-pane
                v-for="(item, index) in editableTabs2"
                :key="index"
                :label="item.title"
                :name="index+''">    
                <main-content :option="item.tabpage" v-if="item.active"></main-content>
            </el-tab-pane>
        </el-tabs>
        
    </div>
</template>

<script>

import MainContent from './MainContent.vue'
let option = {
          color:['#37A2DA','#32C5E9','#67E0E3','#9FE6B8','#FFDB5C','#ff9f7f','#fb7293','#E062AE','#E690D1'],
          tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          legend: {
              data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎','百度','谷歌','必应','其他']
          },
          grid: {
              left: '10%',
              right: '10%',
              bottom: '3%',
              containLabel: true,
              width:"80%"
          },
          xAxis : [
              {
                  type : 'category',
                  data : ['周一','周二','周三','周四','周五','周六','周日']
              }
          ],
          yAxis : [
              {
                  type : 'value'
              }
          ],
          series : [
              {
                  name:'直接访问',
                  type:'bar',
                  data:[320, 332, 301, 334, 390, 330, 320]
              },
              {
                  name:'邮件营销',
                  type:'bar',
                  stack: '广告',
                  data:[120, 132, 101, 134, 90, 230, 210]
              },
              {
                  name:'联盟广告',
                  type:'bar',
                  stack: '广告',
                  data:[220, 182, 191, 234, 290, 330, 310]
              },
              {
                  name:'视频广告',
                  type:'bar',
                  stack: '广告',
                  data:[150, 232, 201, 154, 190, 330, 410]
              },
              {
                  name:'搜索引擎',
                  type:'bar',
                  data:[862, 1018, 964, 1026, 1679, 1600, 1570],
                  markLine : {
                      lineStyle: {
                          normal: {
                              type: 'dashed'
                          }
                      },
                      data : [
                          [{type : 'min'}, {type : 'max'}]
                      ]
                  }
              },
              {
                  name:'百度',
                  type:'bar',
                  barWidth : 5,
                  stack: '搜索引擎',
                  data:[620, 732, 701, 734, 1090, 1130, 1120]
              },
              {
                  name:'谷歌',
                  type:'bar',
                  stack: '搜索引擎',
                  data:[120, 132, 101, 134, 290, 230, 220]
              },
              {
                  name:'必应',
                  type:'bar',
                  stack: '搜索引擎',
                  data:[60, 72, 71, 74, 190, 130, 110]
              },
              {
                  name:'其他',
                  type:'bar',
                  stack: '搜索引擎',
                  data:[62, 82, 91, 84, 109, 110, 120]
              }
          ],
          
        }
export default {
    data() {
      return {
          
        editableTabsValue2: '2',
        editableTabs2: [{
          title: '新建中心区',
          name: '1',
          tabpage:{},
          active:false
        }, {
          title: '企业A',
          name: '2',
          tabpage: {},
          active:false
        }],
        tabIndex: 2,
        
      }
    },
    mounted(){

    },
    methods: {
      addTab(targetName) {
        let newTabName = ++this.tabIndex + '';
        this.editableTabs2.push({
          title: 'New Tab',
          name: newTabName,
          content: 'New Tab content'
        });
        this.editableTabsValue2 = newTabName;
      },
      removeTab(target) {
        let tabs = this.editableTabs2;
        tabs.splice(Number(target),1);
        this.editableTabs2 = tabs;
      },
      clickTab(target){
        console.log(target.index);
        let tabs = this.editableTabs2;
        tabs.forEach((tab,index)=>{
          tab.active = false;
        })
        tabs[Number(target.index)].active = true;
        tabs[Number(target.index)].tabpage = option;
      }
    },
    components:{
        MainContent
    }
}
</script>