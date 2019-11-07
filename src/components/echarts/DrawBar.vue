 //柱状图模板
<template>
    <div id="main" style="height:500px"></div>
</template>

<script>
var echarts = require('echarts');
import detectElementResize from 'detect-element-resize'
import $ from 'jquery'
export default {
    name:'DrawBar',
    data(){
        return{
           timer:null
        }
    },
    mounted(){
        var main = document.getElementById('main');
        
        var myChart = echarts.init(main);
        this.myChart = myChart;
        this.draw();
        var that = this;
            
        detectElementResize.addResizeListener(main,function(){
            
            // that.option.grid.width = $("#main").width()*0.8;
            // that.option.grid.left = "5%";
            // that.option.grid.right = "5%";
            // that.option.grid.bottom = "3%";
            // clearTimeout(timer);
            if(that.timer)
                clearTimeout(that.timer);
            var timer = setTimeout(()=>{
                that.myChart.resize();
            },200)
            
        })
    },
    methods:{
        draw(){
            
            this.myChart.setOption(this.option);
            
        }
    },
    watch: {
            option: function(newVal,oldVal){
                this.option = newVal;  //newVal即是chartData
                console.log(this.option)
                this.myChart.setOption(this.option);
            }
        },
    props:{
        option:Object
    }
}
</script>