<template>
    <el-collapse accordion>
      <el-collapse-item title="新建县" name="1">
        <el-tree :data="data" :props="defaultProps" 
        :expand-on-click-node="false" 
        :highlight-current="highlightCurrent" 
        @node-click="handleNodeClick">
        </el-tree>
      </el-collapse-item>
      <el-collapse-item title="南昌县" name="2">
        <el-tree :data="data" :props="defaultProps" 
        :expand-on-click-node="false" 
        :highlight-current="highlightCurrent" 
        @node-click="handleNodeClick">
        </el-tree>
      </el-collapse-item>
    </el-collapse>
</template>

<script>
export default {

    name:"XiaQu",
    data(){
        return {
            data: [{
          label: '新建中心区',
          id:"1",
          children: [{
            label: '中心镇-社区A',
          },{
            label: '中心镇-社区B',
          },{
            label: '中心镇-社区C',
          },{
            label: '中心镇-社区D',
          },{
            label: '中心镇-社区E',
          },{
            label: '中心镇-社区F',
          },{
            label: '中心镇-社区G',
          },{
            label: '中心镇-社区H',
          },{
            label: '中心镇-社区I',
          }]
        }, {
          label: '红谷滩区',
          children: [{
            label: '红谷滩区-社区A',
          },{
            label: '红谷滩区-社区B',
          },{
            label: '红谷滩区-社区C',
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        highlightCurrent:true
        }
    },
    methods:{
        handleNodeClick(e){
            console.log(e);
        }
    }
}
</script>