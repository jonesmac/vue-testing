<template>
  <div>
    <h2>Locations</h2>
    <LocationListing
      :locations="locations"
    />
  </div>
</template>

<script>
  import LocationListing from './LocationListing';
  export default {
    name: 'LocationsDashboard',
    components: {
      LocationListing
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
    }
  }
</script>

<style scoped>

</style>