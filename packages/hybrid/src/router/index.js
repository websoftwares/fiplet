import Vue from 'vue'
import Router from 'vue-router'
import FlipletRSS from '@/components/FlipletRSS'
import DisplayFeed from '@/components/DisplayFeed'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/rss2feed',
      name: 'FlipletRSS',
      component: FlipletRSS,
    },
    {
      path: '/display-feed',
      name: 'DisplayFeed',
      component: DisplayFeed,
    },
  ],
})
