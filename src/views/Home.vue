<template>
  <div class="home">
    <ScrollTop/>
    <Carousel style="margin-top: 20px"/>
    <div id="introduction" >
      <h3>手语教育</h3>
      <p>青青陵上柏，磊磊涧中石。
        人生天地间，忽如远行客。
        斗酒相娱乐，聊厚不为薄。
        驱车策驽马，游戏宛与洛。</p>
      <button>了解详情</button>
    </div>
    <div id="lesson" >
      <div class="button_block" @click="toRouter('dictionary')">
        学习
      </div>
      <div class="button_block" @click="toRouter('homework')">
        作业
      </div>
    </div>
    <globle-mousealert/>
  </div>
</template>

<script>


import Carousel from "../components/Carousel";
import ScrollTop from "../components/ScrollTop";
import globleMousealert from "../components/globleMousealert";
export default {
  name: 'Home',
  bannerHeight: 300,
  introductionHeight:300,
  data(){
    return{
    }
  },
  components: {
    ScrollTop,
    Carousel,
    globleMousealert
  },
  methods: {
    setSize:function () {
      // 通过浏览器宽度(图片宽度)计算高度
      this.bannerHeight = (1 / 2) * (1080 / 1920) * this.screenWidth;
    },
    toRouter(str){
      this.$router.push('/'+str);
      console.log(str)
    }
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
<style lang="less">
#introduction {
  width: 100%;
  height: 35vh;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h3 {
    margin: 0 0 20px 0;
    color: #282828;
  }
  button {
    margin-top: 20px;
    width: 162px;
    height: 42px;
    border-radius: 2px;
    border: solid 1px #c9c9c9;
    color: #ffffff;
    background-color: #40b3ff;
    transition: all 300ms ease-in-out;
  }
  button:hover {
    transition: all 300ms ease-in-out;
    width: 172px;
    background: linear-gradient(
        to right,
        #66c2fc 0%,
        #abd8ff 50%,
        #66c2fc 100%
    );
  }
}

#lesson{
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.button_block{
  width: 20vw;
  height: 35vh;
  margin: 20px;
  background: #409EFF;
  border-radius: 10px ;
  color : white;
  font-size: 28px;
  font-family:serif;
  font-sytle: bold;
  text-align:center;
  line-height:35vh;
  transition-duration: 0.3s;
  transition-property: transform;
}
.button_block:hover{
  cursor: pointer;
  transform: translateY(-5px);
  -webkit-box-shadow: #ccc 0px 10px 10px;
  -moz-box-shadow: #ccc 0px 10px 10px;
  box-shadow: #ccc 0px 10px 10px;
}


</style>