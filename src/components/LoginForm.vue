<template>
  <form
    class="login-form"
    novalidate
    @submit="handleSubmit"
  >
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
      payload: {}
    }
  },
  methods: {
    handleInputs (event) {
      this.payload[event.control] = event.value;
    },
    handleSubmit(event) {
      event.preventDefault();
      // TODO - validate and send
    }
  }
}

</script>

<style scoped>
.login-form {
  padding: 45px;
}
</style>