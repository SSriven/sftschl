import getMainData from "../../api/api_getMainData";

/**
 * 主体数据仓库
 */

// initial state
const state = {
    editableTabs: [],//标签页数组
    editableTabsValue:'0',//当前显示的标签页
};

// getters
const getters = {
    // eTabsValue(state){
    //     return state.editableTabsValue + ''
    // }
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

    }
};
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}