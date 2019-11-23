//县/辖区主体布局
<template>
    <div :style="item_box_styleObj" class="main_content" :id="id">
        <el-row :gutter="20" >
            <el-col :span="6">
                <div class='item-box item-box-left' >
                    <draw-pie :index="index1"></draw-pie>
                </div>
            </el-col>
            <el-col :span="12">
                <div class='item-box item-box-middle' >
                    <Amap></Amap>
                    <ul class="amap-flag">
                        <li><i class="myiconuniE900" style="color:red"></i>&nbsp;&nbsp;重大风险</li>
                        <li><i class="myiconuniE900" style="color:orange"></i>&nbsp;&nbsp;较大风险</li>
                        <li><i class="myiconuniE900" style="color:yellow"></i>&nbsp;&nbsp;一般风险</li>
                        <li><i class="myiconuniE900" style="color:blue"></i>&nbsp;&nbsp;低风险</li>
                        <li>企业：89</li>
                        <li>隐患：4</li>
                    </ul>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="item-box item-box-right" >
                    <draw-pie :index="index2"></draw-pie>
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
                    <draw-bar></draw-bar>
                </div>
            </el-col>
            <el-col :span="6">
                <div class='item-box item-box-right-2' >
                    <draw-pie :index="index3"></draw-pie>
                </div>
            </el-col>  
        </el-row>
    </div>
</template>

<script>
import DrawBar from '../echarts/comp_DrawBar.vue'
import Amap from '../Map/comp_Map.vue'
import DrawPie from '../echarts/comp_DrawPie.vue'
import MyTable from '../table/comp_MyTable.vue'
import detectElementResize from 'detect-element-resize'
import { mapState,mapMutations ,mapGetters ,mapActions} from 'vuex'
import $ from 'jquery'

export default {
    data(){
        return {
            index1:'1',
            index2:'2',
            index3:'3',
            main_pie_4:"main_pie_4",
            item_box_styleObj:{height:(document.documentElement.clientHeight-156) + 'px'},
            id:"main_content_"+Math.random()*100000+new Date().getTime()
        }
    },
    computed:{

    },
    beforeCreate(){
        // let that = this;
        // this.loading = this.$loading.service({
        //     target:document.getElementById(that.id),
        //     text: '加载中',
        //     spinner: 'el-icon-loading',
        //     background: 'rgba(0, 0, 0, 0.7)'
        // });
    },
    mounted(){
        //console.log(this.$store.getters['mainDataStore/currentTabContent']);//访问modules中的getters的正确方法

        // this.loading.close();
        let that = this;
        let main = document.getElementById('my_header');
        /**
         * 监听header组件是否隐藏
         */
        detectElementResize.addResizeListener(main,function(){
            let h = main.style.display;
            
            if(h === 'none'){   //header组件隐藏
                that.item_box_styleObj = {height:(document.documentElement.clientHeight-96) + 'px'};
                $("#main_gs").css({height:document.documentElement.clientHeight+'px'});//全屏显示
            }
                
            else{//header组件显示
                $("#main_gs").css({height:document.documentElement.clientHeight-60+'px'});
                that.item_box_styleObj = {height:(document.documentElement.clientHeight-156) + 'px'};
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