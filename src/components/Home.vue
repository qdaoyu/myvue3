<template>
    <div class="menu">
        <el-container>
            <el-header class="homeHeader">
                <div class="title"> 秋刀🐟</div>
                <el-dropdown>
                    <span class="el-dropdown-link">
                        {{user.name}}<i img :src="user.userface"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>个人中心</el-dropdown-item>
                        <el-dropdown-item>设置</el-dropdown-item>
                        <el-dropdown-item>注销登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-header>
            <el-container>
                <el-aside style="width:180px;height: 800px;">
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
            user: JSON.parse(window.localStorage.getItem("user"))
        }
    },
    methods: {
        // menuClick(index){

        //     this.$router.push(index)
        // }
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
</style>