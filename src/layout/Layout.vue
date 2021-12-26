// @ClassName: Layout
// @Author: XIAO SIYU
// @Date: 2021/12/23 16:43
// @Version: 1.0
// @Description: TODO


<template>
  <div>
    <!--置顶栏导入-->
    <Header/>
    <div style="display: flex">
      <!--侧边栏导入-->
      <Aside v-show="path !== '/'"/>

      <!--路由导入-->
      <router-view style="flex: 1" />
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import Aside from "../components/Aside";
export default {
  name: "Layout",
  data(){
    return{
      path: ''                 //控制视图是否显示的变量
    }
  },

  components: {
    Header,
    Aside
  },
  // 判断路由
  mounted() {
    this.path = this.$route.path;
    // console.log(this.$route.path)
  },
  watch: {
    $route(to, from) {
      this.path = to.path
    }

  }
}
</script>

<style scoped>

</style>