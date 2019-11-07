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

    name:"XingZheng",
    data(){
        return {
             data: [{
          label: '新建中心区',
          children: [{
            label: '中心镇-社区A新建中心区新建中心区',
            children: [{
              label: '企业A新建中心区新建中心区新建中心区'
            },{
              label: '企业B'
            },{
              label: '企业C'
            },{
              label: '企业D'
            }]
          },{
            label: '中心镇-社区B',
            children: [{
              label: '企业A'
            },{
              label: '企业B'
            },{
              label: '企业C'
            },{
              label: '企业D'
            }]
          },{
            label: '中心镇-社区C',
            children: [{
              label: '企业A'
            },{
              label: '企业B'
            },{
              label: '企业C'
            },{
              label: '企业D'
            }]
          }]
        }, {
          label: '红谷滩区',
          children: [{
            label: '红谷滩区-社区A',
            children: [{
              label: '企业A'
            },{
              label: '企业B'
            },{
              label: '企业C'
            },{
              label: '企业D'
            }]
          },{
            label: '红谷滩区-社区B',
            children: [{
              label: '企业A'
            },{
              label: '企业B'
            },{
              label: '企业C'
            },{
              label: '企业D'
            }]
          },{
            label: '红谷滩区-社区C',
            children: [{
              label: '企业A'
            },{
              label: '企业B'
            },{
              label: '企业C'
            },{
              label: '企业D'
            }]
          }]
        },{
          label: '瑶湖区',
          children: [{
            label: '瑶湖区-社区A',
            children: [{
              label: '企业A'
            },{
              label: '企业B'
            },{
              label: '企业C'
            },{
              label: '企业D'
            }]
          },{
            label: '瑶湖区-社区B',
            children: [{
              label: '企业A'
            },{
              label: '企业B'
            },{
              label: '企业C'
            },{
              label: '企业D'
            }]
          },{
            label: '瑶湖区-社区C',
            children: [{
              label: '企业A'
            },{
              label: '企业B'
            },{
              label: '企业C'
            },{
              label: '企业D'
            }]
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