 //柱状图模板
<template>
    <div id="main_bar" style="height:100%"></div>
</template>

<script>

import detectElementResize from 'detect-element-resize'
import { mapState,mapMutations ,mapGetters ,mapActions} from 'vuex'

export default {
    name:'DrawBar',
    data(){
        return{
           timer:null
        }
    },
    mounted(){
        let main = document.getElementById('main_bar');

        this.myBar = this.$echarts.init(main);
        this.draw();
        let that = this;
            
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
        draw(){
            
            this.myBar.setOption(this.option);
            
        }
    },

}
</script>