// @ClassName: BreadCrumb
// @Author: XIAO SIYU
// @Date: 2021/12/23 21:39
// @Version: 1.0
// @Description: TODO


<template>
  <div class="breadcrumb">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>{{ $route.matched[1].name }}</el-breadcrumb-item>
      <el-breadcrumb-item></el-breadcrumb-item>
      {{route}}
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: "BreadCrumb",
  computed:{
    route(){
      console.log(this.$route);
    }
  }
}
</script>

<style scoped>
.breadcrumb{
  margin-top: 20px;
  padding: 0 0 10px 20px;
  width: calc(70vw - 250px);
  border-bottom: solid 1px #CCC;
}
</style>