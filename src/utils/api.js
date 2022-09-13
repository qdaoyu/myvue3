//拦截器
import axios from "axios";
import { Message } from "element-ui";
import router from '../router'

//请求拦截器
axios.interceptors.request.use(config=>{
    //拿tokenStorage,如果存在token,请求携带这个token
    if(window.sessionStorage.getItem('tokenStr')){
        config.headers['Authorization'] = windows.sessionStorage.getItem('tokenStr')

    }
    return config;
},error=>{
    console.log(error)
})


//响应拦截器
axios.interceptors.response.use(success => {
    //业务逻辑错误
    // Message.error({Message:'服务器被吃了'})
    // if(success.status && success.status == 200){
    if (success.data.code == 500 || success.data.code == 401 || success.data.code == 403) {
        // console.log("test1")
        Message.error({ Message: success.data.message });
        return;
    }
    if (success.data.message) {
        // console.log("test2")
        Message.success({ Message: success.data.message })
    }
    // }
    return success.data
}, error => {
    console.log("test3")
    if (error.response.code == 504 || error.response.code == 404) {
        Message.error({ Message: '服务器被吃了' })
    } else if (error.response.code == 403) {
        Message.error({ message: '权限不足，请联系管理员' })
    } else if (error.response.code == 401) {
        Message.error({ Message: '尚未登录！' });
        router.replace('/') //push也可以

    } else {
        // console.log("test4")
        if (error.response.data.message) {
            Message.error({ message: '未知错误！' });
        }
    }
    return;
});


let base = "";
//传输json格式的post请求
export const postRequest = (url, params) => {
    return axios({
        method: 'post',
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