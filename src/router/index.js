import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/pages/Home';
import Contacts from '@/pages/Contacts';
import ContactForm from '@/pages/ContactForm';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: Contacts,
  },
  {
    // ?をつけて、idはあってもいなくても良いというオプション扱いにする
    // contact_idなしの場合は、新規作成の扱いとするようにする
    path: '/contacts/:contact_id?/edit',
    name: 'Contact_edit',
    component: ContactForm,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
