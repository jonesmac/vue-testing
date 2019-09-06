import { deleteLocation } from '@/api/requests';

export const removeLocation = {
  state: {
    isFetching: false,
    messages: [],
    errorMessages: {
      deleteFailed: 'Failed to Delete Location'
    }
  },
  getters: {},
  actions: {
    async deleteLocation ({ commit, dispatch, state }, id) {
      commit('setFetching', true);
      commit('resetMessages');
      try {
        const removedLocation = await deleteLocation(id);
        commit('setCSSclass', 'pure-alert-success');
        setTimeout(() => commit('addMessage', removedLocation.data.message));
        setTimeout(() => commit('resetMessages'), 5000);
        dispatch('getLocations');
      } catch (error) {
        commit('setErrors', error);
        commit('setCSSclass', 'pure-alert-error');
        commit('addMessage', state.errorMessages.deleteFailed);
      }
      commit('setFetching', false);
    },
  },
  mutations: {
    setFetching(state, fetchStatus) {
      state.isFetching = fetchStatus;
    },
    setErrors(state, errors) {
      state.error = errors;
    },
    addMessage(state, message) {
      state.messages.push(message);
    }
  },
}