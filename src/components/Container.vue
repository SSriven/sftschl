// 布局容器
<template>
    <div>
        <el-container>
            <el-aside width="220px" :style="styleObj2">
                <CollapseBox></CollapseBox>
                <div :into="into" :class="arrow[0]" @click="collapseShow">
                    <i :class="arrow[1]"></i>
                </div>
            </el-aside>
            <el-container>
                <el-header>
                    <Header></Header>
                </el-header>
                <el-main :style="styleObj">
                    <Tabs></Tabs>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import CollapseBox from './CollapseBox.vue'
import Header from './Header.vue'
import Tabs from './Tabs.vue'
import $ from 'jquery'
export default {
    name:"Container",
    data(){
        return{
            into:false,//侧边栏是否隐藏
            arrow:["collapse-into","el-icon-d-arrow-left"],
            styleObj:{height:document.documentElement.clientHeight-60+"px"},
            styleObj2:{height:document.documentElement.clientHeight+"px"}
        }
    },
    components:{
        CollapseBox,Header,Tabs
    },
    methods:{
        /**
       * 控制侧边栏弹入弹出
       */
      collapseShow(){
        if(!this.into){//隐藏侧边栏
          $(".el-aside").animate({ 
            width: "0"
          }, "fast","swing" );
          var arrow = this.arrow;
          arrow = ["collapse-out","el-icon-d-arrow-right"];
          this.into = !this.into;
          this.arrow = arrow;
        }else{//显示侧边栏
            $(".el-aside").animate({ 
            width: "220px"
          }, "fast","swing" );
          var arrow = this.arrow;
          arrow = ["collapse-into","el-icon-d-arrow-left"];
          this.into = !this.into;
          this.arrow = arrow;
        }
      }
    }
}
</script>
<style>
.el-header {
    /* background-color: #F2F6FC; */
    color: #333;
    border-left:1px solid #DCDFE6;
    border-bottom:1px solid #DCDFE6;
  }
  
  .el-aside {
    background-color: #fdfdfd;
    color: #333;
    position:relative;
    overflow: unset;
    /* border-right:1px solid #ddd; */
  }
  
  .el-main {
    background-color: #fff;
    color: #333;
    text-align: center;
    border-left:1px solid #DCDFE6;
  }
  .collapse{
    float: left;
    width:180px;
  }
  .collapse-into{
    width:0;
    height:36px;
    position: absolute;
    top:50%;
    margin-top:-18px;
    right:0;
    border-top:9px solid transparent;
    border-bottom:9px solid transparent;
    border-right: 18px solid #DCDFE6;
    z-index: 999;
    line-height: 36px;
    cursor: pointer;
    transition: all 0.1s ease;
    -webkit-transition: all 0.1s ease;
    -o-transition:all 0.1s ease;
    -ms-transition:all 0.1s ease;
    -moz-transition:all 0.1s ease;
  }
  .collapse-out{
    width:0;
    height:36px;
    position: absolute;
    top:50%;
    margin-top:-18px;
    right:-18px;
    border-top:9px solid transparent;
    border-bottom:9px solid transparent;
    border-left: 18px solid #DCDFE6;
    z-index: 999;
    line-height: 36px;
    cursor: pointer;
    transition: all 0.1s ease;
    -webkit-transition: all 0.1s ease;
    -o-transition:all 0.1s ease;
    -ms-transition:all 0.1s ease;
    -moz-transition:all 0.1s ease;
  }
  .collapse-into i{
    margin-right:2px;
    text-align: center;
    color:#555;
  }
  .collapse-out i{
    margin-left:-18px;
    text-align: center;
    color:#555;
  }
  .collapse-into:hover{
    border-right: 22px solid #DCDFE6;
  }
  .collapse-out:hover{
    border-left: 22px solid #DCDFE6;
    right:-22px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>