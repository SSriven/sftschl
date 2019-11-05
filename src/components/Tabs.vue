<template>
    <div>
        <el-tabs v-model="editableTabsValue2" type="card" closable @tab-remove="removeTab">
            <el-tab-pane
                v-for="(item, index) in editableTabs2"
                :key="index"
                :label="item.title"
                :name="index+''">
                <TabPages></TabPages>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import TabPages from './TabPages.vue'
export default {
    data() {
      return {
        editableTabsValue2: '2',
        editableTabs2: [{
          title: '新建中心区',
          name: '1',
          tabpage:'1'
        }, {
          title: '企业A',
          name: '2',
          tabpage: '2'
        }],
        tabIndex: 2
      }
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
      }
    },
    components:{
        TabPages
    }
}
</script>