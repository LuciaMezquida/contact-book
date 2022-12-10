<template>
  <v-dialog v-model="dialogDelete" max-width="500px">
    <v-card>
      <v-card-title class="text-h6">Are you sure you want to delete this contact?</v-card-title>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="accent" text @click="closeDelete">Cancel</v-btn>
        <v-btn color="accent" text @click="deleteContactConfirm">OK</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    props: {
      dialogDelete: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      closeDelete() {
        this.$emit('close-delete-dialog')
      },
      deleteContactConfirm() {
        this.$emit('deleteContact')
      }
    },
    name: 'DialogDeleteContact'
  }
</script>
