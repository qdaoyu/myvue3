import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/components/HomePage'
import login from '@/components/Login'
import my from '@/components/My'
import dupNameJudge from '@/components/DupNameJudge'
import Login2 from '@/components/Login2'
import Page404 from '@/components/pageError/page404'
import tempLogin2 from '@/tempQuestion/tempLogin2'
import Home from '@/components/Home'
import Test1 from '@/views/Test1'
import Test2 from '@/views/Test2'
import Test3 from '@/views/Test2'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login,
      hidden: true,
    },
    {
      path: '/page404',
      name: 'Page404',
      component: Page404,
      // hidden: false,
      children: [
        {
          path: '/test3',
          name: '选项3',
          component: Test3
        },
      ]
    },
    {
      path: '/',
      name: 'Login2',
      component: Login2,
      hidden: true,
    },
    {
      path: '/tempLogin2',
      name: 'tempLogin2',
      component: tempLogin2,
      hidden: true,
    },
    {
      path: '/dupNameJudge',
      name: 'dupNameJudge',
      component: dupNameJudge,
      hidden: true,
    },
    {
      //动态渲染
      path: '/home',
      name: '导航一',
      component: Home,
      children: [
        {
          path: '/test1',
          name: '选项1',
          component: Test1
        },
        {
          path: '/test2',
          name: '选项2',
          component: Test2
        },
      ]
    },



  ],
  // mode:history

})
