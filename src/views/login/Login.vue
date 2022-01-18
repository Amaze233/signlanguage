<template>
  <div class="body">
    <!--引入粒子特效-->
    <vue-particles
        color="#409EFF"
        :particleOpacity="0.7"
        :particlesNumber="60"
        shapeType="circle"
        :particleSize="6"
        linesColor="#409EFF"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push">
    </vue-particles>
    <el-form ref="loginForm"  label-width="60px" class="login-box" >
      <h3 class="login-title">欢迎登录</h3>
      <el-form-item label="账号" prop="username">
        <el-input type="text" prefix-icon="el-icon-user-solid"  placeholder="请输入账号" v-model="loginForm.teamName" clearable/>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" prefix-icon="el-icon-lock" placeholder="请输入密码" show-password v-model="loginForm.teamPassword" clearable/>
      </el-form-item>
      <div style="display: flex; margin-left: 20%">
        <el-form-item>
          <el-button type="primary" plain @click="login" >登录</el-button>
        </el-form-item>
        <el-form-item >
          <el-button type="primary" v-on:click="toRevise()" >修改密码</el-button>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>


<script>

import Lizi from "../../components/Lizi";
import request from "../../utils/request";

export default {
  name: 'LoginTest' ,
  data () {
    return {
      loginForm: {
        teamName: '',
        teamPassword: ''
      },
      // rules: {
      //   username: [
      //     {required: true, message: '请输入用户名', trigger: 'blur'},
      //   ],
      //   password: [
      //     {required: true, message: '请输入密码', trigger: 'blur'},
      //   ],
      // },
    }
  },
  components:{
    Lizi
  },
  created() {
    // console.log(sessionStorage.getItem("team"))
  },
  methods: {
    login () {
      request.post("/api/login", this.loginForm).then(res => {
        if (res["code"] === '0') {
          // location.reload() //强制刷新效果不好
          this.$notify({
            title: '登录成功',
            message: res.data.teamName +', 欢迎进入运动会管理系统!',
            type: 'success',
            duration: 5000,
            offset: 50
          })
          sessionStorage.setItem("team", JSON.stringify(res.data))  // 缓存用户信息
          // console.log(sessionStorage.getItem("team"))
          //获取队伍表单
          request.get('/api/team',{
            params:{
              search: JSON.parse(sessionStorage.getItem("team")).teamName
            }
          }).then(res =>{
            sessionStorage.setItem("teamList", JSON.stringify(res.data))  // 缓存用户信息
          })
          this.$router.push("/home")  //登录成功之后进行页面的跳转，跳转到主页
        } else {
          this.$message({
            type: "error",
            message: res["msg"],
            duration: 2000,
            offset: 50
          })
        }
      })
    },
    toRevise(){
      this.$router.push('/revise');
    }
  }
}

</script>

<style scoped>

.body{
  background-size: cover;
}


.login-box{
  border: 1px solid #DCDFE6;
  width: 600px;
  height: 400px;
  position: absolute;
  top:0;
  right:0;
  bottom:0;
  left:0;
  margin: auto;
  padding:60px 35px 65px 35px;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  box-shadow:0 0 25px #909399;
}

.login-title{
  text-align:center;
  margin:0 auto 40px auto;
  color:#303133;
}

</style>

