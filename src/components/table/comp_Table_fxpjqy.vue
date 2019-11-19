<template>
    <div>
    <el-table
            height="550"
            stripe
            ref="filterTable"
            :data="tableData.row"
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
                        disable-transitions>{{scope.row.risk}}</el-tag>
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
                :filter-multiple="filter_multiple"
                width="140"
                :filters="[
                                {text:'有',value:'1'},
                                {text:'无',value:'0'},
                            ]"
                :filter-method="filterHandler">
        </el-table-column>
        <el-table-column
                prop="seriouseDangerSourse"
                label="重大危险源"
                sortable
                align='center'
                :filter-multiple="filter_multiple"
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
                :filter-multiple="filter_multiple"
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
                :filter-multiple="filter_multiple"
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
                :filter-multiple="filter_multiple"
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
                :filter-multiple="filter_multiple"
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
    </div>
</template>

<script>
    export default {
        name: "comp_Table_fxpjqy",
        data(){
            return{
                currentPage3: 4,
                filter_multiple:true,
                tableData : {
                    row: [{
                        enterpriseName: '企业A',
                        industry: '餐饮业',
                        township: '新建中心区',
                        riskLevel: 1,
                        risk: '低风险级',
                        dangerNum: 20,
                        seriousDangerNum: 1,
                        seriouseDangerSourse: '否',
                        involveDangerEnterprise: '否',
                        hazardousChemicalProcess: '否',
                        lawEnforcement: '否',
                        confinedSpace: '无',
                        dustExplosion: '无'
                    }, {
                        enterpriseName: '企业B',
                        industry: '餐饮业',
                        township: '新建中心区',
                        riskLevel: 2,
                        risk: '一般风险级',
                        dangerNum: 20,
                        seriousDangerNum: 1,
                        seriouseDangerSourse: '否',
                        involveDangerEnterprise: '否',
                        hazardousChemicalProcess: '否',
                        lawEnforcement: '否',
                        confinedSpace: '无',
                        dustExplosion: '无'
                    }, {
                        enterpriseName: '企业C',
                        industry: '餐饮业',
                        township: '新建中心区',
                        riskLevel: 3,
                        risk: '较大风险级',
                        dangerNum: 20,
                        seriousDangerNum: 1,
                        seriouseDangerSourse: '否',
                        involveDangerEnterprise: '否',
                        hazardousChemicalProcess: '否',
                        lawEnforcement: '否',
                        confinedSpace: '无',
                        dustExplosion: '无'
                    }, {
                        enterpriseName: '企业D',
                        industry: '餐饮业',
                        township: '新建中心区',
                        riskLevel: 4,
                        risk: '重大风险级',
                        dangerNum: 20,
                        seriousDangerNum: 1,
                        seriouseDangerSourse: '否',
                        involveDangerEnterprise: '否',
                        hazardousChemicalProcess: '否',
                        lawEnforcement: '否',
                        confinedSpace: '无',
                        dustExplosion: '无'
                    }, {
                        enterpriseName: '企业E',
                        industry: '餐饮业',
                        township: '新建中心区',
                        riskLevel: 2,
                        risk: '一般风险级',
                        dangerNum: 20,
                        seriousDangerNum: 1,
                        seriouseDangerSourse: '否',
                        involveDangerEnterprise: '否',
                        hazardousChemicalProcess: '否',
                        lawEnforcement: '否',
                        confinedSpace: '无',
                        dustExplosion: '无'
                    }, {
                        enterpriseName: '企业F',
                        industry: '餐饮业',
                        township: '新建中心区',
                        riskLevel: 4,
                        risk: '重大风险级',
                        dangerNum: 20,
                        seriousDangerNum: 1,
                        seriouseDangerSourse: '否',
                        involveDangerEnterprise: '否',
                        hazardousChemicalProcess: '否',
                        lawEnforcement: '否',
                        confinedSpace: '无',
                        dustExplosion: '无'
                    }, {
                        enterpriseName: '企业G',
                        industry: '餐饮业',
                        township: '新建中心区',
                        riskLevel: 3,
                        risk: '较大风险级',
                        dangerNum: 20,
                        seriousDangerNum: 1,
                        seriouseDangerSourse: '否',
                        involveDangerEnterprise: '否',
                        hazardousChemicalProcess: '否',
                        lawEnforcement: '否',
                        confinedSpace: '无',
                        dustExplosion: '无'
                    }, {
                        enterpriseName: '企业G',
                        industry: '餐饮业',
                        township: '新建中心区',
                        riskLevel: 1,
                        risk: '低风险级',
                        dangerNum: 20,
                        seriousDangerNum: 1,
                        seriouseDangerSourse: '否',
                        involveDangerEnterprise: '否',
                        hazardousChemicalProcess: '否',
                        lawEnforcement: '否',
                        confinedSpace: '无',
                        dustExplosion: '无'
                    }, {
                        enterpriseName: '企业H',
                        industry: '餐饮业',
                        township: '新建中心区',
                        riskLevel: 1,
                        risk: '一般风险级',
                        dangerNum: 20,
                        seriousDangerNum: 1,
                        seriouseDangerSourse: '否',
                        involveDangerEnterprise: '否',
                        hazardousChemicalProcess: '否',
                        lawEnforcement: '否',
                        confinedSpace: '无',
                        dustExplosion: '无'
                    }, {
                        enterpriseName: '企业I',
                        industry: '餐饮业',
                        township: '新建中心区',
                        riskLevel: 1,
                        risk: '一般风险级',
                        dangerNum: 20,
                        seriousDangerNum: 1,
                        seriouseDangerSourse: '否',
                        involveDangerEnterprise: '否',
                        hazardousChemicalProcess: '否',
                        lawEnforcement: '否',
                        confinedSpace: '无',
                        dustExplosion: '无'
                    },]
                }
            }
        },
        methods:{
            resetDateFilter() {
                this.$refs.filterTable.clearFilter('date');
            },
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
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            }
        }
    }
</script>

<style scoped>

</style>