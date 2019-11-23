<template>
<!--    <el-collapse accordion  @change="clickCollapseItem">-->
<!--      <el-collapse-item v-for='(item,index) in data' :key="index" :title="item.label" :name="index"-->
<!--                        >-->
        <el-tree :data="data" :props="defaultProps"
        :expand-on-click-node="false" 
        :highlight-current="highlightCurrent"

        @node-click="handleNodeClick">
        </el-tree>
<!--      </el-collapse-item>-->
<!--    </el-collapse>-->
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
        /**
         * 点击菜单选项，增加一个标签页
         * @param data
         */
      handleNodeClick(data){
          let i = this.tabPageArr.findIndex((value,index,arr) => {
              // console.log(value.id);
              return value.id === data.id;
          });
          console.log(data);
          if(i === -1){//标签页不存在
              if(data.type){
                  this.addEditableTabs({title:data.label,id:data.id,type:data.type});//增加一个标签
                  this.changeEditableTabsValue(this.tabPageArr.length-1);//打开刚刚增加的标签
              }
          }else{//标签页存在
              this.changeEditableTabsValue(i);//打开已存在的标签
          }
          console.log(this.tabPageArr,this.value);
      },
        /**
         * 点击菜单目录选项，增加一个标签页
         * @param index
         */
        clickCollapseItem(index){
            let i = Number(index);
            let that = this;
            let j = this.tabPageArr.findIndex((value,index,arr) => {
                // console.log(value.id);
                return value.id === that.currentTab + '' + i;
            });
            if(j === -1){//标签页不存在
                if(that.currentTab !== '2'){
                    this.addEditableTabs({title:this.data[i].label,id:that.currentTab + '' + i,type:(Number(that.currentTab)+1) + ''});//增加一个标签
                    this.changeEditableTabsValue(this.tabPageArr.length-1);//打开刚刚增加的标签
                }

            }else{//标签页存在
                this.changeEditableTabsValue(j);//打开刚刚增加的标签
            }

        },

        ...mapMutations('mainDataStore',{
            changeEditableTabs:'changeEditableTabs',
            changeEditableTabsValue:'changeEditableTabsValue',
            addEditableTabs:'addEditableTabs'
        })
    }
    
}
</script>