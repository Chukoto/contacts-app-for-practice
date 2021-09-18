<template>
  <div>
    <v-toolbar
      dark
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <v-app-bar-nav-icon @click="openSideMenu">①</v-app-bar-nav-icon>
      <v-app-bar-nav-icon @click="openSideMenu">②</v-app-bar-nav-icon>

      <v-toolbar-title>マイアドレス帳</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-export</v-icon>
      </v-btn>
    </v-toolbar>
    <v-spacer></v-spacer>
  </div>
</template>

<script>
// コンポーネントのメソッドに、storeのactionsメソッドを組み込む役割がある
import { mapActions } from 'vuex';

export default {
  name: 'Header',
  methods: {
    // ①...mapActionsなし
    openSideMenu() {
      // コンポーネントのインスタンス上では、this.$storeでstoreにアクセスできる
      // dispatchメソッドで、storeのtoggleSideMenuアクションを呼び出している
      this.$store.dispatch('toggleSideMenu');
    },

    // ②...mapActionsあり
    // 分割代入でactionsをメソッドに組み込める
    ...mapActions(['toggleSideMenu']),
  },
};
</script>

<style></style>
