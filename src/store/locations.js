import { getLocations } from '@/api/requests';
import { newLocationForm } from './newLocationForm'

export const locations = {
  namespaced: true,
  state: {
    myLocations: [],
    isFetching: false,
    error: null,
    messages: [],
    errorMessages: {
      labelRequired: 'Label is required',
      zipCodeRequired: 'Zip Code is required'
    },
    cssClass: ''
  },
  getters: {},
  actions: {
    async getLocations ({ commit }) {
      commit('setFetching', true);
      commit('resetMessages');
      try {
        const locations = await getLocations();
        commit('setLocations', locations.data.locations);
        commit('setCSSclass', 'pure-alert-success');
      } catch (error) {
        commit('setErrors', error);
        commit('setCSSclass', 'pure-alert-error');
        commit('addMessage', 'Locations Request Failed');
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
    setLocations(state, locations) {
      state.myLocations = locations;
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
  },
  modules: {
    newLocationForm
  }
}