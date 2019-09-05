import { getLocations } from '@/api/requests';

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
        commit('addMessage', 'Login Request Failed');
      }
      commit('setFetching', false);
    }
  },
  mutations: {
    setFetching(state, fetchStatus) {
      state.isFetching = fetchStatus;
    }, // -> commit('account/isFetching')
    setErrors(state, errors) {
      state.error = errors;
    }, // -> commit('account/setErrors')
    setLocations(state, locations) {
      state.myLocations = locations;
    }, // -> commit('account/setLocations')
    setCSSclass(state, cssClass) {
      state.cssClass = cssClass;
    },
    resetMessages(state) {
      state.messages = [];
    },
    addMessage(state, message) {
      state.messages.push(message);
    }
  },

}