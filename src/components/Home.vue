<template>
    <div class="menu">
        <el-container>
            <el-header>Header</el-header>
            <el-container>
                <el-aside style="left: 100px;width:200px;height: 800px;" >
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
    methods: {
        // menuClick(index){

        //     this.$router.push(index)
        // }
    },
    computed:{
	routes() {
      return this.$store.state.routes;//原本是：this.$router.options.routes;
    //   return this.$router.options.routes;
    }
}

}
</script>

<style scoped>
.menu {
    /* text-align: left; */
    /* background: url("../assets/风景.jpg") no-repeat; */
}
</style>