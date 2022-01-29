// @ClassName: HomeworkList
// @Author: XIAO SIYU
// @Date: 2022/1/26 17:16
// @Version: 1.0
// @Description: TODO


<template>
  <div class="mainPages">
    <BreadCrumb/>
    <form style="display: none">
      <el-input v-model="form.grade"></el-input>
    </form>

    <el-card class="box-card">
      <el-col :span="8"  v-for="item in questionsList" :key="item" >
        <el-card shadow="hover" class="text" @click.native="toPages(item)">
          {{ item }}
        </el-card>
      </el-col>
    </el-card>
  </div>
</template>

<script>
import request from "../../utils/request";
import BreadCrumb from "../../components/BreadCrumb";

export default {
  name: "HomeworkList",
  inject:['reload'],
  components: {BreadCrumb},
  data(){
    return{
      form:{
      },
      questionsList:[]
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
      request.post('/api/questions',this.form).then(res =>{
        this.questionsList = res
        console.log(res)
      })
    },
    toPages(name){
      let pageType = '/homeworkPages';
      if (this.type === "学习"){
        pageType = '/dictionaryPages';
      }
      this.$router.push(
          {
            path: pageType,
            query:{
              question: name
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