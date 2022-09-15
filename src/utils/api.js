//拦截器
import axios from "axios";
import {
  Message
} from "element-ui";
import router from '../router'

axios.default.timeout = 500000

//请求拦截器
axios.interceptors.request.use(config => {
  //拿tokenStorage,如果存在token,请求携带这个token
  console.log("测试请求是否被拦截")
  if (window.localStorage.getItem('tokenStr')) {
    console.log("进来")
    config.headers['Authorization'] = window.localStorage.getItem('tokenStr')
    console.log("出去")
  }
  return config;
}, error => {
  console.log(error)
})


//响应拦截器
axios.interceptors.response.use(success => {
  //业务逻辑错误
  // Message.error({Message:'服务器被吃了'})

  console.log(window.localStorage.getItem("token"))
  console.log(success.data)
  if (success.status && success.status == 200) {
    // console.log(success.data.code)
    // console.log(success.data)
    if (success.data.code == 500 || success.data.code == 401 || success.data.code == 2001 || success.data.code == 2002 || success.data.code == 403) {
      // console.log(success.data.code)
      Message.error(
        success.data.message
      );
      return;
    };
    if (success.data.code == 2003) {
      Message.error("未授权，请重新登录")
      // this.router.push("/")
      //延时2秒
      setTimeout(function(){
        router.push("/")
        // window.location.href = "http://localhost:8080"
      }, 2000);
      
    };
    if (success.data.code == 2005) {
      Message.error("token过期，请重新登录")
      // this.router.push("/")
      //延时2秒
      setTimeout(function(){
        router.push("/")
        // window.location.href = "http://localhost:8080"
      }, 2000);
      
    }
    if (success.data.message &&  success.data.code == 200) {
      Message.success(
        success.data.message
      )
    }
  }
  console.log(success.data)
  return success.data
}, error => {
  //   console.log("test3")
  if (error.response.code == 504 || error.response.code == 404) {
    Message.error(
      '服务器被吃了'
    )
  } else if (error.response.code == 403) {
    Message.error(
      '权限不足，请联系管理员'
    )
  } else if (error.response.code == 401) {
    Message.error(
      '尚未登录！'
    );
    router.replace('/') //push也可以

  } else {
    // console.log("test4")
    if (error.response.data.message) {
      Message.error('未知错误！');
    }
  }
  return;
});


let base = "";
//传输json格式的post请求
export const postRequest = (url, params) => {
  return axios({
    method: 'post',
    timeout: 1 * 60 * 100000,
    url: `${base}${url}`,
    data: params
  })
}

//传输json格式的put请求
export const putRequest = (url, params) => {
  return axios({
    method: 'put',
    url: `${base}${url}`,
    data: params
  })
}

//传输json格式的get请求
export const getRequest = (url, params) => {
  return axios({
    method: 'get',
    url: `${base}${url}`,
    data: params
  })
}

//传输json格式的get请求
export const deleteRequest = (url, params) => {
  return axios({
    method: 'delete',
    url: `${base}${url}`,
    data: params
  })
}
