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
        <el-submenu>
          <template slot="title">
            <i class="el-icon-user"></i>
            <span>人</span>
          </template>
          <el-menu-item @click.native="toList('021')">肢体、器官与称谓</el-menu-item>
          <el-menu-item @click.native="toList('022')">职业与职称</el-menu-item>
        </el-submenu>
        <el-submenu index="2" >
          <template slot="title">
            <i class="el-icon-goods"></i>
            <span>衣物、食品与生活用品</span>
          </template>
          <el-menu-item @click.native="toList('031')">衣物与食品</el-menu-item>
          <el-menu-item @click.native="toList('032')">生活用品</el-menu-item>
        </el-submenu>
        <el-submenu index="3" >
          <template slot="title">
            <i class="el-icon-headset"></i>
            <span>生活、工作与社会活动</span>
          </template>
          <el-menu-item @click.native="toList('041')">生活与工作</el-menu-item>
          <el-menu-item @click.native="toList('042')">社会活动</el-menu-item>
        </el-submenu>
        <el-submenu index="4" >
          <template slot="title">
            <i class="el-icon-view"></i>
            <span>心理与行为</span>
          </template>
          <el-menu-item @click.native="toList('051')">心理</el-menu-item>
          <el-menu-item @click.native="toList('052')">行为</el-menu-item>
        </el-submenu>
        <el-submenu index="5" >
          <template slot="title">
            <i class="el-icon-magic-stick"></i>
            <span>事物的状态、性质、与特点</span>
          </template>
          <el-menu-item @click.native="toList('061')">事物的状态</el-menu-item>
          <el-menu-item @click.native="toList('062')">事物的性质与特点</el-menu-item>
        </el-submenu>
        <el-submenu index="6" >
          <template slot="title">
            <i class="el-icon-reading"></i>
            <span>文化、教育、体育与卫生</span>
          </template>
          <el-menu-item @click.native="toList('071')">文化与教育</el-menu-item>
          <el-menu-item @click.native="toList('072')">体育与卫生</el-menu-item>
        </el-submenu>
        <el-submenu index="7" >
          <template slot="title">
            <i class="el-icon-coin"></i>
            <span>经济</span>
          </template>
          <el-menu-item @click.native="toList('081')">工农与工贸</el-menu-item>
          <el-menu-item @click.native="toList('082')">交通与通信</el-menu-item>
        </el-submenu>
        <el-submenu index="8" >
          <template slot="title">
            <i class="el-icon-connection"></i>
            <span>时间与空间</span>
          </template>
          <el-menu-item @click.native="toList('091')">时间</el-menu-item>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     c
          <el-menu-item @click.native="toList('092')">空间</el-menu-item>
        </el-submenu>
        <el-submenu index="9" >
          <template slot="title">
            <i class="el-icon-sunny"></i>
            <span>天文、气候、城市与地理</span>
          </template>
          <el-menu-item @click.native="toList('101')">天文与气候</el-menu-item>
          <el-menu-item @click.native="toList('102')">城市与地理</el-menu-item>
        </el-submenu>
        <el-submenu index="10" >
          <template slot="title">
            <i class="el-icon-link"></i>
            <span>数量词与虚词</span>
          </template>
          <el-menu-item @click.native="toList('111')">数量词</el-menu-item>
          <el-menu-item @click.native="toList('112')">虚词</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Aside",
  inject:['reload'],
  data(){
    return{
      type:"",
      router:"",
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    toList(id){
      let listType = '/homeworkList';
      if (this.type === "学习"){
        listType = '/dictionaryList';
      }
      this.$router.push(
          {
            path: listType,
            query:{
              id: id
            }
          }
      )
      this.reload()
      // setTimeout(function () {
      //   window.location.reload();
      // }, 100);
    },
    created(){
      this.type = sessionStorage.getItem("type")
      if (this.type === "学习"){
        this.router = 'dictionaryList'
      }
      this.router = 'homeworkList'
    }
  }
}
</script>

<style scoped>

</style>