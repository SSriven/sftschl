//打开地图按钮组件
<template>
    <el-popover
    placement="top-end"
   
    trigger="manual"
    v-model="visible">
        <div class="amap-container">
            <Amap></Amap>
        </div>
        <el-button slot="reference" @click="visible = !visible">打开地图</el-button>
    </el-popover>
</template>

<script>
import Amap from './Map.vue'
export default {
    data() {
      return {
        visible: false,
        gridData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
      };
    },
    components:{
        Amap
    }
}
</script>

<style>
/* .amap-container{
    width:1200px;
    height:600px;
} */
</style>