/**
 * 封装主体内容
 */

import getMainDataApi from '../api/api_getMainData.js';

export default class TabPageClass{
    /**
     * 构造方法
     * @param tabName 页面名称
     * @param id 页面id
     * @param type 页面类型
     */
    constructor(tabName,id,type) {
        this.title = tabName;
        this.id = id;
        this.type = type;
        this.init();
    }

    /**
     * 初始化对象，根据id和type异步请求所需要的数据
     */
    init(){
        if(this.type === '1'){
            this.loadTypeIsOneData();
        }else if(this.type === '2'){

        }else if(this.type === '3'){

        }else{

        }
    }

    /**
     * 加载类型为1的页面s数据
     */
    loadTypeIsOneData(){
        let that = this;
        getMainDataApi.getTabContentBarDataByAPI(data =>{
            that.bar = data;
        });
        getMainDataApi.getTabContentPie1DataByAPI(data => {
            that.pie1 = data;
        });
        getMainDataApi.getTabContentPie2DataByAPI(data => {
            that.pie2 = data;
        });
        getMainDataApi.getTabContentPie3DataByAPI(data => {
            that.pie3 = data;
        })
    }

};

// new TabPage("123").say();
// console.log()

