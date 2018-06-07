import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Lists from '@/components/Lists'
import Search from '@/components/Search';
import Detail from '@/components/Detail';
import Player from '@/components/Player';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/lists/:type/:area/:year',
      name: 'lists',
      component: Lists
    }, {
      path: '/search/:kw',
      name: 'search',
      component: Search
    }, {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    }, {
      path: '/play/:id/:type/:index',
      name: 'play',
      component: Player,
    }
  ]
})
