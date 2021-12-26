// @ClassName: Header
// @Author: XIAO SIYU
// @Date: 2021/12/23 16:22
// @Version: 1.0
// @Description: TODO


<template>
  <div id="header" >
    <div id="title">手语教育</div>
    <div style="flex: 1"></div>
    <el-button type="primary" icon="el-icon-user" size="small" plain style="margin-right: 15%">登录/注册</el-button>
    <el-dropdown id="xiala" v-if="ifLogin">
      <span class="el-dropdown-link">
        {{username}}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item @click.native="toTeam()">个人设置</el-dropdown-item>
        <el-dropdown-item disabled>我的资源</el-dropdown-item>
        <el-dropdown-item divided @click.native="toLogin()" >退出登录</el-dropdown-item>
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
    }
  }
}
</script>

<style scoped>
#header{
  height: 50px;
  line-height: 50px;
  border-bottom: solid 1px #CCC;
  display: flex;
}

#title{
  width: 220px;
  padding-left: 20px;
  margin-left: 15%;
  font-size: 25px;
  font-weight: bold;
  color: dodgerblue;
  cursor: pointer;
}

#xiala{
  width: 100px;
}

.el-dropdown-link {
  cursor: pointer;
  color: #409EFF;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>