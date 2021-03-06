/**
 * 封装主体内容
 */


export default class TabPageClass{
    /**
     * 构造方法
     * @param tabName 页面名称
     * @param id 页面id
     * @param type 页面类型
     */
    constructor(tabName,id,type) {
        this.title = tabName;//标签页的title
        this.id = id;//标签页id
        this.type = type;//标签页类型
        this.pie_type1 = {pie1:null,pie2:null,pie3:null};//标签页中的圆饼图数据
        this.bar_type1 = null;//标签页中的柱状图数据
        this.amap_type1 = null;//标签页中地图的数据
        this.tableData_type1 = null;//type1标签页下的表格
        this.tableData_type2 = {total:0,tableData:null,currentPage:1};//type2标签页下的表格
        this.tableData_type3 = null;//type3标签页下的表格
    }


    /**
     * 设置pie属性
     * @param data
     * @param index
     */
    setPie_type1(data,index){

        switch(index){
            case 1:this.pie_type1.pie1 = data;break;
            case 2:this.pie_type1.pie2 = data;break;
            case 3:this.pie_type1.pie3 = data;break;
            default:this.pie_type1.pie1 = this.pie_type1.pie2 = this.pie_type1.pie3 = null;
        }

    }

    /**
     * 设置bar属性
     * @param bar
     */
    setBar_type1(bar){
        this.bar_type1 = bar;
    }

    /**
     * 设置地图数据
     * @param amap
     */
    setAmap_type1(amap){
        this.amap_type1 = amap;
    }

    /**
     * 设置type1表格对象
     * @param tableData
     */
    setTableData_type1(tableData){
        this.tableData_type1 = tableData;
    }

    /**
     * 设置type2表格数据
     * @param tableData
     */
    setTableData_type2(tableData){
        this.tableData_type2 = tableData;
    }

    /**
     * 设置type3表格数据
     * @param tableData
     */
    setTableData_type3(tableData){
        this.tableData_type3 = tableData;
    }
};


