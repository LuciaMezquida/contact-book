<template>
  <v-layout align-center justify-center fill-height id="login">
    <v-card width="350px">
      <v-card-title class="headline">
        Login
      </v-card-title>
      <v-card-text class="my-5">
        <v-text-field
          clearable
          color="accent"
          label="Name"
          placeholder="Linda"
          required
          v-model="name"
        />
        <v-text-field
          clearable
          color="accent"
          label="Email"
          placeholder="name@contactlist.com"
          required
          :rules="[emailRules.required, emailRules.email]"
          v-model="email"
        />
        <v-text-field
          :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
          clearable
          @click:append="show = !show"
          color="accent"
          label="Password"
          required
          :rules="[passwordRules.required]"
          :type="show ? 'text' : 'password'"
          v-model="password"
        />
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn class="mr-2 mb-2" color="accent" data-testid="login-button" :disabled="!inputsAreCorrect" to="/list"> Login </v-btn>
      </v-card-actions>
    </v-card>
  </v-layout>
</template>

<script>
  const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  export default {
    data () {
      return {
        email: '',
        name: '',
        password: '',
        emailRules: {
          required: value => !!value || 'Email is required',
          email: value => {
            return emailPattern.test(value) || 'Invalid e-mail.'
          },
        },
        passwordRules: {
          required: value => !!value || 'Password is required',
        },
        show: false,
      }
    },
    computed: {
      inputsAreCorrect () {
        const emailValidation = emailPattern.test(this.email)
        this.$store.commit('setUserName', this.name)
        return this.name && this.email && this.password && emailValidation ? true : false;
      },
    },
    name: 'LoginView'
  }
</script>
