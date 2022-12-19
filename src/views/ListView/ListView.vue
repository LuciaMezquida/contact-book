<template>
  <v-container grid-list-xl fluid pa-4>
    <!-- WELCOME MESSAGE -->
    <v-layout align-center pr-6>
      <v-spacer></v-spacer>
      <div data-testid="welcome-message">Hi {{userName}}!</div>
      <v-tooltip bottom>
        <template #activator="{ on }">
          <v-btn icon class="ml-2" v-on="on" @click="logout">
            <v-icon small color="accent">mdi-logout</v-icon>
          </v-btn>
        </template>
        <span>Logout</span>
      </v-tooltip>
    </v-layout>
    <v-card class="ma-5" min-height="calc(100vh - 110px)">
      <!-- TITLE -->
      <v-card-title>
        <h3 class="headline">Contact list</h3>
      </v-card-title>
      <!-- TABLE -->
      <ContactTable :contactList="contactList" :loading="loading"/>
      <v-divider></v-divider>
    </v-card>
  </v-container>
</template>

<script>
  import {contacts} from './contacts'
  import ContactTable from './components/ContactTable/ContactTable.vue'

  export default {
    data() {
      return {
        contactList: [], 
        loading: false,
        userName: this.$store.state.login.userName
      }
    },
    methods: {
      getContactList() {
        this.loading = true
        this.contactList = contacts.data
        this.loading = false
      },
      goToLogin () {
        if (!this.userName) {
          this.$router.push('/')
        }
      },
      logout() {
        this.$store.commit('deleteUserName')
        this.$router.push('/')
      }
    },
    mounted() {
      this.getContactList()
      // this.goToLogin()
    },
    components: {
      ContactTable
    },
    name: 'ContactList'
  }
</script>
