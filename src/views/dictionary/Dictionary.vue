// @ClassName: Dictiionary
// @Author: XIAO SIYU
// @Version: 1.0
// @Description: TODO


<template>
  <div class="infinite-scroll">
    <div class="list">
      <ul
          v-infinite-scroll="loadMore"
          infinite-scroll-throttle-delay="500"
          infinite-scroll-disabled="busy"
          immediate-check="false"
          infinite-scroll-distance="50"
      >
        <li v-for="(item, key) in list" :key="key">{{item}}</li>
      </ul>
      <p class="load-text" v-if="disabled && hasMore">loading...</p>
      <p class="load-text" v-if="!hasMore">
        no more!
      </p>
    </div>
  </div>
</template>

<script>

export default {
  name: "Dictionary",
  data(){
    return{
      list: [],
      busy: false,
      page: 0,
      total: 0,
      params: {
        current: 1,
        size: 10
    }
    }
  },
  methods: {
    loadMore: function() {
      this.busy = true
      setTimeout(() => {
        // 当前页数如果小于总页数，则继续请求数据，如果大于总页数，则滚动加载停止
        if (this.params.current < this.total) {
          //  这里是列表请求数据的接口,在这个接口中更新总页数
          this.getData(this.page)
        } else {

        }
        this.busy = false
      }, 1000)
    },
    getData (data) {
      this.params.current = data
      this.$api.exam.examIndex(this.params).then(res => {
        this.log(res.data)
        if (res.data.code === 200) {
          this.busy = false
          // 总条数
          this.total = res.data.page.total
          // 页数递增
          this.page++
          const list = res.data.list
        }
      })
    }
  }
}
</script>

<style scoped>

</style>