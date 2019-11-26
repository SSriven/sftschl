//行政执法
<template>
    <div :style="item_box_styleObj">
        <el-row :gutter="20" >
            <el-col>
                <xzzf-table-top></xzzf-table-top>
            </el-col>
        </el-row>
        <el-row :gutter="20" >
            <el-col :span="12">
                <el-table
                        border
                        height="100%"
                        empty-text=" "
                        ref="multipleTable"
                        :data="departmentTable"
                        tooltip-effect="dark"
                        style="width: 100%"
                        @selection-change="handleSelectionChange">
                    <el-table-column
                            type="selection"
                            width="55">
                    </el-table-column>
                    <el-table-column
                            type="index"
                            label="序号"
                            align="center"
                            width="120">
                    </el-table-column>
                    <el-table-column
                            prop="department"
                            label="执法部门"
                            min-width="120">
                    </el-table-column>
                </el-table>
            </el-col>
            <el-col :span="12">
            </el-col>
        </el-row>

    </div>
</template>

<script>

    import detectElementResize from 'detect-element-resize'
    import xzzfTableTop from '../table/comp_Table_top_xzzf.vue'
    import $ from 'jquery'
    export default {
        data(){
            return {

                item_box_styleObj:{height:(document.documentElement.clientHeight-156) + 'px'},

                departmentTable:[
                    // {department:}
                ],

            }
        },
        mounted(){
            let that = this;
            let main = document.getElementById('my_header');
            detectElementResize.addResizeListener(main,function(){
                let h = main.style.display;

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
        methods:{

            handleSelectionChange(){

            },

        },
        components:{
            xzzfTableTop
        },
        props:{

        }
    }
</script>

<style>


</style>