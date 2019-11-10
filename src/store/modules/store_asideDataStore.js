/**
 * 侧边栏数据仓库
 */
import getAsideData from '../../api/api_getAsideData.js'
// initial state
const state = {
    //侧边栏tab栏
    tabList:[],
      //侧边栏折叠菜单
    menuTree:[],
    currentTab:1
};

// getters
const getters = {
  // menuTreeData:state =>{
  //   return state.currentTab == 1 ? state.menuTrue1 : (state.currentTab == 2 ? state.menuTrue2 : state.menuTrue3)
  // }
};
// actions
const actions = {
  getTabList ({ commit }) {
    getAsideData.getTabList(tabList => {
      commit('setTabList', tabList)
    })
  },
  getMenuTree ({ commit },currentTab) {
    getAsideData.getMenuTree((menuTree) => {
      commit('setMenuTree', menuTree)
    },currentTab)
  }
};

// mutations
const mutations = {
  changeCurrentTab(state,currentTab){
    state.currentTab = currentTab;
  },
  changeTabList(state,newTabList){
      state.tabList = newTabList
  },
  /**
   * 获取侧边栏tab数据
   * @param {*} state 
   * @param {*} tabList 
   */
  setTabList (state, tabList) {
    state.tabList = tabList
  },
  /**
   * 获取侧边栏折叠菜单数据
   * @param {*} state 
   * @param {*} menuTree 
   */
  setMenuTree (state, menuTree) {
    state.menuTree = menuTree
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}