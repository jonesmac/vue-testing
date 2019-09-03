import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// CSS Libs
import '../node_modules/pure-css';
import '../node_modules/pure-extras/css/pure-extras.css';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
