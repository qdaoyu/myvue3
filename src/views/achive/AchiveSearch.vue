<template>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="Name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="Phone"
        label="手机"
        width="180">
      </el-table-column>
      <el-table-column
        prop="Username"
        label="用户名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="Namezh"
        label="角色"
        width="180">
      </el-table-column>
      <el-table-column
        prop="Address"
        label="地址"
        width="280">

      </el-table-column>
    </el-table>
  </template>

<script>
export default{
    name :"AchieveSearch",
    data(){
        return {
            tableData:[],
        }
    },
    mounted(){
        this.initUserInfo();
    },
    methods:{
        initUserInfo(){
            this.getRequest("/api/achieve/sy/info/search").then(resp=>{
                if(resp){
                    var arr = []
                    arr.push(resp.data)
                    this.tableData = arr
                }
            })
        }
    }


}
</script>
<style scoped>

</style>