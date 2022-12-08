<template>
  <v-container grid-list-xl fluid pa-4>
    <v-layout align-center pr-6>
      <v-spacer></v-spacer>
      Hi {{userName}}!
      <v-tooltip>
        <template bottom>
          <v-btn icon class="ml-2" slot="activator" @click="logout">
            <v-icon small color="accent">mdi-logout</v-icon>
          </v-btn>
        </template>
        <span>Account</span>
      </v-tooltip>
    </v-layout>
    <v-card class="ma-5" min-height="calc(100vh - 98px)">
      <!-- TITLE -->
      <v-card-title>
        <h3 class="headline">Contact list</h3>
      </v-card-title>
      <!-- TABLE -->
      <ContactTable/>
    <v-divider></v-divider>
    </v-card>
  </v-container>
</template>

<script>
  import ContactTable from '@/components/ContactTable'
  export default {
    data() {
      return {
        userName: this.$store.state.login.userName
      }
    },
    methods: {
      goToLogin () {
        const userName = this.$store.state.login.userName
        if (!userName) {
          this.$router.push('/')
        }
      },
      logout() {
        this.$store.commit('deleteUserName')
        this.$router.push('/')
      }
    },
    mounted() {
      this.goToLogin()
    },
    components: {
      ContactTable
    },
    name: 'ContactList'
  }
</script>
