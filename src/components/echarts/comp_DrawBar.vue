 //柱状图模板
<template>
    <div :id="id" style="height:100%"></div>
</template>

<script>

import detectElementResize from 'detect-element-resize'
import getMainData from "../../api/api_getMainData";
import { mapState,mapMutations ,mapGetters ,mapActions} from 'vuex'

export default {
    name:'DrawBar',
    data(){
        return{
           timer:null,
            id:"echarts_bar"+Math.round(Math.random()*100000) + new Date().getTime()
        }
    },
    mounted(){
        let main = document.getElementById(this.id);

        this.myBar = this.$echarts.init(main);
        let that = this;
        if(this.option === null){
            getMainData.getTabContentBarDataByAPI(data => {
                that.setTabContentBar_type1(data);
                that.draw(data);
            })
        }else{
            this.draw(this.option);
        }


            
        detectElementResize.addResizeListener(main,function(){
            if(that.timer)
                clearTimeout(that.timer);
            that.timer = setTimeout(()=>{
                that.myBar.resize();
            },200)
            
        })
    },
    computed:{
        ...mapGetters('mainDataStore',{
            option:'currentTabContentBar'
        })
    },
    methods:{
        draw(data){
            
            this.myBar.setOption(data);
            
        },

        ...mapMutations('mainDataStore',{
            setTabContentBar_type1:'setTabContentBar_type1'
        })
    },

}
</script>