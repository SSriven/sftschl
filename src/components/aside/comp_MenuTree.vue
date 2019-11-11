<template>
    <el-collapse accordion  @change="clickCollapseItem">
      <el-collapse-item v-for='(item,index) in data' :key="index" :title="item.label" :name="index"
                        >
        <el-tree :data="item.treeData" :props="defaultProps" 
        :expand-on-click-node="false" 
        :highlight-current="highlightCurrent" 
        @node-click="handleNodeClick">
        </el-tree>
      </el-collapse-item>
    </el-collapse>
</template>

<script>
import { mapState,mapMutations ,mapGetters ,mapActions} from 'vuex'

export default {

    name:"MenuTree",
    data(){
        return {
         
           
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        highlightCurrent:true
        }
    },
    created () {
      this.$store.dispatch('asideDataStore/getMenuTree')
    },
    mounted(){
      // console.log(this.data)
    },
    computed:{
      ...mapState('asideDataStore',{
        data: state => state.menuTree
      }),
      ...mapState('mainDataStore',{
          tabPageArr: state => state.editableTabs,
          value:state => state.editableTabsValue
      })
    },
    methods: {
      handleNodeClick(data){
          this.getEditableTabs(data.label);//增加一个标签
          this.changeEditableTabsValue(this.tabPageArr.length);//打开刚刚增加的标签
          console.log(this.tabPageArr,this.value);
      },
        clickCollapseItem(index){
            let i = Number(index);
            this.getEditableTabs(this.data[i].label);//增加一个标签
            this.changeEditableTabsValue(this.tabPageArr.length);//打开刚刚增加的标签
        },
        ...mapActions('mainDataStore',{
            getEditableTabs:'getEditableTabs'
        }),
        ...mapMutations('mainDataStore',{
            changeEditableTabs:'changeEditableTabs',
            changeEditableTabsValue:'changeEditableTabsValue'
        })
    }
    
}
</script>