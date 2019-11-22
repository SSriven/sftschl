<template>
    <div>
    <el-table
            height="550"
            stripe
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
                prop="risk"
                label="风险级别"
                sortable
                align='center'
                :filter-multiple="filter_multiple"
                width="140"
                :filters="[
                                {text:'一般风险级',value:'一般风险级'},
                                {text:'低风险级',value:'低风险级'},
                                {text:'较大风险级',value:'较大风险级'},
                                {text:'重大风险级',value:'重大风险级'},
                            ]"
                :filter-method="filterHandler">
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
                :current-page.sync="currentPage3"
                :page-size="10"
                layout="total,prev, pager, next, jumper"
                :total="1000">
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
    export default {
        name: "comp_Table_fxpjqy",
        data(){
            return{
                currentPage3: 4,
                filter_multiple:true,
                filter_multiple_false:false,
                tableData:[],
            }
        },

        computed:{
            ...mapGetters("mainDataStore",{
                tableData_type2:'currentTabContentTable_type2'
            })
        },
        mounted(){
            let that = this;
            if(this.tableData_type2 === null){
                getMainData.getTabContentTable_type2DataByAPI(data => {
                    that.tableData = data;
                    that.setTabContentTable_type2(data);
                })
            }else{
                that.tableData = that.tableData_type2;
            }


        },
        methods:{
            clearFilter() {
                this.$refs.filterTable.clearFilter();
            },
            formatter(row, column) {
                return row.address;
            },
            filterHandler(value, row, column) {
                const property = column['property'];
                return row[property] === value

            },
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
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            },
            ...mapMutations('mainDataStore',{
                setTabContentTable_type2:'setTabContentTable_type2'
            })
        }
    }
</script>

<style scoped>

</style>