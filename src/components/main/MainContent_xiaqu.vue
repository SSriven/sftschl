//县/辖区主体布局
<template>
    <div :style="item_box_styleObj">
        <el-row :gutter="20" >
            <el-col :span="6">
                <div class='item-box item-box-left' >
                    <draw-pie :id='main_pie_3'></draw-pie>
                </div>
            </el-col>
            <el-col :span="12">
                <div class='item-box item-box-middle' >
                    <Amap></Amap>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="item-box item-box-right" >
                    <draw-pie :id='main_pie_4'></draw-pie>
                </div>
            </el-col> 
        </el-row>
        <el-row :gutter="20" >
            <el-col :span="6">
                <div class="item-box item-box-left-2" >
                    <my-table></my-table>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="item-box item-box-middle-2" >
                    <draw-bar ></draw-bar>
                </div>
            </el-col>
            <el-col :span="6">
                <div class='item-box item-box-right-2' >
                    <draw-pie :id='main_pie_2'></draw-pie>
                </div>
            </el-col>  
        </el-row>
    </div>
</template>

<script>
import DrawBar from '../echarts/DrawBar.vue'
import Amap from '../Map/Map.vue'
import DrawPie from '../echarts/DrawPie.vue'
import MyTable from '../table/MyTable.vue'
import detectElementResize from 'detect-element-resize'
import $ from 'jquery'

export default {
    data(){
        return {
            main_pie_1:"main_pie_1",
            main_pie_2:"main_pie_2",
            main_pie_3:"main_pie_3",
            main_pie_4:"main_pie_4",
            item_box_styleObj:{height:(document.documentElement.clientHeight-156) + 'px'}
        }
    },
    mounted(){
        var that = this;
        var main = document.getElementById('my_header');
        detectElementResize.addResizeListener(main,function(){
            var h = main.style.display;
            
            if(h == 'none'){
                that.item_box_styleObj = {height:(document.documentElement.clientHeight-96) + 'px'}
                $("#main_gs").css({height:document.documentElement.clientHeight+'px'})
            }
                
            else{
                $("#main_gs").css({height:document.documentElement.clientHeight-60+'px'})
                that.item_box_styleObj = {height:(document.documentElement.clientHeight-156) + 'px'}
            }
                
            
        })
    },
    components:{
        DrawBar,Amap,DrawPie,MyTable
    },
    props:{
        
    }
}
</script>

<style>
.el-row{
    height:50%;
}
.el-row .el-col{
    height:100%;
}
.item-box{
    height:100%;
}
.el-col-6{
    border:1px solid #eee;
    box-sizing: border-box;
}

.el-col-12{
    border:1px solid #eee;
     box-sizing: border-box;
}
</style>