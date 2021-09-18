<template>
  <div>
    <v-toolbar
      dark
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <v-app-bar-nav-icon @click="openSideMenu"></v-app-bar-nav-icon>

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
export default {
  name: 'Header',
  methods: {
    openSideMenu() {
      // コンポーネントのインスタンス上では、this.$storeでstoreにアクセスできる
      // dispatchメソッドで、storeのtoggleSideMenuアクションを呼び出している
      this.$store.dispatch('toggleSideMenu');
    },
  },
};
</script>

<style></style>
