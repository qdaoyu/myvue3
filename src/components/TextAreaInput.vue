<template>
    <div class="textArea">
        <div class="textContainer">
            <el-input type="textarea" :rows="6" placeholder="请输入内容，若数据量大请利用剪切板" v-model="textarea">
            </el-input>
            <br />
            <br />
            <br />
            <el-select @change="selectChange" v-model="value" placeholder="请选择">
                <el-option  v-for="item in options" :key="item.value" :label="item.label" :value="item.value"
                    :disabled="item.disabled">
                </el-option>
            </el-select>
            <el-button size="small" type="primary" @click="calDupName">重名提醒</el-button>
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
            selectLabel:""

        }
    },
    methods: {
        selectChange(val){
             this.selectLabel = this.options.find( item => item.value ==val).label
        }
        ,
        calDupName() {
            if (this.textarea != "" && this.value != "") {
                
                // let timeout = parseInt(30000);
                this.$axios({
                    method: "post",
                    // url: "http://localhost:8082/login",
                    url: "/api/calDupName",
                    timeout:1 * 60 * 100000,
                    headers: {
                        "Content-Type": "application/json",
                    },
                    data: { "textArea": this.textarea, "label": this.selectLabel }
                }).then(
                    res => {
                        if (res.code == 200) {
                            console.log(res)
                            this.$message.success(JSON.stringify(res.data))
                            
                            //跳转页面

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