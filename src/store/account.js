import { login } from '@/api/requests';
import { Routes } from '@/constants/routes';
import { baseFormStateObject } from './util/baseFormState';

export const account = {
  namespaced: true,
  state: baseFormStateObject({
    mainKey: 'currentUser',
    mainValue: {},
    errorMessages: { 
      emailRequired: 'Email is required',
      passwordRequired: 'Password is required'
    }
  }),
  getters: {
    usersName(state) { 
      return `${state.currentUser.firstName} ${state.currentUser.lastName}`
    }
  },
  actions: {
    async loginRequest ({ commit }, {payload, router}) { 
      commit('setFetching', true);
      try {
        const currentUser = await login(payload);
        commit('setCurrentUser', currentUser.data.user);
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
    },
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
    },
    setCurrentUser({ commit }, currentUser) {
      commit('setCurrentUser', currentUser);
    }
  },
  mutations: {
    setFetching(state, fetchStatus) {
      state.isFetching = fetchStatus;
    },
    setErrors(state, errors) {
      state.error = errors;
    },
    setCurrentUser(state, currentUser) {
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
      state.currentUser = currentUser;
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