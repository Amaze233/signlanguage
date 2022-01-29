<template>
  <div class="home" id="index">
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
    <div id="lesson">
      <h3>学习</h3>
      <span class="underline"></span>
      <div id="lesson_list" >
        <div class="button_block" @click="toRouter('dictionary','初级篇','学习')">
          <div class="lessonLinkPic1"></div>
          <div class="lessonLinkText">
            <p class="lessonLinkTitle">初级篇</p>
            <p class="lessonLinkIntro">适用于刚开始学习手语的人群</p>
          </div>
        </div>
        <div class="button_block" @click="toRouter('dictionary','高级篇','学习')">
          <div class="lessonLinkPic1"></div>
          <div class="lessonLinkText">
            <p class="lessonLinkTitle">高级篇</p>
            <p class="lessonLinkIntro">适用于对手语有一定了解的人群</p>
          </div>
        </div>
      </div>
    </div>
    <div id="homework">
      <h3>测试</h3>
      <span class="underline"></span>
      <div id="homework_list" >
        <div class="button_block" @click="toRouter('homework','初级篇','测试')">
          <div class="lessonLinkPic1"></div>
          <div class="lessonLinkText">
            <p class="lessonLinkTitle">初级篇</p>
            <p class="lessonLinkIntro">适用于刚开始学习手语的人群</p>
          </div>
        </div>
        <div class="button_block" @click="toRouter('homework','高级篇','测试')">
          <div class="lessonLinkPic1"></div>
          <div class="lessonLinkText">
            <p class="lessonLinkTitle">高级篇</p>
            <p class="lessonLinkIntro">适用于对手语有一定了解的人群</p>
          </div>
        </div>
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
  username:'',
  inject:['reload'],
  i:0,
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
    toRouter(str,rank,type){
      //本地缓存选择的信息
      sessionStorage.setItem("rank", rank)  // 缓存分级信息
      sessionStorage.setItem("type", type)  // 缓存用户信息
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
  },
  created() {
    this.username = JSON.parse(sessionStorage.getItem("user"));

  }
}
</script>
<style lang="less">
#introduction {
  width: 100%;
  height: 33vh;
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
    transition: all 300ms ease-out;
  }
  button:hover {
    transition: all 300ms ease-in-out;
    width: 172px;
    cursor: pointer;
    background: linear-gradient(
        to right,
        #40b3ff 0%,
        #7cc1ff 50%,
        #40b3ff 100%
    );
  }
}

.underline {
  position: absolute;
  left: 20%;
  margin-top: -10px;
  width: 100px;
  height: 3px;
  background-color: #40b3ff;
}

#lesson{
  height: 500px;
  h3{
    padding-left: 20%;
    //font-weight: 400;
    //font-size: 30px;
    font-size: 34px;
    font-weight: 700;
    color: var(--txt-b-pure);
    transition: .25s;

    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

}

#lesson_list{
  height: 360px;
  display: flex;
  align-items: center;
  padding-left: 20%;
}

#homework{
  background: #fff;
  height: 500px;
  h3{
    padding-top: 30px;
    background: #fff;
    padding-left: 20%;
    //font-weight: 400;
    //font-size: 30px;
    font-size: 34px;
    font-weight: 700;
    color: var(--txt-b-pure);
    transition: .25s;

    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

}

#homework_list{
  height: 360px;
  display: flex;
  align-items: center;
  padding-left: 20%;
}

.button_block{
  width: 300px;
  height: 250px;
  margin: 0 30px 0 0;
  background: #fff;
  border-radius: 10px ;
  font-family:serif;
  font-sytle: bold;

  .lessonLinkText{
    padding: 10px 20px ;
    text-align: left;
    cursor: pointer;
  }

  .lessonLinkTitle {
    margin: 5px 0 0;
    color: var(--txt-b-pure);
    font-size: 15px !important;
    font-family: "Microsoft Yahei",PingFangSC-Regular;
    font-weight: 700;
  }

  .lessonLinkIntro{
    margin: 1px 0 0;
    color: var(--txt-b-pure);
    font-size: small;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  -webkit-box-shadow: #ccc 0 5px 5px;
  -moz-box-shadow: #ccc 0 5px 5px;
  box-shadow: #ccc 0 5px 5px;
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

.lessonLinkPic1{
  width: 300px;
  height: 170px;
  background-image: url("../assets/img/4.jpg");
  background-size: 100% 100%;
  border-radius: 10px 10px 0 0;
}

</style>