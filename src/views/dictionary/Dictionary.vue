// @ClassName: Dictiionary
// @Author: XIAO SIYU
// @Version: 1.0
// @Description: TODO


<template>
  <div class="mainPages">
    <BreadCrumb/>
    <div class="study-show">
      <img
          style="width: calc(28vw - 100px);height: calc(21vw - 75px)"
          src="../../assets/img/lesson-logo.jpg"
      >
      <div class="study-show-button">
        <h1>手语{{type}}—{{title}}</h1>
        <div class="study-show-instruction">
          <div style="font-size: 17px;line-height: 30px">
            &ensp;&ensp;&ensp;跟着聋人学手语，可以使学习者直接走近聋人，直接体验到聋人手语表达的魅力。我们期盼通过这门课程的学习，能够帮助更多的手语学习者认识手语， 熟悉手语和喜爱手语，进而了解聋人，接纳聋人，关爱聋人。 同时，我们也真诚地欢迎手语语言学家、手语教师、手语翻译以及广大手语爱好者多提宝贵意见，使这门课程更加完善。
          </div>
          <div style="float: right;font-size: 18px">—— 课程团队</div>
        </div>
        <el-button type="primary" round style="float: right;margin-right: 20px" @click="start">开始{{type}}</el-button>
      </div>
    </div>
    <div class="study-information">
      <div class="study-information-title" >
        <i class="el-icon-s-comment"></i>
        课程概述
      </div>
      <div class="study-information-message">
        <p>&ensp;&ensp;本课程是一门手语基础课程，共32个教学视频。首先从认识聋人和手语谈起，旨在使初学手语者了解手语作为视觉语言的特征和规律，从而掌握手语学习的正确方法；之后结合手语的类标记概念，较为详细地介绍了手语在表达空间位置关系、角色转换和两个事物之间比较的特点；接着讲授了手语动词、时间词、数量词、人称代词和指示代词；最后举例说明了手语疑问句和否定句的语法现象。每个知识点讲完之后，都设置了手语词汇的学习环节，手语词汇共有300多个，目的是帮助学习者在了解手语语言学理论知识的同时，更好地运用手语，达到学以致用。</p>
      </div>
      <div class="study-information-title" >
        <i class="el-icon-s-promotion"></i>
        授课目标
      </div>
      <div class="study-information-message">
        <p>1.培养初学手语者学习手语的浓厚兴趣，激发学习手语的积极性和主动性。</p>
        <p>2.正确认识手语作为视觉语言的特征，了解手语与有声语言的主要区别。</p>
        <p>3.掌握手语学习的正确方法，能够运用手语语言学理论知识，熟练和准确地表达常用手  语词汇和句型，以提升手语的运用能力。</p>
      </div>
    </div>
    <ScrollTop/>
  </div>
</template>

<script>
import BreadCrumb from "../../components/BreadCrumb"
import ScrollTop from "../../components/ScrollTop";
export default {
  name: "Dictionary",
  components: {ScrollTop,BreadCrumb},
  data(){
    return{
      title: "",
      type:"",
      url: "../../assets/img/lesson-logo.jpg"
    }
  },
  methods:{
    start() {
      const id = '021'
      this.$router.push(
          {
            path: '/dictionaryList',
            query: {
              id: id
            }
          }
      )
    }
  },
  created() {
    this.title = sessionStorage.getItem("rank")
    this.type = sessionStorage.getItem("type")
  }
}
</script>

<style scoped lang="less">

.study-show{
  width: calc(70vw - 240px);
  margin: 10px 20px;
  display: flex;
}
.study-show-button{
  width: calc(42vw - 140px);
  margin-left: 20px;
  h1{
    font-size: 24px;
    color: #333333;
    margin-right: 6px;
    font-weight: 600;
  }
  .study-show-instruction{
    margin: 20px 0;
    background-color: #eaf6fc;
    padding: 30px;
    border-radius: 5px;
  }
}
.study-information{
  width: calc(70vw - 240px);

  margin: 20px;
  .study-information-title{
    font-size: 24px;
    font-weight: bold;
  }
  .study-information-message{
    padding: 10px;
    p{
      margin: 5px;
      font-size: 18px;
      line-height: 40px;
    }
  }
}
</style>