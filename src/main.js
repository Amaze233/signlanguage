import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'

Vue.config.productionTip = false

//引入全局css
import './assets/css/global.css'

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
