<template>
    <div :id="id" :key="key" style="height:100%"></div>
</template>

<script>

import detectElementResize from 'detect-element-resize'
import getMainData from "../../api/api_getMainData";
import { mapState,mapMutations ,mapGetters ,mapActions} from 'vuex';
let loading = null;
export default {
    name:"DrawPie",
    data(){
        return{
            timer:null,
            id:"echarts_pie"+Math.round(Math.random()*100000) + new Date().getTime(),
        }
    },
    mounted(){
        console.log("pie");
        let that = this;
        let main = document.getElementById(this.id);

        this.myPie = this.$echarts.init(main);
        switch (this.index) {
            case '1':this.judgeAndGetPieData(this,1);break;
            case '2':this.judgeAndGetPieData(this,2);break;
            case '3':this.judgeAndGetPieData(this,3);break;
        }
        detectElementResize.addResizeListener(main,function(){

            if(that.timer){
                // that.myPie.resize();
                clearTimeout(that.timer);
            }
            that.timer = setTimeout(()=>{
                that.myPie.resize();
            },100)
        });


    },
    methods:{
        drawPie(data){
            this.myPie.setOption(data);
        },
        ...mapMutations('mainDataStore',{
            setTabContentPie_type1:'setTabContentPie_type1',
        }),
        judgeAndGetPieData(that,i){
            if(this.pieObj(i) === null){
                getMainData.getTabContentPie_type1DataByAPI( data => {
                    that.setTabContentPie_type1({data:data,index:i});
                    that.drawPie(data);

                },i);
            }else{
                that.pieData = this.pieObj(i);
                that.drawPie(that.pieData);
            }
        }
    },
    computed:{
        ...mapGetters('mainDataStore',{
            pieObj:'currentTabContentPie',
        }),
        ...mapState('mainDataStore',{
            key:state => state.key
        })
    },
    watch:{
        key(){
            console.log("pie1");
        }
    },
    props:['index']
}
</script>