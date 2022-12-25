<template>
  <v-dialog v-model="showDialogDelete" max-width="500px">
    <v-card>
      <v-card-title class="text-h6" data-testid="dialog-delete-text">Are you sure you want to delete this contact?</v-card-title>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="accent" data-testid="dialog-delete-cancel-btn" text @click="closeDelete">Cancel</v-btn>
        <v-btn color="accent" data-testid="dialog-delete-save-btn" text @click="deleteItemConfirm">OK</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
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
      deleteItemConfirm () {
        //TODO: delete contact from database
        this.$emit('close-dialog-delete')
      },
    },
    name: 'DialogDeleteContact'
  }
</script>
