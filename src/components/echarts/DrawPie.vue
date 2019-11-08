<template>
    <div :id="id" style="height:100%"></div>
</template>

<script>
let option = {
    color:['#37A2DA','#32C5E9','#67E0E3','#9FE6B8','#FFDB5C','#ff9f7f','#fb7293','#E062AE','#E690D1'],
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    series: [
        
        {
            name:'访问来源',
            type:'pie',
            radius : [0, "50%"],
            label: {
                normal: {
                    formatter: '{b|{b}\n}{d}%  ',
                    rich: {
                        b: {
                            fontSize: 13,
                            lineHeight: 16
                        },
                        per: {
                            padding: [2, 4],
                            borderRadius: 2
                        }
                    }
                }
            },
            data:[
                {value:335, name:'直达'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
                {value:135, name:'视频广告'},
                {value:1048, name:'百度'},
                {value:251, name:'谷歌'},
                {value:147, name:'必应'},
                {value:102, name:'其他'}
            ]
        }
    ]
};
import detectElementResize from 'detect-element-resize'
import $ from 'jquery'
export default {
    name:"DrawPie",
    mounted(){
        let main = document.getElementById(this.id);
        this.myPie = this.$echarts.init(main);
        this.drawPie();
        var that = this;
            
        detectElementResize.addResizeListener(main,function(){
            if(that.timer)
                clearTimeout(that.timer);
            var timer = setTimeout(()=>{
                that.myPie.resize();
            },200)
            
        })
    },
    methods:{
        drawPie(){
            this.myPie.setOption(option);
        }
    },
    props:{
        id:String
    }
}
</script>