import getMainData from "../../api/api_getMainData";
import TabPageClass from '../../Model/TabPageClass.js';

/**
 * 主体数据仓库
 */

// initial state
const state = {
    editableTabs: [],//标签页数组
    editableTabsValue:'0',//当前显示的标签页
    tabContentArr:[],

};

// getters
const getters = {
    currentTabContent(state){
        return state.tabContentArr[Number(state.editableTabsValue)]
    },
    currentTabContentPie1(state){
        console.log(1,state.tabContentArr[Number(state.editableTabsValue)]);
        return state.tabContentArr[Number(state.editableTabsValue)].pie1
    },
    currentTabContentPie2(state){
        return state.tabContentArr[Number(state.editableTabsValue)].pie2
    },
    currentTabContentPie3(state){
        return state.tabContentArr[Number(state.editableTabsValue)].pie3
    },
    currentTabContentBar(state){
        return state.tabContentArr[Number(state.editableTabsValue)].bar
    },
};
// actions
const actions = {
    getEditableTabs({commit},obj){
        // console.log(title,id)
        getMainData.getEditableTabsByAPI(data => {
            commit('addEditableTabs', data);
        },obj)
    }
};

// mutations
const mutations = {
    changeEditableTabs(state,newEditableTabs){
        state.editableTabs = newEditableTabs;
        // console.log(newEditableTabs)
    },
    changeEditableTabsValue(state,newValue){
        // console.log(newValue)
        state.editableTabsValue = newValue + '';

    },
    addEditableTabs(state,data){
        state.editableTabs.push(data);
        state.tabContentArr.push(new TabPageClass(data.title,data.id,data.type));
        console.log(state.tabContentArr)
    }
};
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}