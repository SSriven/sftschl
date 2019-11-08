//主要内容组件
<template>
    <div class="main-content">
        <main-content-xiaqu></main-content-xiaqu>
    </div>
</template>

<script>

import MainContentXiaqu from './MainContent_xiaqu.vue'

export default {
    name:'MainContent',
    data(){
        return {
            
        }
    },
    components:{
        MainContentXiaqu
    },
    props:{
        
    }
}
</script>

<style scoped>
    
</style>