<template>
  <ul>
    <li
      v-for="(location, index) in locations"
      :key="index"
      class="location"
    >
      <span class="label">
        {{ location.label }}
      </span>
      <span class="zipcode">
        {{ location.zipcode }}
      </span>
      <a 
        class="delete"
        @click="deleteLocation(location.id)"
      >
        Delete
      </a>
    </li>
  </ul>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    name: 'LocationListing',
    props: {
      locations: {
        type: Array,
        default: () => []
      }
    },
    methods:{
      ...mapActions('locations', ['deleteLocation'])
    }
  }
</script>

<style scoped>
  .location .label {
    margin-right: 14px;
  }
  .delete {
    cursor: pointer;
    color: red;
    float: right;
    text-decoration: underline;
  }
</style>