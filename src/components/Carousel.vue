// @ClassName: Carousel
// @Author: XIAO SIYU
// @Version: 1.0
// @Description: TODO


<template>
  <!--动态将图片轮播图的容器高度设置成与图片一致-->
  <el-carousel :interval="4000" type="card" :height="this.bannerHeight +'px'">
    <el-carousel-item v-for="item in imagebox" :key="item.id">
      <img :src="item.idView" class="image">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: "Carousel",
  data() {
    return {
      imagebox:[{id:0,idView:require('../assets/img/1.png')},
        {id:1,idView:require('../assets/img/2.png')},
        {id:2,idView:require('../assets/img/3.png')}
        //imagebox是assets下一个放图片的文件夹
      ],
      // 浏览器宽度
      screenWidth :0,
      bannerHeight:300,
    }
  },
  methods:{
    setSize:function () {
      // 通过浏览器宽度(图片宽度)计算高度
      this.bannerHeight = (1 / 2) * (1080 / 1920) * this.screenWidth;
      console.log(this.bannerHeight)
    },
  },
  mounted() {
    // 首次加载时,需要调用一次
    this.screenWidth =  window.innerWidth;
    this.setSize();
    // 窗口大小发生改变时,调用一次
    window.onresize = () =>{
      this.screenWidth =  window.innerWidth;
      this.setSize();
    }
  }
}
</script>

<style scoped>

.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
img{
  /*设置图片宽度和浏览器宽度一致*/
  width:100%;
  height:inherit;
}
</style>