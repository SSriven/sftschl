<template>
    <div :id="id" style="height:100%"></div>
</template>

<script>

import detectElementResize from 'detect-element-resize'
import getMainData from "../../api/api_getMainData";
import { mapState,mapMutations ,mapGetters ,mapActions} from 'vuex'
export default {
    name:"DrawPie",
    data(){
        return{
            id:"echarts_pie"+Math.round(Math.random()*100000) + new Date().getTime()
        }
    },
    mounted(){
        let that = this;
        let main = document.getElementById(this.id);
        this.myPie = this.$echarts.init(main);
        switch (this.index) {
            case '1':this.judgeAndGetPieData(this,1);break;
            case '2':this.judgeAndGetPieData(this,2);break;
            case '3':this.judgeAndGetPieData(this,3);break;
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
        drawPie(data){
            this.myPie.setOption(data);
        },
        ...mapMutations('mainDataStore',{
            setTabContentPie_type1:'setTabContentPie_type1'
        }),
        judgeAndGetPieData(that,i){
            if(this.pieObj(i) === null){
                getMainData.getTabContentPie_type1DataByAPI( data => {
                    that.setTabContentPie_type1({data:data,index:i});
                    that.drawPie(data);
                    console.log(i + '' + 1);
                },i);
            }else{
                that.pieData = this.pieObj(i);
                that.drawPie(data);
                console.log(i + '' + 2);
            }
        }
    },
    computed:{
        ...mapGetters('mainDataStore',{
            pieObj:'currentTabContentPie'
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
    props:['index']
}
</script>