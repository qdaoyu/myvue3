import { getRequest } from "./api";

export const initMenu = (router,store) => {
    if (store.state.routes.length > 0){
        return
    } 
    //返回菜单的接口
    getRequest('/api/home').then(data=>{
        console.log(data.data.data)
        if(data.data.data){
            //格式化Router
            let fmtRoutes = formatRoutes(data.data.data);
            //添加到路由router
            router.addRoutes(fmtRoutes);

            //数据 存到vuex里
            store.commit('initRoutes',fmtRoutes);
        }
    })
}

export const formatRoutes = (routes) => {
    let fmtRoutes = []
    routes.forEach(router =>{
        let {
            path,
            component,
            name,
            iconCls,
            children,
        }  = router;
        if (children && children instanceof Array) {
            //递归
            children = formatRoutes(children);
        }
        let fmRouter = {
            path:path,
            name:name,
            iconCls:iconCls,
            children:children,
            component(resolve){
                if (component.startsWith('Home')){
                    require(['../components/'+component+'.vue'],resolve);
                }else if (component.startsWith("UserBasic")){
                    require(['../views/user/'+component+'.vue'],resolve);
                }else if(component.startsWith("Tool")){
                    require(['../views/tool/'+component+'.vue'],resolve);
                }else if(component.startsWith("Sys")){
                    require(['../views/sys/'+component+'.vue'],resolve);
                }else if(component.startsWith("Dashboard")){
                    require(['../views/dashboard/'+component+'.vue'],resolve);
                }else if(component.startsWith("Achive")){
                    require(['../views/achive/'+component+'.vue'],resolve);
                }
                
            }
        }
        fmtRoutes.push(fmRouter)
    });
    return fmtRoutes;
}