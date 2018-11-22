import Vue from 'vue'
import Router from 'vue-router'
import homepage from '../main/homepage'
import animation from '../main/animation'
import game from '../main/game'
import album from '../main/album'
import connection from '../main/connection'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: homepage
    },
    {
      path: "/animation",
      component: animation
    },
    {
      path: "/game",
      component: game
    },
    {
      path: "/album",
      component: album
    },
    {
      path: "/connection",
      component: connection
    }
  ]
})
