<template>
  <div class="wrapper">
    <div class="temp">
      {{ weather.main.temp }}
    </div>
    <div class="description">
      {{ weather.weather[0].description }}
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  export default {
    name: 'LocationCurrent',
    computed: {
      ...mapState('currentLocation', ['weather'])
    }
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
    text-transform: uppercase;
    letter-spacing: .5px;
  }
  .wrapper {
    background: #163B6D;
    color: white;
    padding: 20px 0 30px;
    margin-bottom: 50px;
  }

</style>