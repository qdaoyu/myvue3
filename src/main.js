// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import store from './store'


//拦截器全局引入!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// import { postRequest } from './utils/api';  如何使用呢:在组件中使用this.postRequest即为调用
// import { putRequest } from './utils/api';
import { getRequest } from './utils/api';
// import { deleteRequest } from './utils/api'; 
//插件形式使用请求
// Vue.prototype.postRequest = postRequest;
// Vue.prototype.putRequest = putRequest;
Vue.prototype.gettRequest = gettRequest;
// Vue.prototype.deleteRequest = deleteRequest;



Vue.use(ElementUI)
//全局配置
Vue.prototype.$axios = axios
Vue.config.productionTip = false
// axios.defaults.baseURL = '/api'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
