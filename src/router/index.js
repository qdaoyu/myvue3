import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/components/HomePage'
import login from '@/components/Login'
import my from '@/components/My'
import dupNameJudge from '@/components/DupNameJudge'
import Login2 from '@/components/Login2'
import Page404 from '@/components/pageError/page404'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/page404',
      name: 'Page404',
      component: Page404
    },
    {
      path: '/',
      name: 'Login2',
      component: Login2
    },
    {
      path: '/dupNameJudge',
      name: 'dupNameJudge',
      component: dupNameJudge
    },
    {
      path: '/homePage',
      name: 'homePage',
      component: homePage
    },
  ],
  // mode:history

})
