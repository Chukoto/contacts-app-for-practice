<template>
  <v-container text-xs-center justify-center>
    <v-layout row wrap>
      <v-flex xs12>
        <h1>連絡先一覧</h1>
      </v-flex>

      <v-flex xs12 mt-5 text-right>
        <router-link :to="{ name: 'Contact_edit' }">
          <v-btn color="info">
            連絡先追加
          </v-btn>
        </router-link>
      </v-flex>

      <v-flex xs12 mt-5 justify-center>
        <!-- v-data-tableについて -->
        <!-- ①v-bind:headersに、thタグの役割。scriptの配列'header'の指定が必須-->
        <!-- ②v-bind:itemsに、scriptの配列'contacts'の指定が必須 -->
        <v-data-table :headers="headers" :items="contacts">
          <template v-slot:items="props">
            <td class="text-xs-left">{{ props.item.name }}</td>
            <td class="text-xs-left">{{ props.item.tel }}</td>
            <td class="text-xs-left">{{ props.item.email }}</td>
            <td class="text-xs-left">{{ props.item.address }}</td>
          </template>
          <!-- <template v-slot:item.action="{ item }"> 
            'v-slot' directive doesn't support any modifierと
            エラーが出たときの対処 ↓ -->
          <template v-slot:[`item.action`]="{ item }">
            <router-link
              :to="{
                name: 'Contact_edit',
                params: { contact_id: item.id },
              }"
            >
              <v-icon small class="mr-2">mdi-pencil</v-icon>
            </router-link>
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  created() {
    this.contacts = this.$store.state.contacts;
  },
  data() {
    return {
      headers: [
        { text: '名前', value: 'name' },
        { text: '電話番号', value: 'tel' },
        { text: 'メールアドレス', value: 'email' },
        { text: '住所', value: 'address' },
        { text: '操作', value: 'action', sortable: false },
      ],
      contacts: [],
    };
  },
};
</script>

<style scoped lang="scss">
a {
  text-decoration: none;
}
</style>
