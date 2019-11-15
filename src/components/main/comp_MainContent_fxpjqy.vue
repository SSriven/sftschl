//风险评级企业
<template>
    <div :style="item_box_styleObj">
        风险评级企业
    </div>
</template>

<script>

    import detectElementResize from 'detect-element-resize'
    import $ from 'jquery'
    export default {
        data(){
            return {

                item_box_styleObj:{height:(document.documentElement.clientHeight-156) + 'px'}
            }
        },
        mounted(){
            var that = this;
            var main = document.getElementById('my_header');
            detectElementResize.addResizeListener(main,function(){
                var h = main.style.display;

                if(h === 'none'){
                    that.item_box_styleObj = {height:(document.documentElement.clientHeight-96) + 'px'}
                    $("#main_gs").css({height:document.documentElement.clientHeight+'px'})
                }

                else{
                    $("#main_gs").css({height:document.documentElement.clientHeight-60+'px'})
                    that.item_box_styleObj = {height:(document.documentElement.clientHeight-156) + 'px'}
                }


            })
        },
        components:{

        },
        props:{

        }
    }
</script>

<style>

</style>