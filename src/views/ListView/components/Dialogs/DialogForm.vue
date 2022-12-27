<template>
  <v-dialog v-model="showDialog" max-width="500px" persistent>
    <v-card>
      <v-card-title>
        <span class="text-h5" data-testid="dialog-form-title">{{ formTitle }}</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" md="6">
              <v-text-field
                v-model="firstName"
                color="accent"
                data-testid="dialog-input-first-name"
                label="First name"
                :rules="[rules.required]"
              />
            </v-col>
            <v-col cols="12" sm="6" md="6">
              <v-text-field
                v-model="lastName"
                color="accent"
                data-testid="dialog-input-last-name"
                label="Last name"
                :rules="[rules.required]"
              />
            </v-col>
            <v-col cols="12" sm="6" md="6">
              <v-text-field
                v-model="email"
                color="accent"
                data-testid="dialog-input-email"
                label="Email"
                :rules="[rules.required, rules.email]"
              />
            </v-col>
            <v-col cols="12" sm="6" md="6">
              <v-text-field
                v-model="phoneNumber"
                color="accent"
                data-testid="dialog-input-phone-number"
                label="Phone number"
                :rules="[rules.required]"
              />
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="accent" data-testid="dialog-form-cancel-btn" text @click="closeDialog">Cancel</v-btn>
        <v-btn color="accent" data-testid="dialog-form-save-btn" text @click="saveContact" :disabled="!inputsAreCorrect">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  import {createContact} from '@/api/actions'
  export default {
    data() {
      return {
        contact: {},
        contactFilled: {},
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
      },
      showDialog: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      firstName: {
        get() {
          return this.contactInfo.firstName ? this.contactInfo.firstName : ''
        },
        set(value) {
          this.contactFilled.firstName = this.rules.required(value)
          this.contact.firstName = value
        }
      },
      lastName: {
        get() {
          return this.contactInfo.lastName ? this.contactInfo.lastName : ''
        },
        set(value) {
          this.contactFilled.lastName = this.rules.required(value)
          this.contact.lastName = value
        }
      },
      email: {
        get() {
          return this.contactInfo.email ? this.contactInfo.email : ''
        },
        set(value) {
          this.contactFilled.email = this.rules.required(value)
          this.contact.email = value
        }
      },
      phoneNumber: {
        get() {
          return this.contactInfo.phoneNumber ? this.contactInfo.phoneNumber : ''
        },
        set(value) {
          this.contactFilled.phoneNumber = this.rules.required(value)
          this.contact.phoneNumber = value
        }
      },
      inputsAreCorrect () {
        const emailIsNotRepeated = !this.emailList.filter(email => email !== this.contactInfo.email).includes(this.contact.email)
        return this.contactFilled.firstName === true && this.contactFilled.lastName === true && this.contactFilled.email === true && this.contactFilled.phoneNumber === true && emailIsNotRepeated ? true : false;
      }
    },
    methods: {
      closeDialog() {
        this.$emit('close-dialog')
      },
      async saveContact() {
        const history = {
          date: Date.now(),
          action: this.formTitle === 'New contact' ? 'created' : 'updated'
        }
        this.contact.history ? this.contact.history.push(history) : this.contact.history = [history]
        await createContact(this.contact)
        this.$emit('update-data-table')
      }
    },
    watch:{
      showDialog() {
        this.contact = {}
        this.contactFilled = {
          firstName: false,
          lastName: false,
          email: false,
          phoneNumber: false
        }
        if(Object.keys(this.contactInfo).length !== 0){
          this.contactFilled = {
            firstName: true,
            lastName: true,
            email: true,
            phoneNumber: true
          }
          this.contact = {...this.contactInfo}
        }
      }
    },
    name: 'DialogForm'
  }
</script>
