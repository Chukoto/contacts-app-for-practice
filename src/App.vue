<template>
  <v-app>
    <Header />
    <SideNav />
    <v-main>
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Header from '@/global/Header';
import Footer from '@/global/Footer';
import SideNav from '@/global/SideNav';

export default {
  name: 'App',

  components: {
    Header,
    Footer,
    SideNav,
  },

  data: () => ({
    //
  }),
};
</script>
