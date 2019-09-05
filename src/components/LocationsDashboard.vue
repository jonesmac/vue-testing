<template>
  <div>
    <h2>Saved Locations</h2>
    <LocationListing
      :locations="locations"
    />
    <LocationForm v-model="newLocation" />
  </div>
</template>

<script>
  import LocationListing from './LocationListing';
  import LocationForm from './LocationsForm';

  export default {
    name: 'LocationsDashboard',
    components: {
      LocationListing,
      LocationForm
    },
    props: {
      currentUser: {
        type: Object,
        default: () => {}
      },
      locations: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        newLocation: {}
      }
    }
  }
</script>

<style scoped>

</style>