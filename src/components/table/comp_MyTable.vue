<template>
  <div>
<!--  <el-select v-model="value" clearable filterable placeholder="请选择" size="mini">-->
<!--    <el-option-->
<!--            v-for="(item,index) in tableData.row"-->
<!--            :key="index"-->
<!--            :label="item.enterprise"-->
<!--            :value="index">-->
<!--    </el-option>-->
<!--  </el-select>-->
  <el-table
    :data="tableData"
    style="width: 100%;"
    height="300"
    border
    highlight-current-row
    @row-click="handleCurrentChange"
    :default-sort = "{prop: 'date', order: 'descending'}"
    >
    <el-table-column
      type="index"

      label="序号"
      align='center'>
    </el-table-column>
    <el-table-column
      prop="riskValue"
      label="风险值"
      sortable
      key="riskValue"
      align='center'>
    </el-table-column>
    <el-table-column
            prop="enterprise"
            label="企业"
            sortable
            key="enterprise"
            align='center'>
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
  import getMainData from "../../api/api_getMainData";
  import { mapState,mapMutations ,mapGetters ,mapActions} from 'vuex'
  export default {
      name:"MyTable",
    data() {
      return {
        tableData:[],
        value:''
      }
    },

    computed:{
        ...mapGetters('mainDataStore',{
          tableData_type1:'currentTabContentTable_type1'
        })
    },

    mounted(){
        let that = this;
        if(this.tableData_type1 === null){
          getMainData.getTabContentTable_type1DataByAPI(data => {
            that.tableData = data;
            that.setTabContentTable_type1(data);
          });
        }else{
          that.tableData = that.tableData_type1;
        }

    },
    methods: {
      formatter(row, column) {
        return row.address;
      },
      handleCurrentChange(row,colum,e){
          console.log(row,colum,e);
      },
      ...mapMutations('mainDataStore',{
        setTabContentTable_type1:'setTabContentTable_type1'
      })
    }
  }
</script>

<style>
.el-table .cell{
    white-space:nowrap !important;
    font-size:13px;
}
.el-table th, .el-table tr{
    cursor: pointer;
}
</style>