<template>
    <div class="c1">
        <div>
            <div class="textArea">
                <div class="textContainer">
                    <h2>重名查询</h2>
                    <el-input type="textarea" :rows="6" placeholder="请输入内容，每个名字后面都需要回车换行，若数据量大请利用剪切板"
                        v-model="textarea">
                    </el-input>
                    <br />
                    <br />
                    <br />
                    <div>
                        <b style="font-size: 15px;">事业部:</b>
                        <el-select @change="selectChange" v-model="value" placeholder="请选择">
                            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"
                                :disabled="item.disabled">
                            </el-option>
                        </el-select>
                        <el-button size="small" type="primary" @click="calDupName">点击查询</el-button>
                    </div>





                </div>


            </div>

            <div class="infoShow">
                <div class="subinfoShow">
                    <el-table :data="tableData.tableData01" height="350" border style="width: 100%; box-shadow: 0 0 5px #cacac6;">
                        <el-table-column prop="name" label="同一事业部重名" width="210">
                        </el-table-column>
                    </el-table>
                </div>
                <div class="subinfoShow">
                    <el-table :data="tableData.tableData02" height="350" border style="width: 100%; box-shadow: 0 0 5px #cacac6;">
                        <el-table-column prop="name" label="在职重名" width="210">
                        </el-table-column>
                    </el-table>
                </div>

                <div class="subinfoShow">
                    <el-table :data="tableData.tableData03" height="350" border style="width: 100%; box-shadow: 0 0 5px #cacac6;">
                        <el-table-column prop="name" label="在职与离职人员重名" width="210">
                        </el-table-column>
                    </el-table>
                </div>

                <div class="subinfoShow">
                    <el-table :data="tableData.tableData04" height="350" border style="width: 100%; box-shadow: 0 0 5px #cacac6;">
                        <el-table-column prop="name" label="在职与近两个月离职人员重名" width="210">
                        </el-table-column>
                    </el-table>
                </div>

                <div class="subinfoShow">
                    <el-table :data="tableData.tableData05" height="350" border style="width: 100%; box-shadow: 0 0 5px #cacac6;">
                        <el-table-column prop="name" label="近两个月离职人员重名" width="210">
                        </el-table-column>
                    </el-table>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: "TextareaInput",
    data() {
        return {
            textarea: '',
            options: [{
                value: '选项1',
                label: '总部'
            }, {
                value: '选项2',
                label: '战痘宣颜',
            }, {
                value: '选项3',
                label: '塑颜工匠'
            }, {
                value: '选项4',
                label: '如曼',
                disabled: true,
            }, {
                value: '选项5',
                label: '祛妍堂',
                disabled: true,
            }
                , {
                value: '选项6',
                label: '尚美',
                disabled: true,
            }
                , {
                value: '选项7',
                label: '美丽妆阁',
                disabled: true,
            }],
            value: '',
            selectLabel: "",
            tableData: {
                tableData01: [
                    //     {
                    //     name: '',
                    // },  
                ],
                tableData02: [
                ],
                tableData03: [
                ],
                tableData04: [
                ],
                tableData05: [
                ],

            }
        }
    },
    methods: {
        selectChange(val) {
            this.selectLabel = this.options.find(item => item.value == val).label
        }
        ,
        calDupName() {
            //初始化tableData
            this.tableData.tableData01 = []
            this.tableData.tableData02 = []
            this.tableData.tableData03 = []
            this.tableData.tableData04 = []
            this.tableData.tableData05 = []
            //------------------
            if (this.textarea != "" && this.value != "") {

                // let timeout = parseInt(30000);
                this.$axios({
                    method: "post",
                    // url: "http://localhost:8082/login",
                    url: "/api/calDupName",
                    timeout: 1 * 60 * 100000,
                    headers: {
                        "Content-Type": "application/json",
                    },
                    data: { "textArea": this.textarea, "label": this.selectLabel }
                }).then(
                    res => {
                        if (res.code == 200) {
                            console.log(res)
                            this.$message.success(JSON.stringify(res.data))
                            //渲染5个重名标签
                            //第一个
                            // var lenJson = Object.keys(res.data).length
                            console.log(res.data.Situ01.length)
                            if (res.data.Situ01.length > 0) {
                                for (const i in res.data.Situ01) {
                                    this.tableData.tableData01.push({ "name": res.data.Situ01[i] })
                                }
                            }

                            //第二个
                            if (res.data.Situ02.length > 0) {
                                for (const i in res.data.Situ02) {
                                    this.tableData.tableData02.push({ "name": res.data.Situ02[i] })
                                }
                            }
                            //第三个
                            if (res.data.Situ03.length > 0) {
                                for (const i in res.data.Situ03) {
                                    this.tableData.tableData03.push({ "name": res.data.Situ03[i] })
                                }
                            }

                            //第四个
                            if (res.data.Situ04.length > 0) {
                                for (const i in res.data.Situ04) {
                                    this.tableData.tableData04.push({ "name": res.data.Situ04[i] })
                                }
                            }

                            //第五个
                            if (res.data.Situ05.length > 0) {
                                for (const i in res.data.Situ05) {
                                    this.tableData.tableData05.push({ "name": res.data.Situ05[i] })
                                }
                            }


                        } else {
                            this.$message.error("后端计算失败")
                            console.log("失败")
                        }

                    }, err => {
                        this.$message.error(err)
                    });
            } else {
                this.$message.error("请输入内容")
            }

        }

    }
}
</script>
<style scoped>
.c1 {
    width: 100%;
    height: 960px;
    background: url("../assets/风景.jpg") no-repeat;
    background-size: cover;
    opacity: 0.8;
}

.infoShow {
    text-align: center;
    margin-left: 320px;
}

.subinfoShow {
    float: left;
    /* margin: auto; */
    margin-left: 20px;

}

.textArea {
    width: 100%;
    height: 100%;
    /* background: url("../assets/zhuling.jpg") no-repeat; */
    background-size: cover;
    overflow: hidden;
}

.textContainer {
    border-radius: 15px;
    background-clip: padding-box;
    margin: 100px auto;
    /* 除了顶部距离100px，其他都是自适应 */
    width: 550px;
    padding: 15px 35px 15px 35px;
    background: rgb(255, 255, 255);
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cacac6;
    text-align: center;
    opacity: 0.85;
}
</style>