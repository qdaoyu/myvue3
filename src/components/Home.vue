<template>
    <div class="menu">
        <el-container>
            <el-header class="homeHeader">
                <div class="title"> 秋刀🐟</div>
                <el-dropdown class="userInfo" @command="commandHandler">

                    <span class="el-dropdown-link">
                        <i style="color: aliceblue;">{{user.name}}</i><img src="@/assets/headPic/catHeadPic.png">
                    </span>

                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="userinfo">个人中心</el-dropdown-item>
                        <el-dropdown-item command="setting">设置</el-dropdown-item>
                        <el-dropdown-item command="logout">注销登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-header>
            <el-container>
                <el-aside style="width:200px;height: 800px;">
                    <el-menu router unique-opened>
                        <el-submenu :index="index+''" v-for="(item,index) in routes" :key="index" v-if="!item.hidden">
                            <template slot="title">
                                <i :class="item.iconCls" style="color:#408FF2;margin-right:5px;"></i>
                                <span style="font-size:large;">{{item.name}}</span>
                            </template>
                            <el-menu-item :index="children.path" v-for="(children,indexj) in item.children"
                                :key="indexj" style="font-size:medium;">{{children.name}}</el-menu-item>
                        </el-submenu>
                    </el-menu>


                </el-aside>
                <el-main>
                    <el-breadcrumb separator-class="el-icon-arrow-right" v-if="this.$router.currentRoute.path!='/home'">
                        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
                        <el-breadcrumb-item>{{this.$router.currentRoute.name}}</el-breadcrumb-item>
                    </el-breadcrumb>
                    <div class="homeWelcom" v-if="this.$router.currentRoute.path=='/home'">欢迎来到秋刀鱼塘</div>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
// console.log(window.localStorage.getItem("tokenStr"))
// console.log(this.$store.state.routes)
export default {
    name: "Home",
    data() {
        return {
            user: JSON.parse(window.localStorage.getItem("userInfo"))
        }
    },
    methods: {
        commandHandler(command) {
            if (command == "logout") {
                this.$confirm('此操作将注销登录, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    //清空用户信息，跳转到登录页
                    window.localStorage.removeItem("tokenStr");
                    window.localStorage.removeItem("userInfo");
                    window.localStorage.removeItem("userID");
                    //清空菜单
                    this.$store.commit('initRoutes', [])
                    this.$message.success("注销成功")
                    setTimeout(() => {
                        this.$router.replace("/")
                    }, 1000);
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消注销'
                    });
                });
            }
        }
        ,
    },
    computed: {
        routes() {
            return this.$store.state.routes;//原本是：this.$router.options.routes;
            //   return this.$router.options.routes;
        }
    }

}
</script>

<style scoped>
.homeHeader {
    background: #409eff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
    box-sizing: border-box;
}

.homeHeader .title {
    margin-left: 50px;
    font-size: x-large;
    font-family: 行楷;
    color: white;
    font-style: oblique;
}

.homeHeader .userInfo {
    cursor: hand;


}

.el-dropdown-link img {
    width: 48px;
    height: 48px;
    border-radius: 24px;
    margin-left: 8px;
    margin-bottom: 6px;
}
.homeWelcom{
    text-align: center;
    font-size: 30px;
    font-family: 楷体;
    color: rgb(10, 86, 248);
    padding-top: 50px;

}
</style>