<template>
  <v-container fluid fill-height>
    <!-- <v-btn color="blue" dark @click.stop="drawer = !drawer">Toggle</v-btn> -->

    <!-- <v-navigation-drawer v-model="drawer" absolute temporary> 元々の記述 -->

    <!-- Vuexの場合の記述 -->
    <!-- v-nav-drawerの値がtrueならmenuが開くという機能が備わっている -->
    <v-navigation-drawer v-model="$store.state.drawer" absolute temporary>
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <img
              src="https://avatars.githubusercontent.com/u/70996691?s=400&v=4"
            />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>Haruki Kiruha</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          :to="item.link"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      // drawer: false, // ストアに移行するため削除（便宜上コメントアウト）
      // https://materialdesignicons.com/ でicon名を確認
      items: [
        { title: 'ホーム', icon: 'mdi-home', link: { name: 'Home' } },
        {
          title: '連絡先一覧',
          icon: 'mdi-account',
          link: { name: 'Contacts' },
        },
      ],
    };
  },
};
</script>
