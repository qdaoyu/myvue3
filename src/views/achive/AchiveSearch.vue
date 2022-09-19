<template>
  <div>
    <el-table :data="tableData" style="width: 100%" height="750" v-loading="loading" element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading" element-loading-background="rgba(0, 0, 0, 0.8)">
      <el-table-column fixed prop="Id" label="序号" width="100">
      </el-table-column>
      <el-table-column prop="Area" label="区域" width="100">
      </el-table-column>
      <el-table-column prop="Depart" label="部门" width="100">
      </el-table-column>
      <el-table-column prop="Post" label="岗位" width="100">
      </el-table-column>
      <el-table-column prop="Hireday" label="入职日期" width="100">
      </el-table-column>
      <el-table-column prop="St_attendance" label="标准出勤" width="100">
      </el-table-column>
      <el-table-column prop="Ac_attendance" label="实际出勤" width="100">
      </el-table-column>
      <el-table-column prop="Restday" label="休息" width="100">
      </el-table-column>
      <el-table-column prop="Leaveday" label="请假" width="100">
      </el-table-column>
      <el-table-column prop="Absenteeism" label="旷工" width="100">
      </el-table-column>
      <el-table-column prop="Yq_close" label="疫情闭店" width="100">
      </el-table-column>
      <el-table-column prop="Overtime" label="加班" width="100">
      </el-table-column>
      <el-table-column prop="Business_travel" label="出差" width="100">
      </el-table-column>
      <el-table-column prop="Basesalary" label="底薪" width="100">
      </el-table-column>
      <el-table-column prop="Wx_achieve" label="纹绣业绩" width="100">
      </el-table-column>
      <el-table-column prop="Pf_achieve" label="皮肤业绩" width="100">
      </el-table-column>
      <el-table-column prop="Zc_achieve" label="专场业绩" width="100">
      </el-table-column>
      <el-table-column prop="Gd_achieve" label="光电业绩" width="100">
      </el-table-column>
      <el-table-column prop="Bs_achieve" label="补色业绩" width="100">
      </el-table-column>
      <el-table-column prop="Shop_achieve" label="门店业绩" width="100">
      </el-table-column>
      <el-table-column prop="Wxpf_commission" label="纹绣/皮肤提成" width="100">
      </el-table-column>
      <el-table-column prop="Zc_commission" label="专场提成" width="100">
      </el-table-column>
      <el-table-column prop="Gd_commission" label="光电提成" width="100">
      </el-table-column>
      <el-table-column prop="Bs_commission" label="补色提成" width="100">
      </el-table-column>
      <el-table-column prop="shop_commission" label="门店提成" width="100">
      </el-table-column>
      <el-table-column prop="Achievement" label="绩效" width="100">
      </el-table-column>
      <el-table-column prop="Subsidy" label="补贴" width="100">
      </el-table-column>
      <el-table-column prop="Handcost" label="手工费" width="100">
      </el-table-column>
      <el-table-column prop="Ac_basesalary" label="实发底薪" width="100">
      </el-table-column>
      <el-table-column prop="Deduction" label="考勤扣款" width="100">
      </el-table-column>
      <el-table-column prop="Month_salary" label="本月工资合计" width="100">
      </el-table-column>
    </el-table>
    <div style="display: flex;justify-content: flex-end;">
      <el-pagination 
      background 
      @current-change="currentChange"
      @size-change="sizeChange"
      layout="sizes,prev, pager, next, jumper, ->, total" 
      :total="total">
      </el-pagination>
    </div>
  </div>

</template>

<script>
export default {
  name: "AchieveSearch",
  data() {
    return {
      tableData: [],
      loading: false,
      total:0,
      currentPage:1,
      size:10,
    }
  },
  // mounted() {
  //   this.initSyAchieveInfo();
  // },

  mounted() {
    this.initSyAchieveInfo();
  },
  methods: {
    initSyAchieveInfo() {
      this.loading = true
      console.log("接口:","/api/achieve/sy/info/get?currentPage="+ this.currentPage.toString()+ '&size='+this.size.toString())
      this.getRequest("/api/achieve/sy/info/get?currentPage="+ this.currentPage.toString()+ '&size='+this.size.toString()).then(resp => {
        this.loading = false
        if (resp) {
          var arr = [];
          arr.push(resp.data);
          this.tableData = arr[0];
          this.total = resp.total;
          console.log("this.tableData", this.tableData[0]);
        }
      })
    },
    currentChange(currentPage){
      this.currentPage = currentPage;
      this.initSyAchieveInfo();


    },
    sizeChange(currentSize){
      this.size = currentSize;
      this.initSyAchieveInfo();
    },
    // initSyAchieveInfo() { console.log("123") }
  }


}
</script>
<style scoped>

</style>