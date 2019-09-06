export const API = {
  USERS: {
    LOGIN: `${process.env.VUE_APP_API_BASE}/login`
  },
  LOCATIONS: {
    GET_ALL: `${process.env.VUE_APP_API_BASE}/locations`,
    CREATE: `${process.env.VUE_APP_API_BASE}/locations/new`,
    DELETE: `${process.env.VUE_APP_API_BASE}/locations/delete`
  },
  WEATHER: {
    GET: 'https://api.openweathermap.org/data/2.5/weather'
  }
}