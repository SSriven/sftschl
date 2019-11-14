<template>
    <div :id="id" style="height:100%"></div>
</template>

<script>

import detectElementResize from 'detect-element-resize'
import { mapState,mapMutations ,mapGetters ,mapActions} from 'vuex'
import $ from 'jquery'
export default {
    name:"DrawPie",
    mounted(){
        let that = this;
        console.log(this.pie1);
        let main = document.getElementById(this.id);
        this.myPie = this.$echarts.init(main);
        if(this.id === 'main_pie_3'){
            this.drawPie(this.pie1);
        }else if(this.id === 'main_pie_4'){
            this.drawPie(this.pie2);
        }else{
            this.drawPie(this.pie3);
        }



            
        detectElementResize.addResizeListener(main,function(){
            if(that.timer)
                clearTimeout(that.timer);
            that.timer = setTimeout(()=>{
                that.myPie.resize();
            },200)
            
        })
    },
    methods:{
        drawPie(option){

            this.myPie.setOption(option);
        }
    },
    computed:{
        ...mapGetters('mainDataStore',{
            pie1:'currentTabContentPie1',
            pie2:'currentTabContentPie2',
            pie3:'currentTabContentPie3'
        })
    },
    watch:{
        option:{//监听option对象的改变
            handler(newVal){
                this.option = newVal;
            },
            deep:true//深度监听
        }
    },
    props:['id']
}
</script>