<template>
  <v-data-table
    v-bind="tableProps"
    hide-default-footer
  >
    <!-- TABLE TOPBAR -->
    <template #top>
      <v-toolbar flat class="mb-6">
        <v-spacer></v-spacer>
        <v-btn color="accent" data-testid="add-contact-button" @click="createNewContact()">
          <v-icon small class="mr-2">mdi-account-plus</v-icon>
          New contact
        </v-btn>
        <v-dialog v-model="dialog" max-width="500px">
          <DialogForm :contactInfo="contactInfo" :emailList="emailList" :formTitle="formTitle" @close-dialog="closeDialog"/>
        </v-dialog>
        <DialogDeleteContact :dialogDelete="dialogDelete" @close-delete-dialog="closeDeleteDialog"/>
      </v-toolbar>
    </template>
    <!-- TABLE CONTENT -->
    <template #items="props">
      <tr>
        <td class="text-xs">{{ props.item.firstName }}</td>
        <td class="text-xs">{{ props.item.lastName }}</td>
        <td class="text-xs">{{ props.item.email }}</td>
        <td class="text-xs">{{ props.item.phoneNumber }}</td>
      </tr>
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
  import DialogForm from '../Dialogs/DialogForm.vue'
  import DialogDeleteContact from '../Dialogs/DialogDeleteContact.vue'
  import { CONTACT_TABLE_HEADERS } from './ContactTableHeaders'

  export default {
    data() {
      return {
        contactInfo: {},
        dialog: false,
        dialogDelete: false,
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
        this.dialog = true
      },
      editContact (item) {
        this.formTitle = 'Edit contact'
        this.contactInfo = item
        this.dialog = true
      },
      closeDialog () {
        this.dialog = false
      },
      deleteContact (item) {
        console.log(item);
        this.dialogDelete = true
      },
      closeDeleteDialog () {
        this.dialogDelete = false
      }
    },
    components: {
      DialogDeleteContact,
      DialogForm
    },
    name: 'ContactTable',
  }
</script>
