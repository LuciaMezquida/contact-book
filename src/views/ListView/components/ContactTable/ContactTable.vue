<template>
  <v-data-table
    v-bind="tableProps"
    hide-default-footer
  >
    <template #items="props">
      <tr>
        <td class="text-xs">{{ props.item.firstName }}</td>
        <td class="text-xs">{{ props.item.lastName }}</td>
        <td class="text-xs">{{ props.item.email }}</td>
        <td class="text-xs">{{ props.item.phoneNumber }}</td>
      </tr>
    </template>
    <template #item.actions="{ item }">
      <v-tooltip bottom>
        <template #activator="{ on }">
          <v-btn v-on="on" icon class="mr-4" @click="showDialog = true">
            <v-icon small>mdi-pencil</v-icon>
          </v-btn>
        </template>
        <span>Edit</span>
      </v-tooltip>
      <DialogForm :dialog="showDialog" formTitle="Edit Contact" @close-dialog="closeDialog"/>
      <v-tooltip bottom>
        <template #activator="{ on }">
          <v-btn v-on="on" icon @click="dialogDeleteContact = true">
            <v-icon small>mdi-delete</v-icon>
          </v-btn>
        </template>
        <span>Edit</span>
      </v-tooltip>
      <DialogDeleteContact :dialogDelete="dialogDeleteContact" @close-delete-dialog="closeDeleteDialog"/>
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
        showDialog: false,
        dialogDeleteContact: false
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
      }
    },
    methods: {
      closeDeleteDialog() {
        this.dialogDeleteContact = false
      },
      closeDialog() {
        this.showDialog = false
      }
    },
    components: {
      DialogDeleteContact,
      DialogForm
    },
    name: 'ContactTable',
  }
</script>
