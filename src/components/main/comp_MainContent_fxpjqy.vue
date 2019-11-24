//风险评级企业
<template>
    <div :style="item_box_styleObj">
        <table-fxpjqy></table-fxpjqy>
    </div>
</template>

<script>

    import detectElementResize from 'detect-element-resize'
    import TableFxpjqy from '../table/comp_Table_fxpjqy.vue'
    import $ from 'jquery'
    export default {
        data(){
            return {
                item_box_styleObj:{height:(document.documentElement.clientHeight-156) + 'px'},

            }
        },
        mounted(){
            // var that = this;
            // var main = document.getElementById('my_header');
            // detectElementResize.addResizeListener(main,function(){
            //     var h = main.style.display;
            //
            //     if(h === 'none'){
            //         that.item_box_styleObj = {height:(document.documentElement.clientHeight-96) + 'px'}
            //         $("#main_gs").css({height:document.documentElement.clientHeight+'px'})
            //     }
            //
            //     else{
            //         $("#main_gs").css({height:document.documentElement.clientHeight-60+'px'})
            //         that.item_box_styleObj = {height:(document.documentElement.clientHeight-156) + 'px'}
            //     }
            //
            //
            // })
        },
        methods:{

        },
        components:{
            TableFxpjqy
        },
        props:{

        }
    }
</script>

<style>

</style>