<template>
  <div>
    <label for="email">
      Email:
      <input 
        v-model="email"
        type="text"
        name="email"
        @input="handleInputs()"
      >
    </label>
    <br>
    <label for="password">
      Password:
      <input
        v-model="password"
        type="password"
        name="password"
        @input="handleInputs()"
      >
    </label>
  </div>
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