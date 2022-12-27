<template>
  <v-container grid-list-xl fluid pa-6>
    <v-card class="ma-5" min-height="calc(100vh - 90px)">
      <!-- TITLE -->
      <v-card-title>
        <h3 class="headline">Contact list</h3>
      </v-card-title>
      <!-- TABLE -->
      <ContactTable :contactList="contactList" :loading="loading" @get-contactList="getContactList"/>
      <v-divider></v-divider>
    </v-card>
  </v-container>
</template>

<script>
  import { getContactList } from '../../api/actions'
  import ContactTable from './components/ContactTable/ContactTable.vue'

  export default {
    data() {
      return {
        contactList: [], 
        loading: false,
      }
    },
    methods: {
      async getContactList() {
        this.loading = true
        this.contactList = await getContactList()
        this.loading = false
      }
    },
    mounted() {
      this.getContactList()
    },
    components: {
      ContactTable
    },
    name: 'ContactList'
  }
</script>
