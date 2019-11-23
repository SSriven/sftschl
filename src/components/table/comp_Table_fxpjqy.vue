<template>
    <div>
    <el-table
            empty-text=" "
            class="table_fxjqy"
            :id="id"
            height="550"

            ref="filterTable"
            :data="tableData"
            style="width: 100%">
        <el-table-column
                fixed
                type="index"
                label="序号"
                align='center'>
        </el-table-column>
        <el-table-column
                prop="enterpriseName"
                label="企业名称"
                sortable
                align='center'
                :filter-multiple="filter_multiple"
                width="140"
                :filters="[
                                {text:'企业A',value:'企业A'},
                                {text:'企业B',value:'企业B'},
                                {text:'企业C',value:'企业C'},
                                {text:'企业D',value:'企业D'},
                                {text:'企业E',value:'企业E'},
                                {text:'企业F',value:'企业F'},
                                {text:'企业G',value:'企业G'},
                            ]"
                :filter-method="filterHandler">
        </el-table-column>
        <el-table-column
                prop="industry"
                label="所属行业"
                sortable
                align='center'
                :filter-multiple="filter_multiple"
                width="140"
                :filters="[
                                {text:'餐饮业',value:'餐饮业'},
                            ]"
                :filter-method="filterHandler">
        </el-table-column>
        <el-table-column
                prop="township"
                label="乡镇街道"
                sortable
                align='center'
                :filter-multiple="filter_multiple"
                width="140"
                :filters="[
                                {text:'新建中心区',value:'新建中心区'},
                            ]"
                :filter-method="filterHandler">
        </el-table-column>
        <el-table-column
                prop="riskLevel"
                label="风险级别"
                sortable
                align='center'
                :filter-multiple="filter_multiple"
                width="140"
                :filters="[
                                {text:'低风险级',value:'1'},
                                {text:'一般风险级',value:'2'},
                                {text:'较大风险级',value:'3'},
                                {text:'重大风险级',value:'4'},
                            ]"
                :filter-method="filterHandlerRisk">
            <template slot-scope="scope">
                <el-tag
                        :type="scope.row.riskLevel === 1 ? 'success' : scope.row.riskLevel === 2 ? 'info' : scope.row.riskLevel === 3 ?
                            'warning' : 'danger'"
                        disable-transitions>{{scope.row.riskLevel === 1
                    ? '低风险级' : scope.row.riskLevel === 2
                    ? '一般风险级' : scope.row.riskLevel === 3
                    ? '较大风险级' : '重大风险级'}}</el-tag>
            </template>
        </el-table-column>
        <el-table-column
                prop="dangerNum"
                label="隐患数目"
                sortable
                align='center'
                width="140">
        </el-table-column>
        <el-table-column
                prop="seriousDangerNum"
                label="重大隐患数目"
                sortable
                align='center'
                :filter-multiple="filter_multiple_false"
                width="140"
                :filters="[
                                {text:'有',value:'1'},
                                {text:'无',value:'0'},
                            ]"
                :filter-method="filterSerousDanger">
        </el-table-column>
        <el-table-column
                prop="seriouseDangerSourse"
                label="重大危险源"
                sortable
                align='center'
                :filter-multiple="filter_multiple_false"
                width="140"
                :filters="[
                                {text:'是',value:'是'},
                                {text:'否',value:'否'},
                            ]"
                :filter-method="filterHandler">
        </el-table-column>
        <el-table-column
                prop="involveDangerEnterprise"
                label="涉危企业"
                sortable
                align='center'
                :filter-multiple="filter_multiple_false"
                width="140"
                :filters="[
                                {text:'是',value:'是'},
                                {text:'否',value:'否'},
                            ]"
                :filter-method="filterHandler">
        </el-table-column>
        <el-table-column
                prop="hazardousChemicalProcess"
                label="危险化工工艺"
                sortable
                align='center'
                :filter-multiple="filter_multiple_false"
                width="140"
                :filters="[
                                {text:'是',value:'是'},
                                {text:'否',value:'否'},
                            ]"
                :filter-method="filterHandler">
        </el-table-column>
        <el-table-column
                prop="lawEnforcement"
                label="是否已执法"
                sortable
                align='center'
                width="140">
        </el-table-column>
        <el-table-column
                prop="confinedSpace"
                label="受限空间"
                sortable
                align='center'
                :filter-multiple="filter_multiple_false"
                width="140"
                :filters="[
                                {text:'有',value:'有'},
                                {text:'无',value:'无'},
                            ]"
                :filter-method="filterHandler">
        </el-table-column>
        <el-table-column
                prop="dustExplosion"
                label="粉尘爆炸"
                sortable
                align='center'
                :filter-multiple="filter_multiple_false"
                width="140"
                :filters="[
                                {text:'有',value:'有'},
                                {text:'无',value:'无'},
                            ]"
                :filter-method="filterHandler">
        </el-table-column>
    </el-table>
        <br>
        <el-pagination
                background
                hide-on-single-page
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage"
                :page-size="15"
                layout="total,prev, pager, next, jumper"
                :total="total">
        </el-pagination>
        <el-button type="danger" @click="clearFilter"
                   title="清除所有筛选条件"
                   icon="el-icon-refresh"
                   circle
                   style="position: absolute;right:0;bottom:0;">
        </el-button>
    </div>
</template>

<script>
    import getMainData from "../../api/api_getMainData";
    import { mapState,mapMutations ,mapGetters ,mapActions} from 'vuex'
    let loading;
    export default {
        name: "comp_Table_fxpjqy",

        data(){
            return{
                id:'table_fxpjqy_'+Math.random()*100000+new Date().getTime(),
                currentPage: 1,
                filter_multiple:true,
                filter_multiple_false:false,
                tableData:[],
                total:0
            }
        },

        computed:{
            ...mapGetters("mainDataStore",{
                tableData_type2:'currentTabContentTable_type2_tableData',
                tableTotal:'currentTabContentTable_type2_total',
                currentPageIndex:'currentTabContentTable_type2_currentPage'
            })
        },
        mounted(){
            let that = this;
            if(this.tableData_type2 === null){
                this.getTableData(this,1);
            }else{
                that.tableData = that.tableData_type2;
                that.total = that.tableTotal;
                that.currentPage = that.currentPageIndex;
                // that.loading = false;
            }


        },
        methods:{
            getTableData(that,currentPage){
                loading = that.$loading.service({
                    target:document.getElementById(that.id),
                    text: '加载中',
                    spinner: 'el-icon-loading',
                    background: 'rgba(255, 255, 255, 0.7)'
                });
                getMainData.getTabContentTable_type2DataByAPI(data => {
                    console.log(data);
                    that.tableData = data.tableData;
                    that.currentPage = currentPage;
                    data.currentPage = currentPage;
                    that.setTabContentTable_type2(data);
                    that.total = data.total;
                    loading.close();
                })
            },
            clearFilter() {
                this.$refs.filterTable.clearFilter();
            },
            filterHandler(value, row, column) {
                const property = column['property'];
                return row[property] === value

            },
            /**
             * 风险等级筛选条件
             * @param value
             * @param row
             * @param column
             * @returns {boolean}
             */
            filterHandlerRisk(value, row, column) {
                const property = column['property'];
                // console.log(row[property],value);
                return Number(row[property]) === Number(value)

            },
            /**
             * 重大隐患数目筛选条件
             * @param value
             * @param row
             * @param column
             * @returns {boolean}
             */
            filterSerousDanger(value,row,column){
                const property = column['property'];
                let value1 = Number(value);
                if(value1){
                    return Number(row[property]) > 0;
                }else{
                    return Number(row[property]) <= 0;
                }

            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            /**
             * 选择页码
             * @param val
             */
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
                this.getTableData(this,val);
            },
            ...mapMutations('mainDataStore',{
                setTabContentTable_type2:'setTabContentTable_type2'
            })
        }
    }
</script>

<style scoped>

</style>