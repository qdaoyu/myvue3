import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/components/HomePage'
import Login from '@/components/Login'
import dupNameJudge from '@/components/DupNameJudge'
import Page404 from '@/components/pageError/page404'
import Home from '@/components/Home'
import Test1 from '@/views/Test1'
import Test2 from '@/views/Test2'
import Test3 from '@/views/Test2'
import TextareaInput from '@/components/TextAreaInput'
import TempMenu from '@/components/TempMenu'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
      hidden: true,
    },
    {
      path: '/textInput',
      name: 'TextareaInput',
      component: TextareaInput,
      hidden: true,
    },
    {
      path: '/tempMenu',
      name: 'TempMenu',
      component: TempMenu,
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
