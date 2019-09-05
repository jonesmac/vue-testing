import Vue from 'vue'
import Vuex from 'vuex'
import { account } from './account';
import { locations } from './locations';

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    account,
    locations
  },
  strict: debug
})
