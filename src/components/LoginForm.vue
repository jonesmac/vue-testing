<template>
  <form
    class="login-form"
    novalidate
    @submit="handleSubmit"
  >
    <LoginFormErrors
      :errors="errors"
    />
    <LoginFormControls
      v-model="payload"
    />
    <p>
      <button type="submit">
        Login
      </button>
    </p>
  </form>
</template>

<script>
import axios from 'axios';
import LoginFormControls from '@/components/LoginFormControls.vue';
import LoginFormErrors from '@/components/LoginFormErrors.vue';
import { API } from '@/constants/api';

export default {
  name: 'LoginForm',
  components: {
    LoginFormControls,
    LoginFormErrors
  },
  data () {
    return {
      payload: {},
      errors: [],
      errorMessages: {
        emailRequired: 'Email is required',
        passwordRequired: 'Password is required'
      },
      resetErrors: () => this.errors = [],
      API,
      axios
    }
  },
  methods: {
    async handleSubmit(event) {
      event.preventDefault();
      this.resetErrors();
      if (!this.payload.email) {
        this.errors.push(this.errorMessages.emailRequired);
      }
      if (!this.payload.password) {
        this.errors.push(this.errorMessages.passwordRequired);
      }
      if (this.errors.length === 0) {
        try {
          const loginResponse = await this.axios.post(
            this.API.USERS.CREATE,
            this.payload
          );
          // TODO show success message in UI
        } catch (e) {
          this.resetErrors();
          this.errors.push('Login Request Failed');
        }
      }
    }
  }
}

</script>

<style scoped>
.login-form {
  padding: 45px;
}
</style>