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
      this.$store.dispatch('asideDataStore/getMenuTree','0')
    },
    mounted(){
      // console.log(this.data)
    },
    computed:{
      ...mapState('asideDataStore',{
        data: state => state.menuTree,
          currentTab:state => state.currentTab
      }),
      ...mapState('mainDataStore',{
          tabPageArr: state => state.editableTabs,
          value:state => state.editableTabsValue
      })
    },
    methods: {
      handleNodeClick(data){
          let i = this.tabPageArr.findIndex((value,index,arr) => {
              // console.log(value.id);
              return value.id === data.id;
          });
          console.log(data);
          if(i === -1){
              if(data.type){
                  this.getEditableTabs({title:data.label,id:data.id,type:data.type});//增加一个标签
                  this.changeEditableTabsValue(this.tabPageArr.length);//打开刚刚增加的标签
              }
          }else{
              this.changeEditableTabsValue(i);//打开已存在的标签
          }
          console.log(this.tabPageArr,this.value);
      },
        clickCollapseItem(index){
            let i = Number(index);
            let that = this;
            let j = this.tabPageArr.findIndex((value,index,arr) => {
                // console.log(value.id);
                return value.id === that.currentTab + '' + i;
            });
            if(j === -1){
                if(that.currentTab !== '2'){
                    this.getEditableTabs({title:this.data[i].label,id:that.currentTab + '' + i,type:(Number(that.currentTab)+1) + ''});//增加一个标签
                    this.changeEditableTabsValue(this.tabPageArr.length);//打开刚刚增加的标签
                }

            }else{
                this.changeEditableTabsValue(j);//打开刚刚增加的标签
            }

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