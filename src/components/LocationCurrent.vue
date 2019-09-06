<template>
  <div class="wrapper">
    <div
      v-if="weather.main.temp"
      class="temp"
    >
      {{ weather.main.temp }}
    </div>
    <div
      v-if="weather.weather[0].description"
      class="description"
    >
      {{ weather.weather[0].description }}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'LocationCurrent',
    props: {
      weather: {
        type: Object,
        default: () => ({
          main: {
            temp: '',
          },
          weather: [
            {
              description: ''
            }
          ]
        })
      }
    }
  }
</script>

<style scoped>
  .temp {
    font-size: 80px;
    text-align: center;
    font-weight: bold;
    text-transform: uppercase;
    padding-top: 20px;
  }
  .description {
    text-align: center;
    text-transform: uppercase;
    letter-spacing: .5px;
    padding-bottom: 30px;
    margin-bottom: 50px;
  }
  .wrapper {
    background: #163B6D;
    color: white;
    
  }

</style>