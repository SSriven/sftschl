//主要内容组件
<template>
    <div class="main-content">
        <el-row>
            <el-col :span="24"><draw-bar :option='option'></draw-bar></el-col>
            
        </el-row>
        <el-row :gutter="20">
            <el-col :span="6" :offset="18"><open-map></open-map></el-col>
        </el-row>
    </div>
</template>

<script>
import DrawBar from '../echarts/DrawBar.vue'
import Amap from '../Map/Map.vue'
import OpenMap from '../Map/OpenMap.vue'

export default {
    name:'MainContent',
    data(){
        return {
        }
    },
    components:{
        DrawBar,Amap,OpenMap
    },
    props:{
        option:Object
    }
}
</script>