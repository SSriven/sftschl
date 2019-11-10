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
        // tabs[Number(target.index)].tabpage = option;
      }
    },
    components:{
        MainContent
    }
}
</script>