<template>
  <v-data-table
    v-bind="tableProps"
    hide-default-footer
    no-data-text="No contacts found"
  >
    <!-- TABLE TOP-BAR -->
    <template #top>
      <v-toolbar flat class="mb-6">
        <v-spacer></v-spacer>
        <v-btn color="accent" data-testid="add-contact-button" @click="createNewContact()">
          <v-icon small class="mr-2">mdi-account-plus</v-icon>
          New contact
        </v-btn>
        <DialogForm :showDialog="showDialog" :contactInfo="contactInfo" :emailList="emailList" :formTitle="formTitle" @close-dialog="closeDialog"/>
        </v-toolbar>
      <DialogDeleteContact :showDialogDelete="showDialogDelete" :contactToDelete="contactToDelete" @close-dialog-delete="closeDialogDelete"/>
    </template>
    <!-- TABLE ACTIONS -->
    <template #item.actions="{ item }">
      <v-btn icon class="mr-2" @click="editContact(item)">
        <v-icon small>mdi-pencil</v-icon>
      </v-btn>
      <v-btn icon @click="deleteContact(item)">
        <v-icon small>mdi-delete</v-icon>
      </v-btn>
    </template>
  </v-data-table>
</template>

<script>
  import DialogForm from '../Dialogs/DialogForm'
  import DialogDeleteContact from '../Dialogs/DialogDeleteContact'
  import { CONTACT_TABLE_HEADERS } from './ContactTableHeaders'

  export default {
    data() {
      return {
        contactInfo: {},
        contactToDelete: {},
        showDialog: false,
        showDialogDelete: false,
        formTitle: 'New contact'
      }
    },
    props: {
      contactList: {
        type: Array,
        default: () => []
      },
      loading: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      tableProps () {
        return {
          headers: CONTACT_TABLE_HEADERS,
          items: this.contactList,
          loading: this.loading
        }
      },
      emailList () {
        return this.contactList.map(item => item.email)
      }
    },
    methods: {
      createNewContact () {
        this.formTitle = 'New contact'
        this.contactInfo = {}
        this.showDialog = true
      },
      editContact (item) {
        this.formTitle = 'Edit contact'
        this.contactInfo = item
        this.showDialog = true
      },
      closeDialog () {
        this.showDialog = false
      },
      deleteContact (item) {
        this.contactToDelete = item
        this.showDialogDelete = true
      },
      closeDialogDelete () {
        this.showDialogDelete = false
      }
    },
    components: {
      DialogDeleteContact,
      DialogForm
    },
    name: 'ContactTable',
  }
</script>
