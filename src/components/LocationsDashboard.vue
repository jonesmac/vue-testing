<template>
  <div>
    <h2>Current Weather</h2>
    <LocationCurrent />
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
  import LocationCurrent from './LocationCurrent';

  export default {
    name: 'LocationsDashboard',
    components: {
      LocationListing,
      LocationForm,
      LocationCurrent
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