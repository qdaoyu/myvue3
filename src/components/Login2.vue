<template>
    <div class="login">
        <el-form 
        ref="loginForm" 
        :rules="rules" 
        v-loading="loading"
        element-loading-text="正在登录..."
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
import { postRequest } from '../utils/api';

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
                    })

                    // postRequest("/api/login",this.loginForm)
                    .then(
                        res => {
                            this.loading = false;
                            console.log(res)
                            if (res){
                                if ( res.code == 200) {
                                //存储用户token
                                // const tokenStr = res.obj.tokenHead+res.obj.token
                                // window.sessionStorage.setItem("tokenStr",tokenStr)
                                // this.$message.success("帐号密码正确")
                                console.log(res)
                                // console.log(res.message)
                                //跳转页面
                                
                            }else{
                                // this.$message.error("帐号密码错误")
                                this.$message.error(res)
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
        updateCaptcha() {
            this.captchaUrl = '/captcha?time' + new Date();
        }
    }
}
</script>
  
<style scoped>
.login {
    width: 100%;
    height: 960px;
    background: url("../assets/boniu.jpg") no-repeat;
    background-size: cover;
    overflow: hidden;
}

.loginContainer {
    border-radius: 15px;
    background-clip: padding-box;
    margin: 350px auto;
    width: 350px;
    padding: 15px 35px 15px 35px;
    background: rgb(255, 255, 255);
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cacac6;
    text-align: left;
    opacity: 0.8;
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