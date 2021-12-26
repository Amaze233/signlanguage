// @ClassName: BreadCrumb
// @Author: XIAO SIYU
// @Date: 2021/12/23 21:39
// @Version: 1.0
// @Description: TODO


<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>活动管理</el-breadcrumb-item>
    <el-breadcrumb-item>活动列表</el-breadcrumb-item>
    <el-breadcrumb-item>活动详情</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  name: "BreadCrumb"
}
</script>

<style scoped>

</style>