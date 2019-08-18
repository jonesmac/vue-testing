<template>
  <form
    class="login-form"
    novalidate
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
    }
  }
}

</script>

<style scoped>
.login-form {
  padding: 45px;
}
</style>