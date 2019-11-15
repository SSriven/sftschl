import getMainData from "../../api/api_getMainData";
import TabPageClass from '../../Model/TabPageClass.js';

/**
 * 主体数据仓库
 */

// initial state
const state = {
    editableTabs: [],//标签页数组
    editableTabsValue:'0',//当前显示的标签页
    tabContentArr:[],//存储所有标签页的内容

};

// getters
const getters = {
    /**
     * 获取当前显示页面的内容对象
     * @param state
     * @returns {*}
     */
    currentTabContent(state){
        return state.tabContentArr[Number(state.editableTabsValue)]
    },
    /**
     * 通过index获取当前要显示的圆饼图的数据
     * @param state
     * @returns {Function}
     */
    currentTabContentPie:(state) => (index) => {
        // return state.tabContentArr;
        let returnObj = null;
        // console.log(state.tabContentArr,state.editableTabsValue);
        switch(index){
            case 1:returnObj = state.tabContentArr[Number(state.editableTabsValue)].pie_type1.pie1;break;
            case 2:returnObj = state.tabContentArr[Number(state.editableTabsValue)].pie_type1.pie2;break;
            case 3:returnObj = state.tabContentArr[Number(state.editableTabsValue)].pie_type1.pie3;break;
            default:returnObj = null;break;
        }
        return returnObj;
    },
    /**
     * 获取当前标签页中的柱状图数据
     * @param state
     * @returns {null}
     */
    currentTabContentBar(state){
        return state.tabContentArr[Number(state.editableTabsValue)].bar_type1;
    },
};
// actions
const actions = {
    /**
     * 异步请求
     * @param commit
     * @param obj
     */
    getEditableTabs({commit},obj){
        // console.log(title,id)
        getMainData.getEditableTabsByAPI(data => {
            commit('addEditableTabs', data);
        },obj)
    }
};

// mutations
const mutations = {
    /**
     * 删除一个tab标签页，更新store中的editableTabs
     * @param state
     * @param newEditableTabs
     */
    changeEditableTabs(state,newEditableTabs){
        state.editableTabs = newEditableTabs;
        // console.log(newEditableTabs)
    },
    /**
     * 显示newValue对应的tab标签页
     * @param state
     * @param newValue
     */
    changeEditableTabsValue(state,newValue){
        // console.log(newValue)
        state.editableTabsValue = newValue + '';

    },
    /**
     *
     * @param state
     * @param data
     */
    addEditableTabs(state,data){

        state.editableTabs.push(data);
        state.tabContentArr.push(new TabPageClass(data.title,data.id,data.type));
        console.log(state.editableTabs,state.tabContentArr);

    },
    /**
     * 设置标签页中的圆饼图的数据
     * @param state
     * @param obj
     */
    setTabContentPie_type1(state,obj){
        // console.log(obj);
        state.tabContentArr[Number(state.editableTabsValue)].setPie_type1(obj.data,obj.index);
        console.log(state.tabContentArr);
    },
    /**
     * 设置标签页中的柱状图的数据
     * @param state
     * @param data
     */
    setTabContentBar_type1(state,data){
        state.tabContentArr[Number(state.editableTabsValue)].setBar_type1(data);
    },

    setTabContentTable_type1(state,data){
        state.tabContentArr[Number(state.editableTabsValue)].setTableData_type1(data);
    }
};
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}