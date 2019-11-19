<template>
    <el-menu
            default-active="0"
            class="el-menu-vertical-demo"
            @select="handleSelect"

            @open="handleOpen"
            @close="handleClose">

        <el-menu-item v-for="item in navMenuArr" :index="item.index">
            <i :class="item.icon"></i>
            <span slot="title">{{item.title}}</span>
        </el-menu-item>
    </el-menu>
</template>

<script>
    import { mapState,mapMutations ,mapGetters ,mapActions} from 'vuex'
    export default {
        name: "NavMenu",
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            handleSelect(key,keyPath){
                console.log(key,keyPath);
            }
        },
        computed:{
            ...mapState('asideDataStore',{
                navMenuArr:state => state.navMenuArr
            })
        }
    }
</script>

<style>
.el-menu-vertical-demo{
    width: auto !important;
    transition: none !important;
    -webkit-transition: none !important;
}
</style>