<template>
  <v-dialog v-model="showDialog" max-width="500px" persistent>
    <v-card>
      <v-form ref="form" v-model="valid">
        <v-card-title class="pt-6 pl-6">
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

        <v-card-actions class="pb-6 pr-6">
          <v-spacer></v-spacer>
          <v-btn color="accent" data-testid="dialog-form-cancel-btn" text @click="closeDialog">Cancel</v-btn>
          <v-btn color="accent" data-testid="dialog-form-save-btn" depressed @click="saveContact" :disabled="!valid">Save</v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script>
  import { createContact, updateContact } from '@/api/actions'
  export default {
    data() {
      return {
        contact: {},
        rules: {
          required: value => !!value || 'This field is required',
          email: value => {
            return !this.emailList.filter(email => email !== this.contactInfo.email).includes(value) || 'This e-mail already exists.'
          },
        },
        valid: true
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
        if(this.formTitle === 'New contact') this.$refs.form.reset()
        this.$emit('close-dialog')
      },
      async saveContact() {
        const history = {
          date: Date.now(),
          action: this.formTitle === 'New contact' ? 'created' : 'updated'
        }
        this.contact.history ? this.contact.history.push(history) : this.contact.history = [history]
        this.formTitle === 'New contact' ? await createContact(this.contact) : await updateContact(this.contactInfo.id, this.contact)

        if(this.formTitle === 'New contact') this.$refs.form.reset()
        this.$emit('close-dialog')
        this.$emit('update-data-table')
      }
    },
    watch:{
      showDialog() {
        this.contact = {}
        if(Object.keys(this.contactInfo).length !== 0){
          this.contact = {...this.contactInfo}
        }
      }
    },
    name: 'DialogForm'
  }
</script>
