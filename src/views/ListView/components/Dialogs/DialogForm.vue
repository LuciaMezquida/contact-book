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
              required
              :rules="[rules.required]"
            />
          </v-col>
          <v-col cols="12" sm="6" md="6">
            <v-text-field
              v-model="lastName"
              color="accent"
              label="Last name"
              required
              :rules="[rules.required]"
            />
          </v-col>
          <v-col cols="12" sm="6" md="6">
            <v-text-field
              v-model="email"
              color="accent"
              label="Email"
              required
              :rules="[rules.required, rules.email]"
            />
          </v-col>
          <v-col cols="12" sm="6" md="6">
            <v-text-field
              v-model="phoneNumber"
              color="accent"
              label="Phone number"
              required
              :rules="[rules.required]"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="accent" text @click="closeDialog">Cancel</v-btn>
      <v-btn color="accent" text @click="saveContact" :disabled="!inputsAreCorrect">Save</v-btn>
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
        },
        rules: {
          required: value => !!value || 'This field is required',
          email: value => {
            return !this.emailList.filter(email => email !== this.contactInfo.email).includes(value) || 'This e-mail already exists.'
          },
        },
      }
    },
    props: {
      contactInfo: {
        type: Object,
        default: () => {}
      },
      emailList: {
        type: Array,
        default: () => []
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
      },
      inputsAreCorrect () {
        const emailIsNotRepeated = !this.emailList.filter(email => email !== this.contactInfo.email).includes(this.contact.email)
        return this.contact.firstName && this.contact.lastName && this.contact.email && this.contact.phoneNumber && emailIsNotRepeated ? true : false;
      }
    },
    methods: {
      closeDialog() {
        this.$emit('close-dialog')
      },
      saveContact() {
        //TODO: save contact to database
        this.$emit('close-dialog')
      }
    },
    name: 'DialogForm'
  }
</script>
