import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import { Routes } from './constants/routes';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: `/${Routes.HOME}`,
      name: Routes.HOME,
      component: Home
    },
    {
      path: `/${Routes.ABOUT}`,
      name: Routes.ABOUT,
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: `/${Routes.LOGIN}`,
      name: Routes.LOGIN,
      component: () => import(/* webpackChunkName: "Login" */ './views/Login.vue')
    },
    {
      path: `/${Routes.LOCATIONS}`,
      name: Routes.LOCATIONS,
      component: () => import(/* webpackChunkName: "Login" */ './views/Locations.vue')
    }
  ]
})
