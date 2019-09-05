<template>
  <ul>
    <li
      v-for="(location, index) in locations"
      :key="index"
    >
      {{ location.label }}
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'LocationListing',
    props: {
      locations: {
        type: Array,
        default: () => []
      }
    }
  }
</script>

<style scoped>

</style>