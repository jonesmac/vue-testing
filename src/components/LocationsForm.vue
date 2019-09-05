<template>
  <form
    class="pure-form pure-form-stacked pure-u-1"
    novalidate
    @submit="handleSubmit"
  >
    <BaseMessages
      :messages="messages"
      :css-class="cssClass"
    />
    <p v-if="isFetching">
      Loading...
    </p>
    <LocationsControls v-model="payload" />
    <div class="pure-controls">
      <button
        type="submit"
        class="pure-button pure-button-primary"
      >
        Add Location
      </button>
    </div>
  </form>
</template>

<script>
  import { mapState, mapActions } from 'vuex';
  import LocationsControls from './LocationsControls';
  import BaseMessages from './BaseMessages';

  export default {
    name: 'LocationsForm',
    components: {
      LocationsControls,
      BaseMessages
    },
    data() {
      return {
        payload: {}
      }
    },
    computed: mapState('locations', ['isFetching', 'messages', 'cssClass']),
    methods: {
      ...mapActions('locations', {
      addLocation: 'addLocation',
      validateNewLocationFields: 'validateNewLocationFields'
    }),
      handleSubmit(event) {
        event.preventDefault();
        this.validateNewLocationFields(this.payload);
        if (this.messages.length === 0) {
          this.addLocation({
            location: this.payload
          });
        }
      }
    }
  }
</script>

<style scoped>

</style>