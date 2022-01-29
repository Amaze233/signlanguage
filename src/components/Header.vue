// @ClassName: Header
// @Author: XIAO SIYU
// @Date: 2021/12/23 16:22
// @Version: 1.0
// @Description: TODO


<template>
  <div id="header" >
    <div id="title" @click="toRouter('home')">手语教育</div>
    <div style="flex: 1"></div>
    <div id="input">
      <el-input placeholder="请输入要查询的内容" v-model="input" class="input-with-select">
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </div>
    <div >
      <div id="navLinkBox">
        <div class="navLink" @click="toRouter('home')" v-scroll-to="'#index'">
          主页<em></em>
        </div>
        <div class="navLink" @click="toRouter('home')">
          关于<em></em>
        </div>
        <div class="navLink" @click="toRouter('home')" v-scroll-to="'#lesson'">
          学习<em></em>
        </div>
        <div class="navLink" @click="toRouter('home')" v-scroll-to="'#homework'">
          测试<em></em>
        </div>
      </div>
    </div>
    <el-button type="primary"
               icon="el-icon-user"
               size="small"
               plain
               style="margin: 15px 15% 15px 20px;height: 45px;"
               @click="toRouter('login')"
               v-if="!username">登录/注册</el-button>
    <el-dropdown id="xiala" v-if="username">
      <span class="el-dropdown-link">
        {{username}}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item @click.native="toTeam()">个人设置</el-dropdown-item>
        <el-dropdown-item disabled>我的资源</el-dropdown-item>
        <el-dropdown-item divided @click.native="toRouter('login')" >退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: "Header",
  data(){
    return {
      username: '',
      ifLogin: false,
      input: "",
      inject:['reload']
    }
  },
  methods:{
  toRouter(str){
    this.$router.push('/'+str);
    console.log(str)
    }
  },
  created() {
    let str;
    str = JSON.parse(sessionStorage.getItem("user"));
    console.log(str)
    this.username = str.username
    console.log(this.username)
    if (this.username!=="")
      this.isLogin = true
    console.log(this.isLogin)

  },
}
</script>

<style scoped>
#header{
  height: 75px;
  width: 100vw;
  line-height: 50px;
  background: #fff;
  border-bottom: solid 1px #CCC;
  display: flex;
  box-shadow:0 0 10px #909399;
  position: fixed;
  top: 0;
  z-index: 100;
}

#title{
  width: 220px;
  padding-left: 20px;
  margin-left: calc(15% + 50px);
  line-height: 75px;
  font-size: 25px;
  font-weight: bold;
  color: dodgerblue;
  cursor: pointer;
}

#input{
  margin-top: 12px;
  padding-right: 20px;
}

.el-select .el-input {
  width: 130px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}

#xiala{
  line-height: 75px;
  font-size: 16px;
  width: 100px;
  margin: 0 15% 0 20px;
}

.el-dropdown-link {
  cursor: pointer;
  color: #409EFF;
}
.el-icon-arrow-down {
  font-size: 12px;
}

#navLinkBox{
  display: flex;
  height: 35px;
  margin-top: 20px;
  white-space: nowrap;
  transition: .25s;
}

.navLink {
  margin: 0 10px;
  padding: 0px 20px;
  border-radius: 5px;
  color: #000000;
  font-size: 15px;
  line-height: 35px;
  position: relative;
  cursor: pointer;
  transition: .25s;
}

.navLink>em {
  position: absolute;
  left: 50%;
  bottom: 4px;
  /*margin: 0 -75px; //大家可以把本行注释掉，启用下一行的代码，效果会不一样*/
  transform: translate(-50%);
}
.navLink:hover{
  background-color: #E0E0E0FF;
}
.navLink:hover em{
  animation: test 0.25s ease;
  border: 1px solid #409EFF;
  width: 40%;
}

@keyframes test {
  from{
    width: 0;
  }
  to{
    width: 40%;
  }
}
</style>
