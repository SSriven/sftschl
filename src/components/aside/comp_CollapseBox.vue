
// 侧边栏容器
<template>
<div id="collapseShow" style="height:100%;overflow:hidden;">
  <ul class="tab">
    <li v-for='(item,index) in tabList' :key='index' :class='item.className' @click="qiehuan(index)">
      {{item.labelName}}
    </li>
  </ul>
  <GeminiScrollbar autoshow class='collapse' :style="styleObj">
    <menu-tree></menu-tree>
  </GeminiScrollbar>
  
</div>
</template>
<script>
import Vue from 'vue'
import GeminiScrollbar from 'vue-gemini-scrollbar'
import MenuTree from './comp_MenuTree.vue'
import { mapState,mapMutations ,mapActions } from 'vuex'

// const { mapState, mapActions } = createNamespacedHelpers('../../store/modules')

Vue.use(GeminiScrollbar)
  export default {
    name:"CollapseBox",
    data() {
      return {
        styleObj:{height:document.documentElement.clientHeight+"px"},  
      };
    },

    components:{
      MenuTree
    },

    computed:{
      ...mapState('asideDataStore',{
        tabList:state => state.tabList,
        currentTab:state => state.currentTab
      }),
      ...mapState({
        currentStatus:state => state.status
      })
    },
    created () {
      this.$store.dispatch('asideDataStore/getTabList')
    },

    methods:{
      /**
       * 切换选项卡
       */
      qiehuan(index){
        var list = this.tabList;
        for(var i = 0; i < list.length; i++){
          list[i].className="tab-item";
        }
        list[index].className = "tab-item is-active";
        this.changeTabList(list);
        this.changeTabIndex(index+'');
        this.getMenuTree(index+'');
      },
      ...mapActions('asideDataStore', [
          'getMenuTree'
      ]),
      
      ...mapMutations('asideDataStore',{
        changeTabIndex:'changeCurrentTab',
        changeTabList:'changeTabList'
      })
      
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
    font-size: 16px !important;
    padding-left: 20px !important;
    font-weight: bold !important;
    color:#303133 !important;
  }
  .el-tree-node__label{
    font-size: 13px !important;
    color:#606266 !important;
  }
  /* vertical scrollbar track */
.gm-scrollbar.-vertical {
  background-color: #fdfdfd
}

.gm-scrollbar-container{
  overflow: hidden;
}


/* scrollbar thumb */
.gm-scrollbar .thumb {
  background-color: #d0d0d0;
}
.gm-scrollbar .thumb:hover {
  background-color: #d0d0d0;
}
</style>