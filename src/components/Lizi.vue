// @ClassName: Lizi
// @Author: XIAO SIYU
// @Date: 2022/1/3 02:50
// @Version: 1.0
// @Description: TODO


<template>
<!--  <vue-particles-->
<!--      color="#555"-->
<!--      :particleOpacity="0.7"-->
<!--      :particlesNumber="150"-->
<!--      shapeType="circle"-->
<!--      :particleSize="4"-->
<!--      linesColor="#555"-->
<!--      :linesWidth="1"-->
<!--      :lineLinked="true"-->
<!--      :lineOpacity="0.4"-->
<!--      :linesDistance="150"-->
<!--      :moveSpeed="2"-->
<!--      :hoverEffect="true"-->
<!--      hoverMode="grab"-->
<!--      :clickEffect="false"-->
<!--      clickMode="push"-->
<!--      class="lizi"-->
<!--  />-->
  <vue-particles
      color="#409EFF"
      :particleOpacity="0.7"
      :particlesNumber="60"
      shapeType="circle"
      :particleSize="6"
      linesColor="#409EFF"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push">
  </vue-particles>
</template>

<script>
export default {
  name: "Lizi"
}
</script>

<style scoped>
.lizi{
  position:fixed;
  top:0;
  left: 0;
  width: 100vw;
  height: 100vh;
}

</style>