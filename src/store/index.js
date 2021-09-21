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
    addContact(state, { id, contact }) {
      contact.id = id;
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

    fetchContacts({ getters, commit }) {
      firebase
        .firestore()
        .collection(`users/${getters.uid}/contacts`)
        .get()
        .then((snapshot) => {
          // firebase snapshotにデータが格納されている
          snapshot.forEach((doc) =>
            commit('addContact', { id: doc.id, contact: doc.data() })
          );
        });
    },

    // actionの第二引数で、コンポーネントの値を受け取ることができる
    // actionの引数に渡ってくるcontextオブジェクトには、gettersも含まれている
    addContact({ getters, commit }, contact) {
      if (getters.uid) {
        firebase
          .firestore()
          .collection(`users/${getters.uid}/contacts`)
          .add(contact)
          // addメソッドのコールバック関数には、document referencesのオブジェクトが渡ってくる
          // それをdoc変数で受け取っている
          .then((doc) => {
            commit('addContact', { id: doc.id, contact });
          });
      }
    },
  },
  getters: {
    userName: (state) => (state.login_user ? state.login_user.displayName : ''),
    photoURL: (state) => (state.login_user ? state.login_user.photoURL : ''),
    uid: (state) => (state.login_user ? state.login_user.uid : null),
    getContactById: (state) =>
      // 内側の関数 ＝ getterを呼び出す時点でidを指定して、IDとマッチしたものを使用するということになる
      (id) => state.contacts.find((contact) => contact.id === id),
  },
  modules: {},
});
