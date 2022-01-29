import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'

Vue.config.productionTip = false

//引入全局css
import './assets/css/global.css'

// //引入样式css
// import './assets/css/style.css'

//引入elementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//导入背景粒子特效
import VueParticles from 'vue-particles'
Vue.use(VueParticles)

//导入axios
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
axios.defaults.baseURL = 'http://localhost:8181/api';

// 无限加载
import infiniteScroll from 'vue-infinite-scroll'
Vue.use(infiniteScroll)

//导航
import VueScrollTo from "vue-scrollto";
Vue.use(VueScrollTo, options);
let options = {
  container: "body", //滚动的容器
  duration: 500, //滚动时间
  easing: "ease", //缓动类型
  offset: 0, //滚动时应应用的偏移量。此选项接受回调函数
  force: true, //是否应执行滚动
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
};

//引入视频播放窗口
import VideoPlayer from 'vue-video-player'
import 'vue-video-player/src/custom-theme.css'
import 'video.js/dist/video-js.css'

Vue.use(VideoPlayer)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

//路由函数

function toRouter(str) {
  this.$router.push('/'+str);
  console.log(str)
}

router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
});