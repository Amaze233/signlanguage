<template>
  <div>
    <ul class="infinite-list"
        v-infinite-scroll="load"
        infinite-scroll-disabled="false"
        infinite-scroll-immediate="true"
        infinite-scroll-distance="1"
        style="overflow:auto">
      <li v-for="i in count" class="infinite-list-item">{{ i }}</li>
    </ul>
  </div>
</template>

<script>
import Lizi from "../components/Lizi";
export default {
  name:"test",
  components: {Lizi},
  data(){
    return{
      count: 0
    }
  },
  methods: {
    load() {
      this.count += 2
    }
  }
}
</script>

<style>
.infinite-list {
  height: 300px;
}
</style>