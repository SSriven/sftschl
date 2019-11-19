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
    currentTab:'0',//当前显示的树状折叠菜单
  navMenuArr:[
    {index:'0',title:'角色管理',icon:'el-icon-setting'},
    {index:'1',title:'用户管理',icon:'el-icon-user-solid'},
  ]
};

// getters
const getters = {

};
// actions
const actions = {
  /**
   * 获取侧边栏tab标签页的标题
   * @param commit
   */
  getTabList ({ commit }) {
    getAsideData.getTabList(tabList => {
      commit('setTabList', tabList)
    })
  },
  /**
   * 获取侧边栏树状折叠菜单数据
   * @param commit
   * @param currentTab
   */
  getMenuTree ({ commit },currentTab) {
    getAsideData.getMenuTree((menuTree) => {
      commit('setMenuTree', menuTree)
    },currentTab)
  }
};

// mutations
const mutations = {
  /**
   * 显示currentTab所对应的菜单
   * @param state
   * @param currentTab
   */
  changeCurrentTab(state,currentTab){
    state.currentTab = currentTab;
  },
  /**
   * 更新tabList
   * @param state
   * @param newTabList
   */
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