import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import firebase from 'firebase';

Vue.config.productionTip = false;

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB_tWLEfde4xjn5oIDC6YaAWntag5E2FPI',
  authDomain: 'my-contacts-pj.firebaseapp.com',
  projectId: 'my-contacts-pj',
  storageBucket: 'my-contacts-pj.appspot.com',
  messagingSenderId: '992642792571',
  appId: '1:992642792571:web:ae357016d0133651d036de',
  measurementId: 'G-W0KL4G1LPN',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
