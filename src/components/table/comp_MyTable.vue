<template>
  <el-table
    :data="tableData.row"
    style="width: 100%"
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
      :prop="item.prop"
      :label="item.label"
      sortable
      v-for="(item,index) in tableData.column"
      :key="index"
      align='center'>
    </el-table-column>
  </el-table>
</template>

<script>
  import getMainData from "../../api/api_getMainData";
  import { mapState,mapMutations ,mapGetters ,mapActions} from 'vuex'
  export default {
      name:"MyTable",
    data() {
      return {
        tableData:{row:null,column:null}
      }
    },

    mounted(){
        let that = this;
      getMainData.getTabContentTable_type1DataByAPI(data => {
        that.tableData = data;
        that.setTabContentTable_type1(data);
      })
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