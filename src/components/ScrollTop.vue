<template>
    <!--  向上-->
    <el-backtop :bottom="100" :visibility-height="10">
      <div style="{
        height: 100%;
        width: 100%;
        background-color: #f2f5f6;
        box-shadow: 0 0 6px rgba(0,0,0, .12);
        border-radius: 5px;
        text-align: center;
        line-height: 40px;
        color: #1989fa;
      }"
      >
        UP
      </div>
    </el-backtop>
</template>

<script>
export default {
  name: 'ScrollTop',
}
</script>

<style scoped>
</style>
