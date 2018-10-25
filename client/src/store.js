import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin : false,
    currentuser : ''
  },
  mutations: {
    login(state,payload){
      state.islogin = payload
    }
  },
  actions: {
    login(state,payload){
      state.commit('login',payload)
    }
  }
})
