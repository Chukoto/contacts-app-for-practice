import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawer: false,
  },
  mutations: {
    toggleSideMenu(state) {
      state.drawer = !state.drawer;
    },
  },
  actions: {
    // アクションメソッドの引数には自動的にcontextオブジェクトが渡る
    // ここではcontext.commitメソッドだけを受け取る
    toggleSideMenu({ commit }) {
      commit('toggleSideMenu'); // commitメソッドは、mutationのメソッドを呼び出すために使う
    },
  },
  modules: {},
});
