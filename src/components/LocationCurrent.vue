<template>
  <div>
    <div class="temp">
      {{ weatherParsed.temp }}
    </div>
    <div class="description">
      {{ weatherParsed.description }}
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  export default {
    name: 'LocationCurrent',
    computed: mapGetters('currentLocation', ['weatherParsed'])
  }
</script>

<style scoped>
  .temp {
    font-size: 80px;
    text-align: center;
    font-weight: bold;
    text-transform: uppercase;
  }
  .description {
    text-align: center;
  }
</style>