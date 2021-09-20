import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawer: false,
    contacts: [],
  },
  mutations: {
    toggleSideMenu(state) {
      state.drawer = !state.drawer;
    },
    addContact(state, contact) {
      state.contacts.push(contact);
    },
  },
  actions: {
    // アクションメソッドの引数には自動的にcontextオブジェクトが渡る
    // ここではcontext.commitメソッドだけを受け取る
    toggleSideMenu({ commit }) {
      commit('toggleSideMenu'); // commitメソッドは、mutationのメソッドを呼び出すために使う
    },

    // actionの第二引数で、コンポーネントの値を受け取ることができる
    addContact({ commit }, contact) {
      commit('addContact', contact);
    },
  },
  modules: {},
});
