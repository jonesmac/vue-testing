<template>
  <fieldset>
    <legend>Login</legend>
    <div class="pure-control-group">
      <input 
        v-model="email"
        required
        class="pure-input-1-2"
        placeholder="Email"
        type="text"
        name="email"
        @input="handleInputs()"
      >
    </div>
    <div class="pure-control-group">
      <input
        v-model="password"
        required
        placeholder="Password"
        class="pure-input-1-2"
        type="password"
        name="password"
        @input="handleInputs()"
      >
    </div>
  </fieldset>
</template>

<script>
  export default {
    name: 'LoginFormControls',
    props: {
      value: {
        type: Object,
        default: () => {}
      }
    },
    data () {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      handleInputs() {
        this.$emit(
          'input',
          {
            email: this.email,
            password: this.password
          }
        );
      }
    }
  }
</script>

<style scoped>

</style>