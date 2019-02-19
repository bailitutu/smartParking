import Vue from 'vue'
import  Vuex from 'vuex'

Vue.use(Vuex)

export default  new Vuex.Store({
  state:{
    showSearch:false,
    showMenu:false
  },
  mutations:{
    showSearch(state){
      return state.showSearch = true;
    },
    hideSearch(state){
      return state.showSearch = false;
    },
    showMenu(state){
      return state.showMenu = true;
    },
    hideMenu(state){
      return state.showMenu = false;
    }
  }

})

