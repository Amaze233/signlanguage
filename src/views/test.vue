<template>
  <div id="box">
    <div
        id="con1"
        ref="con1"
        :class="{anim:animate==true}"
        @mouseenter="mEnter"
        @mouseleave="mLeave"
    >
      <p
          v-for="(item, index) in items"
          :key="index"
      >{{item.name}}</p>
    </div>
  </div>
</template>

<script>
import Lizi from "../components/Lizi";
export default {
  name:"test",
  components: {Lizi},

  data () {
    return {
      animate: false,
      items: [
        // 消息列表对应的数组
        { name: '国货PK美国货,结果让人震惊' },
        { name: '二' },
        { name: '这次XiPhone,可能让你迷路' },
        { name: '三' },
        { name: '为什么吉普,奥巴马都爱钓鱼' },
        { name: '四' },
        { name: '虽然我字难看,但我钢笔好看啊' }
      ]
    }
  },

  mounted () {
    this.timer1 = setInterval(this.scroll, 1000)
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () { },
  // 方法集合
  methods: {
    scroll () {
      const con1 = this.$refs.con1
      con1.style.marginTop = '-20px'
      this.animate = !this.animate
      //   在异步函数中会出现this的偏移问题，此处一定要先保存好this的指向
      setTimeout(() => {
        this.items.push(this.items[0])
        this.items.shift()
        con1.style.marginTop = '0px'
        this.animate = !this.animate
        //   这个地方如果不把animate取反会出现消息回滚的现象，此时把ul元素的过渡属性取消掉就可以完美实现无缝滚动的效果了
      }, 500)
    },
    mEnter () {
      clearInterval(this.timer1)
    },
    mLeave () {
      this.timer1 = setInterval(this.scroll, 1000)
    }
  },

}
</script>

<style>
/* // 去掉滚动条的默认样式 */
::-webkit-scrollbar {
  width: 0;
  height: 0;
}
#box {
  width: 60%;
  height: 80%;
  line-height: 20px;
  overflow: hidden;
  border: 1px solid red;
  transition: all 0.5s;
}
.anim {
  transition: all 0.5s;
}
#con1 li {
  list-style: none;
  height: 20px;
  line-height: 20px;
}
</style>