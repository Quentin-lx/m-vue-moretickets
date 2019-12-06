import Vue from 'vue'
import VueRouter from 'vue-router'
import Common from '../views/common.vue'
import Index from '../views/index.vue'
import Shows from '../views/shows.vue'
import Mine from '../views/mine.vue'
import Selectcity from '../views/selectcity.vue'
import shows_all from '../views/shows_all.vue'
import shows_concert from '../views/shows_concert.vue'
import shows_opera from '../views/shows_opera.vue'
import shows_parenting from '../views/shows_parenting'
import shows_exhibition from '../views/shows_exhibition'
import shows_concertt from '../views/shows_concertt'
import shows_dance from '../views/shows_dance'
import shows_quyizatan from '../views/shows_quyizatan'
import shows_match from '../views/shows_match'

import Detail from '../views/detail'
import Login from '../views/login'
import Search from '../views/search'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/common/index'
  },
  {
    path:'/common',
    name:'common',
    component:Common,
    children:[
      {
        path:'index',
        name:'index',
        component:Index
      },
      {
        path:'shows',
        name:'shows',
        component:Shows,
        redirect: '/common/shows/1101-all',
        children:[
          {
            path:'1101-all',
            name:'1101-all',
            meta:1,
            component:shows_all
          },
          {
            path:'1101-concert',
            name:'1101-concert',
            meta:2,
            component:shows_concert
          },
          {
            path:'1101-opera',
            name:'1101-opera',
            meta:3,
            component:shows_opera
          },
          {
            path:'1101-match',
            name:'1101-match',
            meta:4,
            component:shows_match
          },
          {
            path:'1101-concertt',
            name:'1101-concertt',
            meta:5,
            component:shows_concertt
          },
          {
            path:'1101-exhibition',
            name:'1101-exhibition',
            meta:6,
            component:shows_exhibition
          },
          {
            path:'1101-dance',
            name:'1101-dance',
            meta:7,
            component:shows_dance
          },
          {
            path:'1101-parenting',
            name:'1101-parenting',
            meta:8,
            component:shows_parenting
          },
          {
            path:'1101-quyizatan',
            name:'1101-quyizatan',
            meta:9,
            component:shows_quyizatan
          },
        ]
      },
      {
        path:'mine',
        name:'mine',
        component:Mine
      }
    ]
  },
  {
    path:'/selectcity',
    name:'selectcity',
    component:Selectcity
  },
  {
    path:'/detail',
    name:'detail',
    component:Detail
  },
  {
    path:'/login',
    name:'login',
    component:Login
  },
  {
    path:'/search',
    name:'search',
    component:Search
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
