
// 侧边栏容器
<template>
<div id="collapseShow" style="height:100%;overflow:hidden;">
  <ul class="tab">
    <li v-for='(item,index) in tabList' :key='index' :class='item.class' @click="qiehuan(index)">
      {{item.name}}
    </li>
  </ul>
  <GeminiScrollbar autoshow class='collapse' :style="styleObj">
    <!-- <el-collapse v-model="activeName1" accordion>
      <el-collapse-item title="新建县" name="1">
        <el-collapse v-model="activeName2" accordion>
          <el-collapse-item title="新建中心区" name="2">
            <el-collapse v-model="activeName3" accordion>
              <el-collapse-item title="中心镇-社区A" name="3">
                <div>企业A</div>
                <div>企业B</div>
                <div>企业C</div>
              </el-collapse-item>
              <el-collapse-item title="中心镇-社区B" name="4">
                <div>企业A</div>
                <div>企业B</div>
                <div>企业C</div>
              </el-collapse-item>
            </el-collapse>
          </el-collapse-item> 
        </el-collapse>
      </el-collapse-item>     
    </el-collapse> -->
    <xia-qu v-show="shows[0]"></xia-qu>
    <qi-ye v-show="shows[1]"></qi-ye>
    <xing-zheng v-show="shows[2]"></xing-zheng>
  </GeminiScrollbar>
  
</div>
</template>
<script>
import Vue from 'vue'
import GeminiScrollbar from 'vue-gemini-scrollbar'
import XiaQu from './XiaQu.vue'
import QiYe from './QiYe.vue'
import XingZheng from './XingZheng.vue'

Vue.use(GeminiScrollbar)
  export default {
    name:"CollapseBox",
    data() {
      return {
        
        shows:[true,false,false],
        tabList:[
          {class:"tab-item is-active",name:"辖区企业数据",url:"/about/xiaqu"},
          {class:"tab-item",name:"风险评级企业",url:"/about/qiye"},
          {class:"tab-item",name:"行政执法",url:"/about/xingzheng"},
        ],
        styleObj:{height:document.documentElement.clientHeight+"px"},
        
      };
    },

    components:{
      XiaQu,QiYe,XingZheng
    },

    methods:{
      /**
       * 切换选项卡
       */
      qiehuan(index){
        var list = this.tabList;
        var shows = this.shows;
        for(var i = 0; i < list.length; i++){
          list[i].class="tab-item";
          shows[i] = false;
        }
        list[index].class = "tab-item is-active";
        this.tabList = list;
        shows[index] = true;
        this.shows = shows;
      },
      handleNodeClick(data) {
        console.log(data);
      },
      
    }
  };
</script>

<style>
  .tab{
    width:40px;
    text-align:center;
    padding:0;
    background: #409EFF;
    margin:0;
    height:100%;
    float: left;
  }
  .tab .tab-item{
    list-style: none;
    line-height: 24px;  
    width:20px;
    padding:10px;
    margin-bottom:4px;
    font-size: 14px;  
    word-wrap: break-word;
    background: #409EFF;
    font-weight: bold;
    box-shadow: 0 4px 1px rgba(50,50,50,0.35);
    cursor: pointer;
    z-index: 999;
    color:#fff;
    position: relative;
  }
  .tab .is-active{
    background: #fff;
    color:#409EFF;
  }
  
  .el-collapse-item__header{
    font-size: 16px;
    padding-left: 20px;
    font-weight: bold;
    color:#303133;
  }
  .el-tree-node__label{
    font-size: 13px;
    color:#606266;
  }
  /* vertical scrollbar track */
.gm-scrollbar.-vertical {
  background-color: #f0f0f0
}


/* scrollbar thumb */
.gm-scrollbar .thumb {
  background-color: #dedede;
}
.gm-scrollbar .thumb:hover {
  background-color: #d0d0d0;
}
</style>