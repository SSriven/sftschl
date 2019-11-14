//主要内容组件
<template>
    <div class="main-content">
        <main-content-xiaqu v-if="mainType === '1'"></main-content-xiaqu>
        <main-content-shequ v-else-if="mainType === '4'"></main-content-shequ>
        <main-content-fxpjqy v-else-if="mainType === '2'"></main-content-fxpjqy>
        <main-content-xzzf v-else></main-content-xzzf>
    </div>
</template>

<script>

import MainContentXiaqu from './comp_MainContent_xiaqu.vue'
import MainContentShequ from './comp_MainContent_shequ.vue'
import MainContentFxpjqy from './comp_MainContent_fxpjqy.vue'
import MainContentXzzf from './comp_MainContent_xzzf.vue'

export default {
    name:'MainContent',
    data(){
        return {
            
        }
    },
    components:{
        MainContentXiaqu,MainContentShequ,MainContentFxpjqy,MainContentXzzf
    },
    props:{
        mainType:String
    }
}
</script>

<style scoped>
    
</style>