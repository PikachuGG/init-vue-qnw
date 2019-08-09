import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import CityChoose from '@/pages/travel/components/CityChoose'
import Travel from '@/pages/travel/Travel'
import Music from '@/pages/music/Music'
import Other from '@/pages/other/Other'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect: '/travel',
      children: [
        {
          path: '/travel',
          name: 'travel',
          component: Travel
        },
        {
          path: '/music',
          name: 'music',
          component: Music
        },
        {
          path: '/other',
          name: 'other',
          component: Other
        }
      ]
    },
    {
      path: '/citychoose',
      name: 'city-choose',
      component: CityChoose
    }
  ],
  linkActiveClass: 'active'
})
