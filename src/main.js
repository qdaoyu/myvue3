// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import store from './store'
import 'font-awesome/css/font-awesome.css'

//拦截器全局引入!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 如何使用呢:在组件中使用this.postRequest即为调用
import { postRequest } from './utils/api';  
import { putRequest } from './utils/api';
import { getRequest } from './utils/api';
import { deleteRequest } from './utils/api'; 
import { initMenu } from './utils/menus';
//插件形式使用请求
Vue.prototype.postRequest = postRequest;
Vue.prototype.putRequest = putRequest;
Vue.prototype.getRequest = getRequest;
Vue.prototype.deleteRequest = deleteRequest;






// 全局前置守卫,跳转之前必须经过经过前置守卫，类似拦截器
router.beforeEach((to,from,next)=>{
  if(window.localStorage.getItem("tokenStr")){
    initMenu(router,store);
    // console.log("测试是否经过前置守卫")
    // console.log(window.localStorage.getItem("userInfo"))
    if(!window.localStorage.getItem("userInfo")){
      console.log("测试是否进入前置守卫")
      getRequest('/api/admin/info').then(resp=>{
        console.log("resp:",resp)
        if(resp){
          console.log("测试是否经过响应")
          //存入用户信息，判断用户信息是否存在
          window.localStorage.setItem('userInfo',JSON.stringify(resp));
          next()
        }
      })
    }
    next();
  }else{
    if(to.path=="/"){
      next()
    }else{
      // window.location.href = "/"
      // next()
      next('/?redirect='+to.path)
    }
  }
    
})



Vue.use(ElementUI)
//全局配置
Vue.prototype.$axios = axios
Vue.config.productionTip = false
// axios.defaults.baseURL = '/api'
/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   store,
//   components: { App },
//   template: '<App/>'
// })
new Vue({
  // el: '#app',
  router,
  store,
  render:h=>h(App)

}).$mount('#app')

//防止手动修改localstorage
// window.addEventListener('storage', (e) => {
//   localStorage.setItem(e.key, e.oldValue)} )