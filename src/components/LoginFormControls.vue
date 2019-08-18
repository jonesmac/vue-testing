<template>
  <div>
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
  </div>
</template>

<script>
  export default {
    name: 'LoginFormControls',
    data () {
      return {
        formFields: {
          email: 'email',
          password: 'password'
        }
      }
    },
    methods: {
      handleInputs (event, inputName) {
        this.$emit(
          'input-event',
          {
            control: inputName,
            value: event.target.value
          }
        );
      }
    }
  }
</script>

<style scoped>

</style>