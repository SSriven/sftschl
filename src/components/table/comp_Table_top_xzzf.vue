<template>
    <div style="height:88%" :id="id">
        <el-button type="primary"
                   size="mini"
                   icon="el-icon-plus"
                   style="float:left;margin-bottom:10px;"
                   @click="addColumn()"
                   title="添加">
        </el-button>
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
                    sortable
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
        <el-dialog title="上传文件" :visible.sync="dialogFormVisible" :modal="modal">
            <el-upload
                    class="upload-demo"
                    ref="upload"
                    action="#"
                    :on-remove="handleRemove"
                    :file-list="fileList"
                    :auto-upload="false">
                <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
            </el-upload>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="submitFile">上 传</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import getMainData from "../../api/api_getMainData";
    import { mapState,mapMutations ,mapGetters ,mapActions} from 'vuex'
    let loading;
    export default {
        name: "comp_Table_top_xxzf",
        data(){
          return{
              id:'xzzf_'+Math.random()*100000+new Date().getTime(),
              editIndex:'0',
              selectValue:'',
              options:[{value:'启动',label:'启动'},{value:'检查',label:'检查'},{value:'复查',label:'复查'},],

              editMarkIndex:'0',
              editMarkValue:'',

              editResultIndex:'0',
              selectResultValue:'',
              resultOptions:[{value:'合格',label:'合格'},{value:'不合格',label:'不合格'}],


              tableData: [],

              dialogFormVisible:false,
              modal:false,
              fileList:[]
          }
        },
        computed:{
            ...mapGetters('mainDataStore',{
                td:'currentTabContentTable_type3_top'
            })
        },
        mounted(){
            if(this.td === null){
                this.getTableData(this);
            }else{
                this.tableData = this.td;
            }
        },
        methods:{
            getTableData(that){
                loading = that.$loading.service({
                    target:document.getElementById(that.id),
                    text: '加载中',
                    spinner: 'el-icon-loading',
                    background: 'rgba(255, 255, 255, 0.7)'
                });
                getMainData.getTabContentTable_type3DataByAPI(data => {
                    // console.log(data);
                    that.tableData = data;
                    that.setTabContentTable_type3(data);
                    loading.close();
                })
            },
            /**
             * 添加一列
             */
            addColumn(){
                let arr = this.tableData;
                arr.push({
                    date: new Date().getUTCFullYear()+"-"+(new Date().getUTCMonth()+1)+"-"+new Date().getUTCDate(),
                    way: '启动',
                    result: '不合格',
                    mark: '',
                })
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
             * 打开备注编辑器
             * @param index
             */
            clickMark(index){
                this.editMarkIndex = index;
                this.editMarkValue = this.tableData[Number(index)].mark;
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
             * 打开上传文件对话框
             * @param index
             */
            uploadFile(index){
                this.dialogFormVisible = true;
            },

            /**
             * 删除该行
             * @param index
             */
            deleteRow(index){
                console.log("删除"+index);
                let arr = this.tableData;
                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    arr.splice(index,1);
                    this.tableData = arr;
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },

            /**
             * 删除要上传的文件
             */
            handleRemove(file) {
                console.log(file);
            },

            /**
             * 上传文件
             */
            submitFile(){
                this.$refs.upload.submit();
                // this.dialogFormVisible = false
            },

            ...mapMutations('mainDataStore',{
                setTabContentTable_type3:'setTabContentTable_type3'
            })
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