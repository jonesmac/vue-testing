<template>
  <form
    class="login-form"
    novalidate
    @submit="handleSubmit"
  >
    <p v-if="errors.length">
      <ul class="errors">
        <li 
          v-for="(error, index) in errors"
          :key="index"
          class="error-message"
        >
          {{ error }}
        </li>
      </ul>
    </p>
    <LoginFormControls @input-event="handleInputs" />
    <p>
      <button type="submit">
        Login
      </button>
    </p>
  </form>
</template>

<script>

import LoginFormControls from '@/components/LoginFormControls.vue';

export default {
  name: 'LoginForm',
  components: {
    LoginFormControls
  },
  data () {
    return {
      payload: {},
      errors: [],
      errorMessages: {
        emailRequired: 'Email is required',
        passwordRequired: 'Password is required'
      }
    }
  },
  methods: {
    handleInputs (event) {
      this.payload[event.control] = event.value;
    },
    handleSubmit(event) {
      event.preventDefault();
      this.errors = [];
      if (!this.payload.email) {
        this.errors.push(this.errorMessages.emailRequired);
      }
      if (!this.payload.password) {
        this.errors.push(this.errorMessages.passwordRequired);
      }
      if (this.errors.length === 0) {
        // TODO - submit the form
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