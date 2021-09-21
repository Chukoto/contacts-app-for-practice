<template>
  <v-container text-xs-center>
    <v-layout row wrap justify-center>
      <v-flex xs12 class="text-center">
        <h1>連絡先編集</h1>
      </v-flex>

      <v-flex xs5 mt-5>
        <v-card>
          <v-card-text>
            <v-form>
              <v-text-field v-model="contact.name" label="名前"></v-text-field>
              <v-text-field
                v-model="contact.tel"
                label="電話番号"
              ></v-text-field>
              <v-text-field
                v-model="contact.email"
                label="メールアドレス"
              ></v-text-field>
              <v-text-field
                v-model="contact.address"
                label="住所"
              ></v-text-field>
              <div class="text-center">
                <v-btn @click="$router.push({ name: 'Contacts' })"
                  >キャンセル</v-btn
                >
                <v-btn color="info" class="ml-2" @click="submit">保存</v-btn>
              </div>
            </v-form>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  created() {
    if (!this.$route.params.contact_id) return;

    const contact = this.$store.getters.getContactById(
      this.$route.params.contact_id
    );
    if (contact) {
      this.contact = contact;
    } else {
      this.$router.push({ name: 'Contacts' });
    }
  },
  data() {
    return {
      contact: {},
    };
  },
  methods: {
    // 保存ボタン押下後に実行
    submit() {
      //
      this.addContact(this.contact);
      this.$router.push({ name: 'Contacts' });
      this.contact = {};
    },
    ...mapActions(['addContact']),
  },
};
</script>
