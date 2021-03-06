import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import CityChoose from '@/pages/travel/components/CityChoose'
import Travel from '@/pages/travel/Travel'
import Music from '@/pages/music/Music'
import Other from '@/pages/other/Other'
import MusicRecommend from '@/pages/music/pages/MusicRecommend'
import MusicSinger from '@/pages/music/pages/MusicSinger'
import MusicRank from '@/pages/music/pages/MusicRank'
import MusicSearch from '@/pages/music/pages/MusicSearch'
import SongPlay from '@/pages/music/pages/SongPlay'
import Play from '@/pages/music/components/Play'
import MusicSingerPage from '@/pages/music/components/MusicSingerPage'
import SingerDetail from '@/pages/music/components/SingerDetail'
import CanvasBg from '@/common/CanvasBg'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: Home,
    redirect: '/travel',
    children: [{
      path: 'travel',
      name: 'travel',
      component: Travel
    },
    {
      path: 'music',
      name: 'music',
      component: Music,
      redirect: '/music/recommend',
      children: [{
        path: 'recommend',
        name: 'music-recommend',
        component: MusicRecommend
      },
      {
        path: 'singer',
        name: 'music-singer',
        component: MusicSinger
      },
      {
        path: 'rank',
        name: 'music-rank',
        component: MusicRank
      },
      {
        path: 'search',
        name: 'music-search',
        component: MusicSearch
      }
      ]
    },
    {
      path: 'other',
      name: 'other',
      component: Other
    },
    {
      path: 'citychoose',
      name: 'city-choose',
      component: CityChoose
    }
    ]
  },
  {
    path: '/songplay',
    name: 'song-play',
    component: SongPlay,
    children: [{
      path: ':id',
      component: Play
    }]
  },
  {
    path: '/singerpage',
    name: 'music-singer-page',
    component: MusicSingerPage,
    children: [{
      path: ':id',
      component: SingerDetail
    }]
  },
  {
    path: '/canvasbg',
    name: 'canvas-bg',
    component: CanvasBg
  }
  ],
  linkActiveClass: 'active'
})
