<template>
    <div class="login">
        <div class="login-header">
            企业安全风险分级监控与隐患排查治理监管平台
        </div>
        <div class="login-box">
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="账号" prop="count">
                    <el-input type="text" v-model="ruleForm.count" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pass">
                    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        name:'Login',
        data() {
            let validateCount = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入账号'));
                } else {
                    if (this.ruleForm.pass !== '') {
                        this.$refs.ruleForm.validateField('pass');
                    }
                    callback();
                }
            };
            let validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    callback();
                }
            };
            return {
                ruleForm: {
                    count: '',
                    pass: ''
                },
                rules: {
                    count: [
                        { validator: validateCount, trigger: 'blur' }
                    ],
                    pass: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

<style scoped>
    .login{
        position:absolute;
        width:480px;
        /*height:200px;*/
        top:50%;
        left:50%;
        margin-left:-240px;
        margin-top:-150px;
        border:1px solid #eee;
        padding-bottom:9.25px;
        /*background-color: #a0a0a0;*/
        box-shadow: 0 4px 3px rgba(160,160,160,0.2);
        border-radius: 10px;
    }
    .login-box{
        width:400px;
        /*height:200px;*/
    }
    .login .login-header{
        background-color: #eee;
        height:50px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        line-height: 50px;
        font-size: 18px;
        text-align: center;
        margin-bottom:31.25px;
    }
</style>