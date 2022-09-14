<template>
    <div class="menu">
        <el-container>
            <el-header>Header</el-header>
            <el-container>
                <el-aside width="200px">
                    <!-- select菜单激活回调 -->
                    <!-- <el-menu @select="menuClick"> -->
                    <!-- v-if  v-show this.$router.options.routes-->
                    <el-menu router unique-opened>
                        <el-submenu index="index+''" v-for="(item,index) in routes" :key="index" v-if="!item.hidden">
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>{{item.name}}</span>
                            </template>
                            <!-- <el-menu-item-group > -->
                            <!-- <template slot="title">分组一</template> -->
                            <el-menu-item :index="children.path" v-for="(children,indexj) in item.children"
                                :key="indexj">{{children.name}}</el-menu-item>
                            <!-- </el-menu-item-group> -->
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
export default {
    name: "Home",
    methods: {
        // menuClick(index){

        //     this.$router.push(index)
        // }
    },
    computed:{
        routes(){
            return this.$store.state.routes;
        }
    }

}
</script>

<style scoped>
.menu {
    text-align: left;
}
</style>