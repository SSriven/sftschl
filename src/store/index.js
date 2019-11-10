import Vue from 'vue'
import Vuex from 'vuex'
import asideDataStore from './modules/store_asideDataStore.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status:1
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    asideDataStore
  }
})
