import Vue from 'vue'
import Router from 'vue-router'
import FlipletRSS from '@/components/FlipletRSS'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'FlipletRSS',
      component: FlipletRSS
    }
  ]
})
