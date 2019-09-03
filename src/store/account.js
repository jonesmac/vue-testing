import { login } from '@/api/requests';

export const account = {
  namespaced: true,
  state: {
    currentUser: null,
    isFetching: false,
    error: null
  },
  getters: {
    currentUser(state) { return state.currentUser; },
    isFetching(state) { return state.isFetching; }
  },
  actions: {
    async loginRequest ({ commit }, payload) { 
      commit('setFetching', true);
      try {
        const currentUser = await login(payload);
        commit('setCurrentUser', currentUser.data);
      } catch (error) {
        commit('setErrors', error);
      }
      commit('setFetching', false);
    } // -> dispatch('account/login')
  },
  mutations: {
    setFetching(state, fetchStatus) {
      state.isFetching = fetchStatus;
    }, // -> commit('account/isFetching')
    setErrors(state, errors) {
      state.error = errors;
    }, // -> commit('account/setErrors')
    setCurrentUser(state, currentUser) {
      state.currentUser = Object.freeze(currentUser);
    } // -> commit('account/setCurrentUser')
  },
}