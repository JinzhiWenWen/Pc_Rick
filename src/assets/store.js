import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
  state:{
    userMes:{},//用户信息
  },
  mutations:{
    userMes_fn(state,opt){
      state.userMes=opt;
    }
  },
  getters:{

  },
  actions:{

  }
});
export default store;
