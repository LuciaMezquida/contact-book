<template>
  <v-data-table
    data-testid="contact-table"
    :headers="contactTableHeaders"
    :items="contactList"
    :loading="loading"
    loading-text="Loading... Please wait"
    hide-default-footer
    no-data-text="No contacts found"
    show-expand
    single-expand
    item-key="id"
    :expanded="expanded"
  >
    <!-- TABLE TOP-BAR -->
    <template #progress><v-progress-linear color="accent" indeterminate height="2"></v-progress-linear></template>
    <template #top>
      <v-toolbar flat class="mb-6">
        <v-spacer></v-spacer>
        <v-btn color="accent" data-testid="add-contact-button" depressed @click="createNewContact()">
          <v-icon small class="mr-2">mdi-account-plus</v-icon>
          New contact
        </v-btn>
        <DialogForm 
          :showDialog="showDialog" 
          :contactInfo="contactInfo" 
          :emailList="emailList" 
          :formTitle="formTitle" 
          @close-dialog="closeDialog" 
          @update-data-table="updateDataTable"
        />
        </v-toolbar>
      <DialogDeleteContact
        :showDialogDelete="showDialogDelete" 
        :contactToDelete="contactToDelete"
        @close-dialog-delete="closeDialogDelete" 
        @update-data-table="updateDataTable"
      />
    </template>
    <!-- TABLE ACTIONS -->
    <template #item.actions="{ item, index }">
      <v-btn aria-label="Edit" icon class="mr-2" :data-testid="'edit-contact-button' + index" @click="editContact(item)">
        <v-icon small>mdi-pencil</v-icon>
      </v-btn>
      <v-btn aria-label="Delete" icon :data-testid="'delete-contact-button' + index" @click="deleteContact(item)">
        <v-icon small>mdi-delete</v-icon>
      </v-btn>
    </template>
    <!-- TABLE EXPANDED ROW INFO -->
    <template #expanded-item="{ headers, item }">
      <td :colspan="headers.length">
        <v-list-item v-for="(item, i) in item.history" :key="i">
          <v-list-item-avatar size="32px">
            <v-icon class="accent white--text" small>{{ setHistoryIcon(item.action) }}</v-icon>
          </v-list-item-avatar>
          <v-list-item-title class="body-2 item-title">{{ formatDate(item.date) }}:</v-list-item-title>
          <v-list-item-subtitle v-if="item.action === 'created'">The contact has been {{ item.action }}</v-list-item-subtitle>
          <v-list-item-subtitle v-else> {{inputUpdatedMessage(item.updatedInputs)}} {{ item.action }}</v-list-item-subtitle>
        </v-list-item>
      </td>
    </template>
  </v-data-table>
</template>

<script>
  import { CONTACT_TABLE_HEADERS } from './ContactTableHeaders'
  import DialogForm from '../Dialogs/DialogForm'
  import DialogDeleteContact from '../Dialogs/DialogDeleteContact'
  import moment from 'moment'

  export default {
    data() {
      return {
        contactInfo: {},
        contactTableHeaders: CONTACT_TABLE_HEADERS,
        contactToDelete: {},
        expanded: [],
        formTitle: 'New contact',
        showDialog: false,
        showDialogDelete: false
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
      },
      updateDataTable() {
        this.$emit('get-contactList')
      },
      formatDate(date) {
        const day = moment(date).format('DD MMMM YYYY')
        const hour = moment(date).format('HH:mm')
        return day + ' at ' + hour
      },
      setHistoryIcon(action){
        return action === 'created' ? 'mdi-auto-fix' : 'mdi-update'
      },
      inputTextTransform (input) {
        switch (input) {
          case 'firstName': return 'First Name'
          case 'lastName': return 'Last Name'
          case 'email': return 'Email'
          case 'phoneNumber': return 'Phone Number'
        }
      },
      inputUpdatedMessage(input) {
        if(input.length === 1) return `The ${this.inputTextTransform(input[0])} input has been `
        if(input.length === 2) return `The ${this.inputTextTransform(input[0])} and ${this.inputTextTransform(input[1])} inputs have been `
        if(input.length >= 2){
          let inputs = ''
          input.forEach((item, i) => {
            if(i === input.length - 1) inputs += `and ${this.inputTextTransform(item)}`
            else inputs += `${this.inputTextTransform(item)}, `
          })
          return `The ${inputs} inputs have been `
        }
      },
    },
    components: {
      DialogDeleteContact,
      DialogForm
    },
    name: 'ContactTable',
  }
</script>

<style lang="scss" scoped>
  .item-title {
    font-weight: 500;
    font-family: 'Inter' !important;
    max-width: 220px;
  }
</style>
