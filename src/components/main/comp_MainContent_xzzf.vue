//行政执法
<template>
    <div :style="item_box_styleObj">
        <el-row :gutter="20" >
            <el-col>
                <el-table
                        empty-text=" "
                        :data="tableData"
                        style="width: 100%"
                        highlight-current-row
                        @row-click="clickRow"
                        border
                        height="100%">
                    <el-table-column
                            fixed
                            type="index"
                            label="序号"
                            align='center'>
                    </el-table-column>
                    <el-table-column
                            prop="way"
                            label="执法方式"
                            width="140"
                            align='center'
                            >
                        <template slot-scope="scope">
                            <div v-if="editIndex === scope.$index">
<!--                                <el-input size="mini" :value="value" v-model="value" @blur="hideEdit(scope.$index)"></el-input>-->
<!--                                <el-button type="success" icon="el-icon-check" size="mini" circle></el-button>-->
                                <el-select v-model="selectValue" size="mini" @change="changeEdit(scope.$index)">
                                    <el-option
                                            v-for="item in options"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                            </div>
                            <div v-else class="zfWayHover">
                                <el-tag :type="scope.row.way === '启动' ? 'success'
                                : (scope.row.way === '检查' ? 'warning' : 'danger')">
                                    {{scope.row.way}}
                                </el-tag>
                                <i style="display: none" class="el-icon-edit" @click.stop="editName(scope.$index)"></i>
                            </div>

                        </template>
                    </el-table-column>
                    <el-table-column
                            prop="date"
                            label="执法时间"
                            width="140"
                            align="center"
                            >
                        <template slot-scope="scope">
                            <i class="el-icon-time"></i>
                            <span style="margin-left: 10px">{{ scope.row.date }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                            prop="mark"
                            label="备注(问题)说明"
                            header-align="center"
                            align="left"
                            show-overflow-tooltip
                            min-width="400"
                            >
                        <template slot-scope="scope">
                            <div v-if="editMarkIndex === scope.$index">
                                <el-input size="mini" autofocus  v-model="editMarkValue" @blur="hideEdit(scope.$index)"></el-input>
                            </div>
                            <div v-else>
                                <el-tag type="info" @click.stop="clickMark(scope.$index)">
                                    {{scope.row.mark === '' ? '无' : scope.row.mark}}
                                </el-tag>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column
                            prop="result"
                            label="检查结果"
                            width="140"
                            align="center"
                            >
                        <template slot-scope="scope">
                            <div v-if="editResultIndex === scope.$index">
                                <!--                                <el-input size="mini" :value="value" v-model="value" @blur="hideEdit(scope.$index)"></el-input>-->
                                <!--                                <el-button type="success" icon="el-icon-check" size="mini" circle></el-button>-->
                                <el-select v-model="selectResultValue" size="mini" @change="changeResultEdit(scope.$index)">
                                    <el-option
                                            v-for="item in resultOptions"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                            </div>
                            <div v-else class="chaecResultHover">
                                <el-tag :type="scope.row.result === '合格' ? 'success' : 'danger'">
                                    {{scope.row.result}}
                                </el-tag>
                                <i style="display: none" class="el-icon-edit" @click.stop="editResult(scope.$index)"></i>
                            </div>

                        </template>
                    </el-table-column>
                    <el-table-column
                            prop="file"
                            label="上传文件"
                            width="100"
                            align="center"
                            >
                        <template slot-scope="scope">
                            <el-button type="primary" size="mini" icon="el-icon-upload" @click.stop="uploadFile(scope.$index)">
                            </el-button>
                        </template>
                    </el-table-column>
                    <el-table-column
                            label="操作"
                            align="center"
                            width="100"
                            >
                        <template slot-scope="scope">
<!--                            <el-button type="primary" icon="el-icon-delete"></el-button>-->
                            <el-button
                                    @click.native.stop="deleteRow(scope.$index)"
                                    type="danger"
                                    icon="el-icon-delete"
                                    size="small">
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-col>
        </el-row>
        <el-row :gutter="20" >
            <el-col :span="12">

            </el-col>
            <el-col :span="12">

            </el-col>
        </el-row>
    </div>
</template>

<script>

    import detectElementResize from 'detect-element-resize'
    import $ from 'jquery'
    export default {
        data(){
            return {
                value:'',
                flag:true,
                editIndex:'0',
                editMarkIndex:'0',
                editResultIndex:'0',
                selectValue:'',
                selectResultValue:'',
                editMarkValue:'',
                options:[{value:'启动',label:'启动'},{value:'检查',label:'检查'},{value:'复查',label:'复查'},],
                resultOptions:[{value:'合格',label:'合格'},{value:'不合格',label:'不合格'}],
                item_box_styleObj:{height:(document.documentElement.clientHeight-156) + 'px'},
                tableData: [{
                    date: '2016-05-03',
                    way: '检查',
                    result: '合格',
                    mark: '普陀区普陀区普陀区普陀区普陀区普陀区普陀区普陀区普陀区普陀区普陀区普陀区普陀区普陀区普陀区普陀区普陀区',
                    file: 200333
                }, {
                    date: '2016-05-02',
                    way: '启动',
                    result: '合格',
                    mark: '普陀区',
                    file: 200333
                }, {
                    date: '2016-05-02',
                    way: '复查',
                    result: '合格',
                    mark: '普陀区',
                    file: 200333
                }, {
                    date: '2016-05-02',
                    way: '复查',
                    result: '不合格',
                    mark: '普陀区',
                    file: 200333
                }, {
                    date: '2016-05-02',
                    way: '复查',
                    result: '不合格',
                    mark: '普陀区',
                    file: 200333
                }, {
                    date: '2016-05-02',
                    way: '复查',
                    result: '合格',
                    mark: '普陀区',
                    file: 200333
                }, {
                    date: '2016-05-02',
                    way: '复查',
                    result: '不合格',
                    mark: '普陀区',
                    file: 200333
                }]
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
            /**
             * 打开执法方式编辑器
             * @param index
             */
            editName(index){
                console.log(index);
                this.editIndex = index;
                this.selectValue = this.tableData[Number(index)].way;
                console.log(this.editIndex,this.selectValue)
            },
            /**
             * 打开检查结果编辑器
             * @param index
             */
            editResult(index){
                console.log(index);
                this.editResultIndex = index;
                this.selectResultValue = this.tableData[Number(index)].result;
                console.log(this.editResultIndex,this.selectResultValue)
            },
            /**
             * 打开备注编辑器
             * @param index
             */
            clickMark(index){
                this.editMarkIndex = index;
                this.editMarkValue = this.tableData[Number(index)].mark;
            },
            /**
             * 保存执法方式并关闭执法方式编辑器
             * @param index
             */
            changeEdit(index){
                console.log(this.selectValue);
                this.editIndex = '';
                let arr = this.tableData;
                arr[Number(index)].way = this.selectValue;
                this.selectValue = '';
            },
            /**
             * 保存检查结果并关闭检查结果编辑器
             * @param index
             */
            changeResultEdit(index){
                console.log(this.selectResultValue);
                this.editResultIndex = '';
                let arr = this.tableData;
                arr[Number(index)].result = this.selectResultValue;
                this.selectResultValue = '';
            },
            /**
             * 保存备注并关闭备注编辑器
             * @param index
             */
            hideEdit(index){
                this.editMarkIndex = '';
                let arr = this.tableData;
                arr[Number(index)].mark = this.editMarkValue;
                this.editMarkValue = '';
            },
            /**
             * 上传文件
             * @param index
             */
            uploadFile(index){
                console.log("上传文件"+index);
            },
            /**
             * 删除该行
             * @param index
             */
            deleteRow(index){
                console.log("删除"+index);
            },
            /**
             * 点击该行
             * @param row
             * @param column
             * @param e
             */
            clickRow(row,column,e){
                console.log('单机行');
            },
        },
        components:{

        },
        props:{

        }
    }
</script>

<style>

    .el-icon-edit:hover{
        color:#5cb6ff
    }
    .zfWayHover:hover i{
        display: inline-block !important;
    }
    .chaecResultHover:hover i{
        display: inline-block !important;
    }
</style>