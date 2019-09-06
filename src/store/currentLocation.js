import { getWeather } from '@/api/requests';

export const currentLocation = {
  namespaced: true,
  state: {
    weather: {},
    currentLocation: {
      label: '',
      zipcode: ''
    },
    isFetching: false,
    error: null,
    errorMessages: {
      getWeatherFailed: 'Failed to fetch weather'
    }
  },
  getters: {},
  actions: {
    async viewLocation ({ commit, state }, { zipcode, label }){
      commit('setFetching', true);
      commit('resetMessages');
      commit('setCurrentLocation', { zipcode, label });
      commit('setWeather', {});
      try {
        const weather = await getWeather(zipcode);
        commit('setWeather', weather.data);
        commit('setCSSclass', 'pure-alert-success');
      } catch (error) {
        commit('setErrors', error);
        commit('setCSSclass', 'pure-alert-error');
        commit('addMessage', state.errorMessages.getWeatherFailed);
      }
      commit('setFetching', false);
    }
  },
  mutations: {
    setFetching(state, fetchStatus) {
      state.isFetching = fetchStatus;
    },
    setErrors(state, errors) {
      state.error = errors;
    },
    setWeather(state, weather) {
      state.weather = weather;
    },
    setCSSclass(state, cssClass) {
      state.cssClass = cssClass;
    },
    resetMessages(state) {
      state.messages = [];
    },
    addMessage(state, message) {
      state.messages.push(message);
    },
    setCurrentLocation(state, location) {
      state.currentLocation = location;
    }
  }
}