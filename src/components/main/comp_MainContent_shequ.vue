//社区主体布局
<template>
    <div :style="item_box_styleObj">
        社区
    </div>
</template>

<script>


    export default {
        data(){
            return {

                item_box_styleObj:{height:(document.documentElement.clientHeight-156) + 'px'}
            }
        },
        mounted(){

        },
        components:{

        },
        props:{

        }
    }
</script>

<style>

</style>