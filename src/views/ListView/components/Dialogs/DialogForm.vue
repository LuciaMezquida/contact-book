<template>
  <v-dialog v-model="dialog" max-width="500px">
    <v-card>
      <v-card-title>
        <span class="text-h5">{{ formTitle }}</span>
      </v-card-title>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="accent" text @click="closeDialog">
          Cancel
        </v-btn>
        <v-btn color="accent" text @click="">
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    props: {
      dialog: {
        type: Boolean,
        default: false
      },
      formTitle: {
        type: String,
        default: ''
      }
    },
    methods: {
      closeDialog() {
        this.$emit('close-dialog')
      }
    },
    name: 'DialogForm'
  }
</script>
