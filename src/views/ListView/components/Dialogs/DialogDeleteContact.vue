<template>
  <v-dialog v-model="showDialogDelete" max-width="500px">
    <v-card data-testid="dialog-delete">
      <v-card-title class="text-h6 pa-6" data-testid="dialog-delete-text">Are you sure you want to delete this contact?</v-card-title>
      <v-card-actions class="pb-6 pr-6">
        <v-spacer></v-spacer>
        <v-btn color="accent" data-testid="dialog-delete-cancel-btn" text @click="closeDelete">Cancel</v-btn>
        <v-btn color="accent" data-testid="dialog-delete-save-btn" depressed @click="deleteItemConfirm">OK</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  import { deleteContact } from '@/api/actions'
  export default {
    props: {
      contactToDelete: {
        type: Object,
        default: () => {}
      },
      showDialogDelete: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      closeDelete () {
        this.$emit('close-dialog-delete')
      },
      async deleteItemConfirm () {
        await deleteContact(this.contactToDelete.id)
        this.$emit('close-dialog-delete')
        this.$emit('update-data-table')
      },
    },
    name: 'DialogDeleteContact'
  }
</script>
