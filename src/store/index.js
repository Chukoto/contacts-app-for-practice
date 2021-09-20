import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    login_user: null,
    drawer: false,
    contacts: [],
  },
  mutations: {
    setLoginUser(state, user) {
      state.login_user = user;
    },
    deleteLoginUser(state) {
      state.login_user = null;
    },
    toggleSideMenu(state) {
      state.drawer = !state.drawer;
    },
    addContact(state, contact) {
      state.contacts.push(contact);
    },
  },
  actions: {
    setLoginUser({ commit }, user) {
      commit('setLoginUser', user);
    },
    deleteLoginUser({ commit }) {
      commit('deleteLoginUser');
    },
    login() {
      // Google認証のプロバイダを利用する際に必要
      const google_auth_provider = new firebase.auth.GoogleAuthProvider();
      // Googleの認証画面にリダイレクトし、ログイン後、ログインユーザーの情報を取得
      firebase.auth().signInWithRedirect(google_auth_provider);
    },
    // アクションメソッドの引数には自動的にcontextオブジェクトが渡る
    // ここではcontext.commitメソッドだけを受け取る
    toggleSideMenu({ commit }) {
      commit('toggleSideMenu'); // commitメソッドは、mutationのメソッドを呼び出すために使う
    },
    logout() {
      firebase.auth().signOut();
    },

    // actionの第二引数で、コンポーネントの値を受け取ることができる
    addContact({ commit }, contact) {
      commit('addContact', contact);
    },
  },
  modules: {},
});
