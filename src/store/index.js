import Vue from 'vue'
import Vuex from 'vuex'
import { account } from './account';
import { locations } from './locations';
import { currentLocation } from './currentLocation';

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    account,
    locations,
    currentLocation
  },
  strict: debug
})
