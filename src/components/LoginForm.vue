<template>
  <form
    class="pure-form pure-form-stacked pure-u-1"
    novalidate
    @submit="handleSubmit"
  >
    <LoginFormMessages
      :messages="messages"
      :css-class="cssClass"
    />
    <LoginFormControls
      v-model="payload"
    />
    <div class="pure-controls">
      <button
        type="submit"
        class="pure-button pure-button-primary"
      >
        Login
      </button>
    </div>
  </form>
</template>

<script>
import axios from 'axios';
import LoginFormControls from '@/components/LoginFormControls.vue';
import LoginFormMessages from '@/components/LoginFormMessages.vue';
import { API } from '@/constants/api';
import { Routes } from '@/constants/routes';

export default {
  name: 'LoginForm',
  components: {
    LoginFormControls,
    LoginFormMessages
  },
  data () {
    return {
      payload: {},
      messages: [],
      errorMessages: {
        emailRequired: 'Email is required',
        passwordRequired: 'Password is required'
      },
      resetMessages: () => {
        this.messages = [];
        this.cssClass = '';
      },
      cssClass: '',
      API,
      axios,
      Routes
    }
  },
  methods: {
    async handleSubmit(event) {
      event.preventDefault();
      this.resetMessages();
      if (!this.payload.email) {
        this.cssClass = 'pure-alert-error';
        this.messages.push(this.errorMessages.emailRequired);
      }
      if (!this.payload.password) {
        this.cssClass = 'pure-alert-error';
        this.messages.push(this.errorMessages.passwordRequired);
      }
      if (this.messages.length === 0) {
        this.resetMessages();
        try {
          await this.axios.post(
            this.API.USERS.CREATE,
            this.payload
          );
          this.cssClass = 'pure-alert-success';
          this.messages.push('Logged In Successfully!')
          setTimeout(() => {
            this.$router.push(this.Routes.LOCATIONS)
          }, 2000)
        } catch (e) {
          this.cssClass = 'pure-alert-error';
          this.messages.push('Login Request Failed');
        }
      }
    }
  }
}

</script>

<style scoped>
  form {
    margin: 45px 0;
  }
</style>