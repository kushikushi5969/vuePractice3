import Vue from 'vue';
import Vuex from 'vuex';
import count from './modules/count';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    message: ""
  },
  getters: {
    message: state => state.message
  },
  // stateの変更はmutationsだけで行う。追跡しやすや・バグ防止のため
  mutations: {
    updateMessage(state, newMessage) {
      state.message = newMessage;
    }
  },
  actions: {
    updateMessage({ commit }, newMessage) {
      commit("updateMessage",newMessage);
    }
  },
  modules: {
    count
  }
})
