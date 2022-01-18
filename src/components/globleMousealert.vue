<template>
  <div class="mouseMain">
    <div class="content">
      <p>鼠标滑动浏览</p>
      <i class="el-icon-d-arrow-right" style="
      -webkit-transform: rotate(90deg);  /* to support Safari and Android browser */
      -ms-transform: rotate(90deg);      /* to support IE 9 */
      transform: rotate(90deg);"></i>
    </div>
  </div>
</template>
<script>
export default {
  name: "globleMousealert",
  mounted() {
    window.addEventListener("scroll", this.scollWatch);
  },
  methods: {
    // 监听判断滚动条是否滑动至底部
    scollWatch() {
      let dommouse = document.getElementsByClassName("content")[0];
      if (getScrollTop() + getWindowHeight() == getScrollHeight()) {
        console.log("已经滑动到最低部了");
        dommouse.style.display = "none";
      } else if (dommouse.style.display === "none") {
        dommouse.style.display = "block";
      }
      // 文档的总高度
      function getScrollHeight() {
        var scrollHeight = 0,
          bSH = 0,
          dSH = 0;
        if (document.body) {
          bSH = document.body.scrollHeight;
        }
        if (document.documentElement) {
          dSH = document.documentElement.scrollHeight;
        }
        scrollHeight = bSH - dSH > 0 ? bSH : dSH;
        return scrollHeight;
      }
      // 滚动条在Y轴上的滚动距离
      function getScrollTop() {
        var scrollTop = 0,
          bodyScrollTop = 0,
          documentScrollTop = 0;
        if (document.body) {
          bodyScrollTop = document.body.scrollTop;
        }
        if (document.documentElement) {
          documentScrollTop = document.documentElement.scrollTop;
        }
        scrollTop =
          bodyScrollTop - documentScrollTop > 0
            ? bodyScrollTop
            : documentScrollTop;
        return scrollTop;
      }
      // 浏览器视口的高度
      function getWindowHeight() {
        var windowHeight = 0;
        if (document.compatMode == "CSS1Compat") {
          windowHeight = document.documentElement.clientHeight;
        } else {
          windowHeight = document.body.clientHeight;
        }
        return windowHeight;
      }
    },
  },
};
</script>
<style lang="less" scoped>
.mouseMain {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: fixed;
  animation: breathe 3s ease-in-out infinite;
  z-index: 999;
  bottom: 0;
  .content {
    width: 109px;
    height: 69px;
    color: #000000;
    font-size: 10px;
    text-align: center;
    .iconfont {
      font-size: 20px;
    }
  }
}
// 呼吸效果，animation对应动画效果   配合animation: breathe 3s ease-in-out infinite;使用
@keyframes breathe {
  0% {
    opacity: 1;
  }
  25% {
    opacity: 0.5;
  }
  50% {
    opacity: 0;
  }
  75% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
</style>