// @ClassName: Aside
// @Author: XIAO SIYU
// @Date: 2021/12/23 16:44
// @Version: 1.0
// @Description: TODO


<template>
  <div>
    <el-row class="tac">
      <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          unique-opened
          router
          style="height: calc(100vh - 60px);
                 width: 250px;
                 margin-top: 10px;
                 margin-left: 15vw;"
          @open="handleOpen"
          @close="handleClose">
        <el-submenu index="1" >
          <template slot="title">
            <i class="el-icon-user"></i>
            <span>人</span>
          </template>
          <el-menu-item index="team">肢体、器官与称谓</el-menu-item>
          <el-menu-item index="contest">职业与职称</el-menu-item>
        </el-submenu>
        <el-submenu index="2" >
          <template slot="title">
            <i class="el-icon-user"></i>
            <span>衣物、食品与生活用品</span>
          </template>
          <el-menu-item index="team">衣物与食品</el-menu-item>
          <el-menu-item index="contest">生活用品</el-menu-item>
        </el-submenu>
        <el-submenu index="3" >
          <template slot="title">
            <i class="el-icon-user"></i>
            <span>生活、工作与社会活动</span>
          </template>
          <el-menu-item index="team">生活与工作</el-menu-item>
          <el-menu-item index="contest">社会活动</el-menu-item>
        </el-submenu>
        <el-submenu index="4" >
          <template slot="title">
            <i class="el-icon-user"></i>
            <span>心理与行为</span>
          </template>
          <el-menu-item index="team">心理</el-menu-item>
          <el-menu-item index="contest">行为</el-menu-item>
        </el-submenu>
        <el-submenu index="5" >
          <template slot="title">
            <i class="el-icon-user"></i>
            <span>事物的状态、性质、与特点</span>
          </template>
          <el-menu-item index="team">事物的状态</el-menu-item>
          <el-menu-item index="contest">事物的性质与特点</el-menu-item>
        </el-submenu>
        <el-submenu index="6" >
          <template slot="title">
            <i class="el-icon-user"></i>
            <span>文化、教育、体育与卫生</span>
          </template>
          <el-menu-item index="team">文化与教育</el-menu-item>
          <el-menu-item index="contest">体育与卫生</el-menu-item>
        </el-submenu>
        <el-submenu index="7" >
          <template slot="title">
            <i class="el-icon-user"></i>
            <span>经济</span>
          </template>
          <el-menu-item index="team">工农与工贸</el-menu-item>
          <el-menu-item index="contest">交通与通信</el-menu-item>
        </el-submenu>
        <el-submenu index="8" >
          <template slot="title">
            <i class="el-icon-user"></i>
            <span>时间与空间</span>
          </template>
          <el-menu-item index="team">时间</el-menu-item>
          <el-menu-item index="contest">空间</el-menu-item>
        </el-submenu>
        <el-submenu index="9" >
          <template slot="title">
            <i class="el-icon-user"></i>
            <span>天文、气候、城市与地理</span>
          </template>
          <el-menu-item index="team">天文与气候</el-menu-item>
          <el-menu-item index="contest">城市与地理</el-menu-item>
        </el-submenu>
        <el-submenu index="10" >
          <template slot="title">
            <i class="el-icon-user"></i>
            <span>数量词与虚词</span>
          </template>
          <el-menu-item index="team">数量词</el-menu-item>
          <el-menu-item index="contest">虚词</el-menu-item>
        </el-submenu>

      </el-menu>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Aside",
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>

</style>