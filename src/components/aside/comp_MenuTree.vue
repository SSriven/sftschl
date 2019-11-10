<template>
    <el-collapse accordion>
      <el-collapse-item v-for='(item,index) in data' :key="index" :title="item.title" :name="index">
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
      console.log(this.data)
    },
    computed:{
      ...mapState('asideDataStore',{
        data: state => state.menuTree
      }),
      // ...mapGetters('asideDataStore',{
      //   data: 'menuTreeData'
      // })
    },
    methods: {
      handleNodeClick(data){
        console.log(data)
      }
    }
    
}
</script>