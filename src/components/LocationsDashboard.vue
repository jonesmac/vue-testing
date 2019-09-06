<template>
  <div>
    <h2>Current Weather</h2>
    <div v-if="isFetching">
      Fetching Weather...
    </div>
    <LocationCurrent
      v-if="weather.main"
      :weather="weather"
    />
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
  import { mapState } from 'vuex';

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
    },
    computed: {
      ...mapState('currentLocation', ['weather', 'isFetching'])
    }
  }
</script>

<style scoped>

</style>