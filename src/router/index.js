import Vue from 'vue'
import VueRouter from 'vue-router'
import Real_Time from '../views/Real_Time.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Real_Time',
    component: Real_Time
  },
  {
    path: '/audience',
    name: 'Audience',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Audience.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
