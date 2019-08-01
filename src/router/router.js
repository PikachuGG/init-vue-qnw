import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import CityChoose from '@/pages/travel/components/CityChoose'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/citychoose',
      name: 'city-choose',
      component: CityChoose
    }
  ]
})
