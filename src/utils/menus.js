import { getRequest } from "./api";

export const initMenu = (router,store) => {
    if (store.state.routes.length > 0){
        return
    } 
    //返回菜单的接口
    gerRequest('/system/config/menu').then(data=>{
        if(data){
            //格式化Router
            let fmtRoutes = formatRoutes(data);
            //添加到路由router
            router.addRoutes(fmtRoutes)

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
        let fmtRouter = {
            path:path,
            name:name,
            iconCls:iconCls,
            children:children,
            component(resolve){
                if (component.startsWith("user")){
                    require(['../views/user/'+component+'.vue'],resolve);
                }else if(component.startsWith("tool")){
                    require(['../views/tool/'+component+'.vue'],resolve);
                }else if(component.startsWith("sys")){
                    require(['../views/sys/'+component+'.vue'],resolve);
                }else if(component.startsWith("dashboard")){
                    require(['../views/dashboard/'+component+'.vue'],resolve);
                }else if(component.startsWith("achive")){
                    require(['../views/achive/'+component+'.vue'],resolve);
                }
                
            }
        }
        fmtRoutes.push(fmtRouter)
    });
    return fmtRoutes;
}