//Tabs标签页
<template>
    <div class="tabs">
        <el-tabs v-model="editableTabsValue"  type="card" closable @tab-remove="removeTab"
        @tab-click='clickTab'>
            <el-tab-pane
                v-for="(item, index) in editableTabs2"
                :key="index"
                :label="item.title"
                :name="index+''">    
                <main-content  v-if="item.active"></main-content>
            </el-tab-pane>
        </el-tabs>
        
    </div>
</template>

<script>

import MainContent from './comp_MainContent.vue'

export default {
    data() {
      return {
          editableTabsValue:"0",
        editableTabs2: [{
          title: '新建中心区',
          tabpage:{},
          active:true
        }, {
          title: '企业A',
          tabpage: {},
          active:false
        },{
            title: '企业B',
            tabpage: {},
            active:false
        }],
        
      }
    },
    mounted(){

    },
    methods: {

        /**
         * 删除tab标签页
         * @param targetName
         */
      removeTab(targetName) {

          // let index = Number(target);
          // let tabs = this.editableTabs2;

          // console.log(index,len)
          // tabs[index].active = false;
        // tabs[index + 1 ].active = true;
        // tabs.splice(index,1);
        // this.editableTabs2 = tabs;

          let tabs = this.editableTabs2;
          let len = tabs.length;
          let active = Number(this.editableTabsValue);
          let target = Number(targetName);
          if(len === 1 && target ===0){//如果只有一个标签，不能删除
              return;
          }
          console.log(active,target)
          if (active === target) {//要删除的标签页和当前展示的标签页相同
              let nextTab = tabs[active - 1];
              tabs[active].active = false;
              if (nextTab) {
                  active = active-1;
                  this.editableTabsValue = active + '';
              }else{
                  nextTab = tabs[active + 1];
                  if(nextTab){
                      active = active+1;
                      this.editableTabsValue = (active-1) + '';
                  }
              }
              tabs[active].active = true;

          }else if(active < target){
              this.editableTabsValue = active + '';
          }else{
              this.editableTabsValue = (active-1) + '';
          }



          this.editableTabs2 = tabs.filter((tab,index) => index!== target);
          console.log(this.editableTabs2)
      },
      clickTab(target){
        console.log(target.index);
        let tabs = this.editableTabs2;
        tabs.forEach((tab,index)=>{
          tab.active = false;
        })
        tabs[Number(target.index)].active = true;
        // tabs[Number(target.index)].tabpage = option;
      }
    },
    components:{
        MainContent
    }
}
</script>