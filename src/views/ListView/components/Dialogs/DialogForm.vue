<template>
  <v-card>
    <v-card-title>
      <span class="text-h5">{{ formTitle }}</span>
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="12" sm="6" md="6">
            <v-text-field
              v-model="firstName"
              color="accent"
              label="First name"
            />
          </v-col>
          <v-col cols="12" sm="6" md="6">
            <v-text-field
              v-model="lastName"
              color="accent"
              label="Last name"
            />
          </v-col>
          <v-col cols="12" sm="6" md="6">
            <v-text-field
              v-model="email"
              color="accent"
              label="Email"
            />
          </v-col>
          <v-col cols="12" sm="6" md="6">
            <v-text-field
              v-model="phoneNumber"
              color="accent"
              label="Phone number"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="accent" text @click="closeDialog">Cancel</v-btn>
      <v-btn color="accent" text @click="saveContact">Save</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    data() {
      return {
        contact: {
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: ''
        }
      }
    },
    props: {
      contactInfo: {
        type: Object,
        default: () => {}
      },
      formTitle: {
        type: String,
        default: ''
      }
    },
    computed: {
      firstName: {
        get() {
          return this.contactInfo.firstName ? this.contactInfo.firstName : ''
        },
        set(value) {
          this.contact.firstName = value
        }
      },
      lastName: {
        get() {
          return this.contactInfo.lastName ? this.contactInfo.lastName : ''
        },
        set(value) {
          this.contact.lastName = value
        }
      },
      email: {
        get() {
          return this.contactInfo.email ? this.contactInfo.email : ''
        },
        set(value) {
          this.contact.email = value
        }
      },
      phoneNumber: {
        get() {
          return this.contactInfo.phoneNumber ? this.contactInfo.phoneNumber : ''
        },
        set(value) {
          this.contact.phoneNumber = value
        }
      }
    },
    methods: {
      closeDialog() {
        this.$emit('close-dialog')
      },
      saveContact() {
        //TODO: save contact to database
        console.log(this.contact);
        this.$emit('close-dialog')
      }
    },
    name: 'DialogForm'
  }
</script>
