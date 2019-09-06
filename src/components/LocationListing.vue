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
        ({{ location.zipcode }})
      </span>
      <a 
        class="delete"
        @click="deleteLocation(location.id)"
      >
        Delete
      </a>
      <a 
        class="view"
        @click="viewLocation(location.zipcode)"
      >
        View Weather
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
      ...mapActions('currentLocation', ['viewLocation'])
    }
  }
</script>

<style scoped>
  ul {
    display: block;
    margin-bottom: 50px;
  }
  .location .label, .view {
    margin-right: 5px;
  }
  .zipcode {
    font-size: 10px;
  }
  .delete {
    cursor: pointer;
    color: red;
    float: right;
    text-decoration: underline;
  }
  .view {
    cursor: pointer;
    color: blue;
    float: right;
    text-decoration: underline;
  }
</style>