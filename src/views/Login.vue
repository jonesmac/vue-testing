<template>
  <form class="login-form">
    <label for="email">
      Email:
      <input 
        type="text"
        :name="formFields.email"
        @input="handleInputs.call(this, $event, formFields.email)"
      >
    </label>
    <br>
    <label for="password">
      Password:
      <input
        type="password"
        :name="formFields.password"
        @input="handleInputs.call(this, $event, formFields.password)"
      >
        
    </label>
    <p>
      <button type="submit">
        Login
      </button>
    </p>
  </form>
</template>

<script>

export default {
  name: 'LoginForm',
  data () {
    return {
      formFields: {
        email: 'email',
        password: 'password'
      },
      payload: {}
    }
  },
  methods: {
    handleInputs (event, inputName) {
      this.payload[inputName] = event.target.value;
    }
  }
}

</script>

<style scoped>
.login-form {
  padding: 45px;
}
</style>