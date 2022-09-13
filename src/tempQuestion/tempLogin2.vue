<template>
    <div class="login">
        <el-form 
        ref="loginForm" 
        :rules="rules" 
        v-loading="loading"
        element-loading-text="正在登陆..."
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0,0,0,0.8)"
        :model="loginForm" 
        class="loginContainer">
            <h3 class="loginTitle">系统登录</h3>
            <el-form-item prop="username">
                <el-input type="text" auto-complete="false" v-model="loginForm.username" placeholder="请输入用户名">
                </el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input type="password" auto-complete="false" v-model="loginForm.password" placeholder="请输入密码">
                </el-input>
            </el-form-item>
            <!-- <el-form-item prop="code">
                <el-input type="text" auto-complete="false" v-model="loginForm.code" placeholder="点击图片更换二维码"
                    style="width:250px;margin-right:5px"></el-input>
                <img :src="captchaUrl" @click="updateCaptcha">
            </el-form-item> -->
            <el-checkbox v-model="checked" class="loginRemember">记住我</el-checkbox>
            <el-button type="primary" style="width:100%" @click="submitLogin">登录</el-button>
        </el-form>
    </div>
</template>
  
<script>
import axios from 'axios';

export default {
    name: 'Login2',
    data() {
        return {
            captchaUrl: "/captcha?time=" + new Date(),
            loginForm: {
                username: "",
                password: "",
                // code: ""
            },
            loading:false,
            checked: true,
            rules: {
                username: [{ required: true, message: "请输入用户名", trigger: 'blur' }],
                password: [{ required: true, message: "请输入密码", trigger: 'blur' }],
                // code: [{ required: true, message: "请输入验证码", trigger: 'blur' }],
            }
        }
    },
    methods: {
        submitLogin() {
            this.$refs.loginForm.validate((valid) => {
                if (valid) {
                    //校验用户名和密码是否正确;
                    this.loading = true;
                    this.$axios({
                        method: "post",
                        // url: "http://localhost:8082/login",
                        url: "/api/login",
                        headers: {
                            'Content-Type': 'multipart/form-data',
                        },
                        data: this.loginForm
                    }).then(
                        res => {
                            this.loading = false
                            console.log(res)
                            if (res){
                                if ( res.code == 200) {
                                //存储用户token
                                // const tokenStr = res.obj.tokenHead+res.obj.token
                                // window.sessionStorage.setItem("tokenStr",tokenStr)
                                // this.$message.success("帐号密码正确")
                                // console.log(res.data)
                                console.log(res)
                                //跳转页面
                                
                            }else{
                                // this.$message.error("帐号密码错误")
                                console.log(res)
                                console.log("失败")
                            }
                            }
                            

                        }, err => {
                        });
                } else {
                    this.$message.error("请输入所有字段!");
                    return false;
                }
            });
        },

        //校验用户名和密码是否正确;
        // this.$axios({
        //                     method: "post",
        //                     url: "http://127.0.0.1:8082/login",
        //                     headers: {
        //                         'Content-Type': 'multipart/form-data',
        //                     },
        //                     data: form
        //                 }).then(
        //                     res => {

        //                     }, err => {
        //                     });
        //             } else {
        //                 this.$message.error("请输入所有字段!");
        //                 return false;
        //             }
        // axios
        //                 .post("/login", {
        //                     name: this.loginForm.username,
        //                     password: this.loginForm.password
        //                 })
        //                 .then(res => {
        //                     // console.log("输出response.data.status", res.data.status);
        //                     if (res.data.status === 200) {
        //                         console.log(this.$message.success("帐号密码正确"))
        //                         // this.$router.push({ path: "/personal" });
        //                     } else {
        //                         alert("您输入的用户名或密码错误！");
        //                     }
        //                 });
        //     //判断所有
        //     this.$refs.loginForm.validate((valid) => {
        //         if (valid) {

        //             //     this.$axios.post("/login").then(response =>{
        //             //         // if response.data == 
        //             //     },error =>{
        //             //         console.log(error.message)
        //             //     })
        //             //     this.$message.success("登录成功");
        //             // } else {
        //             //     this.$message.error("请输入所有字段!");
        //             //     return false;
        //             // }
        //             console.log("123")

        //         }else{
        //             console.log("123")
        //         }
        //     )   
        //     // 校验用户名和密码是否正确;
        //     // this.$router.push({ path: "/personal" });

        // },
        updateCaptcha() {
            this.captchaUrl = '/captcha?time' + new Date();
        }
    }
}
</script>
  
<style scoped>
.login {
    width: 100%;
    height: 100%;
    background: url("../assets/zhuling.jpg") no-repeat;
    background-size: cover;
    overflow: hidden;
}

.loginContainer {
    border-radius: 15px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 15px 35px 15px 35px;
    background: rgb(255, 255, 255);
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cacac6;
    text-align: left;
    opacity: 0.85;
}

.loginTitle {
    margin: 0px auto 40px auto;
    text-align: center;
}

.loginRemember {
    text-align: left;
    margin: 0px 0px 15px 0px;
}
</style>