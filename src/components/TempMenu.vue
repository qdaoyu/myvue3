<template>
  <div>
    <el-row class="tac">

      <el-col :span="12">
        <h5>临时菜单导航</h5>
        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
          background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>以下为工具箱</span>
            </template>

          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title" @click="toDupName">重名查询</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title" @click="toUpLoad">文件上传</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "TempMenu",
  data() {
    return {
      // activeIndex: '1',
      // activeIndex2: '1'
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    toDupName(){
      this.$router.push("/textInput") 
    },
    toUpLoad(){
      this.$router.push("/dupNameJudge") 
    },
  }
}
</script>