// @ClassName: DictionaryList
// @Author: XIAO SIYU
// @Date: 2022/1/27 04:12
// @Version: 1.0
// @Description: TODO


<template>
  <div class="mainPages">
    <BreadCrumb/>
    <form style="display: none">
      <el-input v-model="form.grade"></el-input>
    </form>
    <form style="display: none">
      <el-input v-model="form2.word"></el-input>
    </form>
    <el-card class="box-card">
      <el-col :span="8"  v-for="item in dictionaryList" :key="item" >
        <el-card shadow="hover" class="text" @click.native="toPages(item)">
          {{ item }}
        </el-card>
      </el-col>
    </el-card>
  </div>
</template>

<script>
import BreadCrumb from "../../components/BreadCrumb";
import request from "../../utils/request";

export default {
  name: "DictionaryList",
  inject:['reload'],
  components: {BreadCrumb},
  data(){
    return{
      form:{
      },
      form2:{},
      dictionaryList:[]
    }
  },
  created() {
    this.form.grade = this.$route.query.id
    console.log("开始")
    console.log(this.form)
    this.loadList()
  },
  methods:{
    loadList(){
      request.post('/api/words',this.form).then(res =>{
        this.dictionaryList = res
        console.log(res)
      })
    },
    toPages(name){
      this.form2.word= name
      request.post('/api/example',this.form2).then(res => {
        sessionStorage.setItem("word", JSON.stringify(res))  // 缓存返回信息
        console.log("返回值"+res);
      })
      console.log("这里是类别"+sessionStorage.getItem("type"))
      let pageType = '/dictionaryPages';
      console.log("这里是page"+pageType)
      this.$router.push(
          {
            path: pageType,
            query:{
              word: name
            }
          }
      )
      this.reload()
    }
  }
}
</script>

<style scoped lang="less">
.box-card{
  margin: 10px;
  .text{
    cursor: pointer;
  }
}
</style>