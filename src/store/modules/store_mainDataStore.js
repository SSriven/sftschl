import getMainData from "../../api/api_getMainData";

/**
 * 主体数据仓库
 */

// initial state
const state = {
    editableTabs: [],
    editableTabsValue:'0'
};

// getters
const getters = {
    // eTabsValue(state){
    //     return state.editableTabsValue + ''
    // }
};
// actions
const actions = {
    getEditableTabs({commit},title){
        getMainData.getEditableTabsByAPI(data => {
            commit('addEditableTabs', data);
        },title)
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