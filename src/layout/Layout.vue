// @ClassName: Layout
// @Author: XIAO SIYU
// @Date: 2021/12/23 16:43
// @Version: 1.0
// @Description: TODO


<template>
  <div>
    <!--置顶栏导入-->
    <Header/>
    <div style="display: flex; margin-top: 75px">
      <!--侧边栏导入-->
      <Aside v-show="!(path === '/home' || path === '/login')" />

      <!--路由导入-->
      <router-view style="flex: 1" v-if="isRouterAlive"/>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/Header";
import Aside from "../components/Aside";
import Footer from "../components/Footer";
export default {
  name: "Layout",
  provide(){
    return{
      reload:this.reload
    }
  },
  data(){
    return{
      path: '',                 //控制视图是否显示的变量
      isRouterAlive:true,       //是否刷新
    }
  },

  components: {
    Footer,
    Header,
    Aside
  },
  methods:{
    toRout(str) {
      this.$router.push(str)
    },
    reload(){
      this.isRouterAlive = false;
      this.$nextTick(function () {
        this.isRouterAlive = true
      });
    },
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
  },
}
</script>

<style scoped>

</style>