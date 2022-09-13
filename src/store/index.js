import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    //可以理解为一个全局的对象，用来保存各组件的公共数据
    state:{
        //所有菜单最后都是渲染成路由的
        routers: []
    },
    //改变stat里的值的方法,同步执行，异步用actions
    mutations: {
        initRoutes(state,data){
            state.routers = data;
        }
    }

})