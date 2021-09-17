<template>
  <v-container fluid fill-height>
    <v-btn color="blue" dark @click.stop="drawer = !drawer">Toggle</v-btn>

    <!-- v-nav-drawerの値がtrueならmenuが開くという機能が備わっている -->
    <v-navigation-drawer v-model="drawer" absolute temporary>
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

        <v-list-item v-for="(item, index) in items" :key="index">
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
      drawer: false,
      // https://materialdesignicons.com/ でicon名を確認
      items: [{ title: '連絡先一覧', icon: 'mdi-account' }],
    };
  },
};
</script>
