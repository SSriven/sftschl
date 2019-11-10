<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    height="300"
    border
    highlight-current-row
    @row-click="handleCurrentChange"
    :default-sort = "{prop: 'date', order: 'descending'}"
    >
    <el-table-column
      type="index"
      style="width: 10%;height:30px;"
      label="序号"
      align='center'>
    </el-table-column>
    <el-table-column
      prop="date"
      label="风险值"
      sortable
      style="width: 30%;height:30px;"
      align='center'>
    </el-table-column>
    <el-table-column
      prop="name"
      label="企业"
      sortable
      style="width: 30%;height:30px;"
      align='center'>
    </el-table-column>
    <el-table-column
      prop="address"
      label="第三方"
      style="width: 30%;height:30px;"
      sortable
      :formatter="formatter"
      align='center'>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
      name:"MyTable",
    data() {
      return {
        tableData: [{
            id:"1",
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
    methods: {
      formatter(row, column) {
        return row.address;
      },
      handleCurrentChange(row,colum,e){
          console.log(row,colum,e);
      }
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