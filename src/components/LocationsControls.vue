<template>
  <fieldset>
    <legend>New Location</legend>
    <div class="pure-control-group">
      <input 
        v-model="label"
        required
        class="pure-input-1-2"
        placeholder="Label"
        type="text"
        name="label"
        @input="handleInputs()"
      >
    </div>
    <div class="pure-control-group">
      <input
        v-model="zipcode"
        required
        placeholder="Zipcode"
        class="pure-input-1-2"
        type="text"
        name="zipcode"
        @input="handleInputs()"
      >
    </div>
  </fieldset>
</template>

<script>
  export default {
    name: 'LocationsFormControls',
    props: {
      value: {
        type: Object,
        default: () => {}
      }
    },
    data () {
      return {
        label: '',
        zipcode: ''
      }
    },
    methods: {
      handleInputs() {
        this.$emit(
          'input',
          {
            label: this.label,
            zipcode: this.zipcode
          }
        );
      }
    }
  }
</script>

<style scoped>

</style>