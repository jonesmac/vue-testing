import { baseFormStateObject } from './util/baseFormState';
import { saveLocation } from '@/api/requests';

export const newLocationForm = {
  state: baseFormStateObject({
    mainKey: 'newLocation',
    mainValue: {},
    errorMessages: {
      labelRequired: 'Please provide a label',
      zipcodeRequired: 'Please provide a zipcode',
      saveFailed: 'Unable to Save Location'
    }
  }),
  getters: {},
  actions: {
    async addLocation ({ commit, dispatch, state }, payload) {
      commit('setFetching', true);
      commit('resetMessages');
      try {
        const newLocation = await saveLocation(payload);
        commit('newLocation', newLocation);
        commit('setCSSclass', 'pure-alert-success');
        dispatch('getLocations')
      } catch (error) {
        commit('setErrors', error);
        commit('setCSSclass', 'pure-alert-error');
        commit('addMessage', state.errorMessages.saveFailed);
      }
      commit('setFetching', false);
    },
    validateNewLocationFields({ commit, state }, payload) {
      commit('resetMessages');
      if (!payload.label) {
        commit('addMessage', state.errorMessages.labelRequired);
        commit('setCSSclass', 'pure-alert-error');
      }
      if (!payload.zipcode) {
        commit('setCSSclass', 'pure-alert-error');
        commit('addMessage', state.errorMessages.zipcodeRequired);
      }
    },
  },
  mutations: {
    setFetching(state, fetchStatus) {
      state.isFetching = fetchStatus;
    },
    setErrors(state, errors) {
      state.error = errors;
    },
    newLocation(state, locations) {
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
    }
  },
}