<template>
    <!-- 用户表单 -->
    <div class="form-box">
        <div class="title">
            <img src="../assets/images/form-title.png" alt="">
        </div>
        <div class="form-label">
            <el-form ref="form" :model="form" :rules="rules" label-width="80px">
                <el-form-item label="您的姓名：" prop="name">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="您的电话：" prop="phone">
                    <el-input v-model="form.phone"></el-input>
                </el-form-item>
                <el-form-item label="您的工作单位："prop="units">
                    <el-input v-model="form.units"></el-input>
                </el-form-item>
                <el-form-item label="您的电子邮箱：" prop="email">
                    <el-input v-model="form.email"></el-input>
                </el-form-item>
                <el-form-item label="您的邮寄地址：" prop="address">
                    <el-input v-model="form.address"></el-input>
                </el-form-item>
                <el-form-item>
                    <img @click="submitForm('form')" class="submit-img" src="../assets/images/submit.png" alt="">
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    import { fromUserInfo } from '../api/path'
    export default {
        name: "userform",
        data(){
            // 手机号码验证
            var checkPhone = (rule, value, callback)=>{
                let reg = /^1[3|4|5|7|8][0-9]{9}$/
                if (value === '' || value === undefined || value == null){
                    callback()
                }else{
                    if(!reg.test(value)){
                        callback(new Error('请输入正确的手机号'))
                    }else {
                        callback()
                    }
                }
            };
            return{
                form:{
                    name:'',
                    phone:'',
                    units:'',
                    email:'',
                    address:''
                },
                // 表单验证
                rules:{
                    name:[
                        { required: true, message: '请输入您的姓名', trigger: 'blur' },
                    ],
                    phone:[
                        { required: true, message: '请输入您的电话', trigger: 'blur' },
                        { validator: checkPhone, trigger: 'blur' }
                    ],
                    units:[
                        { required: true, message: '请输入您的单位', trigger: 'blur' }
                    ],
                    email:[
                        { required: true, message: '请输入您的邮箱', trigger: 'blur' },
                        { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
                    ],
                    address:[
                        { required: true, message: '请输入您的地址', trigger: 'blur' }
                    ]
                },
                // succeedShow:true
            }
        },
        methods:{
            // 提交信息
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$dialog.confirm({
                            title:'提交',
                            message:'请确认信息填写无误'
                        }).then(()=>{
                            let data = {
                                address:this.form.address,// 地址
                                company:this.form.units, // 单位
                                email:this.form.email,// 邮箱
                                name:this.form.name, // 姓名
                                openId:this.$cookies.get('openId'), // openId
                                phone:this.form.phone, // 电话
                            }
                            fromUserInfo(JSON.stringify(data)).then((result)=>{
                                if(result.code == 200){
                                    this.$toast({
                                        message:'信息以保存',
                                        type:"success",
                                        duration:1500
                                    })
                                }
                            })
                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
        }
    }
</script>

<style scoped lang="scss">
    .form-box{
        width: 100%;
        /*height: 100vh;*/
        background-image: url("../assets/images/useForm.png");
        background-size: cover;
        padding-top: 20%;
        display: flex;
        flex-direction: column;
        align-items: center;
        .title{
            display: flex;
            justify-content: center;
            img{
                width: 40%;
            }
        }
        .form-label{
            height: 70vh;
            width: 90%;
            margin: 20px 0;
            background-image: url("../assets/images/form-img.png");
            background-size: 100% 100%;
            padding-top: 30px;
        }
    }
    .submit-img{
        width: 38%;
        margin-left: 28%;
        margin-top: 10px;
    }
    /deep/ .el-form-item{
        margin-bottom: 15px;
    }
    /deep/ .el-form-item__content{
        line-height: 30px;
    }
    /deep/.el-form-item__label{
        text-align: start;
        line-height: 25px;
        padding: 0 0 0 40px;
        width: 100% !important;
        font-size: 0.8em;
        font-weight: bold;
        letter-spacing: 1px;
        color: #999999;
    }
    /deep/ .el-form-item__content{
        width: 80%;
        margin: 0 auto !important;
    }
</style>