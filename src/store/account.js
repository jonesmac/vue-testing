import { login } from '@/api/requests';
import { Routes } from '@/constants/routes';

export const account = {
  namespaced: true,
  state: {
    currentUser: null,
    isFetching: false,
    error: null,
    messages: [],
    errorMessages: {
      emailRequired: 'Email is required',
      passwordRequired: 'Password is required'
    },
    cssClass: ''
  },
  getters: {
    currentUser(state) { return state.currentUser; },
    isFetching(state) { return state.isFetching; },
    messages(state) { return state.messages; },
    cssClass(state) { return state.cssClass; }
  },
  actions: {
    async loginRequest ({ commit }, {payload, router}) { 
      commit('setFetching', true);
      try {
        const currentUser = await login(payload);
        commit('setCurrentUser', currentUser.data);
        commit('setCSSclass', 'pure-alert-success');
        commit('addMessage', 'Logged In Successfully!');
        // Wait a bit to allow for real world feel
        setTimeout(() => {
          router.push(Routes.LOCATIONS);
        }, 2000)
      } catch (error) {
        commit('setErrors', error);
        commit('setCSSclass', 'pure-alert-error');
        commit('addMessage', 'Login Request Failed');
      }
      commit('setFetching', false);
    }, // -> dispatch('account/login')
    validateLoginFields({ commit, state }, payload) {
      commit('resetMessages');
      if (!payload.email) {
        commit('addMessage', state.errorMessages.emailRequired);
        commit('setCSSclass', 'pure-alert-error');
      }
      if (!payload.password) {
        commit('setCSSclass', 'pure-alert-error');
        commit('addMessage', state.errorMessages.passwordRequired);
      }
    } // -> dispatch('account/validateLoginFields')
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
    }, // -> commit('account/setCurrentUser')
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