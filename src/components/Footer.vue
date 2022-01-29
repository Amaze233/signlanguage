// @ClassName: Footer
// @Author: XIAO SIYU
// @Date: 2022/1/18 21:03
// @Version: 1.0
// @Description: TODO

<template>
  <div class="footer">
    <!-- container -->
    <div class="container">
      <div class="col-md-6 footer-left">
        <ul>
          <li><a href="">主页</a></li>
          <li><a href="">关于</a></li>
          <li><a href="">学习</a></li>
          <li><a href="">测试</a></li>
        </ul>
        <form>
          <input type="text" placeholder="电子邮箱" required="">
          <input type="submit" value="订阅">
        </form>
      </div>
      <div class="col-md-3 footer-middle">
        <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;地址信息</h3>
        <div class="address">
          <p>武汉大学,
            <span>C3-329</span>
          </p>
        </div>
        <div class="phone">
          <p>QQ XXXXXXXXXXX</p>
        </div>
      </div>
      <div class="col-md-3 footer-right">
        <h3>相关信息</h3>
        <p>凡事不必苛求，来了就来了；凡事不必计较，过了就过了；遇事不要皱眉，笑了就笑了；结果不要强求，做了就对了。</p>
      </div>
      <div class="clearfix"> </div>
    </div>
    <!-- //container -->
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>

/*-- footer --*/
.footer{
  height: 300px;
  padding:3em 0;
  background:#292929;
  display: flex;
}
.footer-left ul{
  padding:0;
  margin:0;
  display: flex;
}
.footer-left ul li{
  margin:0 1em;
  list-style: none;
}
.footer-left ul li:nth-child(1){
  margin-left:0;
}
.footer-left ul li a{
  color:#FFF;
  font-size:16px;
  text-decoration: none !important;
}
.footer-left ul li a:hover{
  color: #2793FD;
}
.footer-left form{
  margin-top: 3em;
}
.footer-left input[type="text"] {
  width: 100%;
  color: #898888;
  background: none;
  outline: none;
  font-size: 16px;
  padding: .5em;
  margin-bottom: 2em;
  -webkit-appearance: none;
  border-bottom: solid 1px #595959;
  border-top: none;
  border-right: none;
  border-left: none;
}
.footer-left input[type="submit"] {
  border: none;
  outline: none;
  color: #2793FD;
  padding: .5em 1.5em;
  font-size: 16px;
  margin: 0.5em 0 0 0;
  -webkit-appearance: none;
  background: #fff;
  transition:0.5s all;
  -webkit-transition:0.5s all;
  -moz-transition:0.5s all;
  -o-transition:0.5s all;
  -ms-transition:0.5s all;
}
.footer-left input[type="submit"]:hover{
  color: #fff;
  background:#2793FD;
  transition: 0.5s all;
  cursor: pointer;
  -webkit-transition: 0.5s all;
  -o-transition: 0.5s all;
  -moz-transition: 0.5s all;
  -ms-transition: 0.5s all;
}
.footer-middle h3{
  color: #FFFFFF;
  font-size: 1.5em;
  font-weight: 400;
  margin: 0;
  text-transform: uppercase;
}
.footer-right p{
  color: #989898;
  font-size: .85em;
  margin: .5em 0 0 0;
  line-height: 1.8em;
  font-weight: 400;
}
.address p {
  color: #989898;
  font-size: 14px;
  line-height: 1.8em;
  padding-left: 3em;
  margin: 2em 0 0 0;
  /*background: url(../images/location.png) no-repeat 0px 5px;*/
}
.address p span {
  display: block;
}
.phone{
  margin-top:2em;
}
.phone p{
  color: #989898;
  font-size: .85em;
  line-height: 1.8em;
  padding-left: 3em;
  margin: 2em 0 0 0;
  /*background: url(../images/phone.png) no-repeat 0px 0px;*/
}
.footer-right h3 {
  color: #fff;
  font-size: 1.5em;
  text-transform: uppercase;
  margin-bottom: 10px;
  margin-top: 0;
}
.footer-right a:hover{
  text-decoration:none;
}

.container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
}
@media (min-width: 768px) {
  .container {
    width: 750px;
  }
}
@media (min-width: 992px) {
  .container {
    width: 970px;
  }
}
@media (min-width: 1200px) {
  .container {
    width: 1170px;
  }
}
.container-fluid {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
}
@media (min-width: 992px) {
  .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12 {
    float: left;
  }
  .col-md-12 {
    width: 100%;
  }
  .col-md-11 {
    width: 91.66666667%;
  }
  .col-md-10 {
    width: 83.33333333%;
  }
  .col-md-9 {
    width: 75%;
  }
  .col-md-8 {
    width: 66.66666667%;
  }
  .col-md-7 {
    width: 58.33333333%;
  }
  .col-md-6 {
    width: 50%;
  }
  .col-md-5 {
    width: 41.66666667%;
  }
  .col-md-4 {
    width: 33.33333333%;
  }
  .col-md-3 {
    width: 25%;
  }
  .col-md-2 {
    width: 16.66666667%;
  }
  .col-md-1 {
    width: 8.33333333%;
  }
  .col-md-pull-12 {
    right: 100%;
  }
  .col-md-pull-11 {
    right: 91.66666667%;
  }
  .col-md-pull-10 {
    right: 83.33333333%;
  }
  .col-md-pull-9 {
    right: 75%;
  }
  .col-md-pull-8 {
    right: 66.66666667%;
  }
  .col-md-pull-7 {
    right: 58.33333333%;
  }
  .col-md-pull-6 {
    right: 50%;
  }
  .col-md-pull-5 {
    right: 41.66666667%;
  }
  .col-md-pull-4 {
    right: 33.33333333%;
  }
  .col-md-pull-3 {
    right: 25%;
  }
  .col-md-pull-2 {
    right: 16.66666667%;
  }
  .col-md-pull-1 {
    right: 8.33333333%;
  }
  .col-md-pull-0 {
    right: auto;
  }
  .col-md-push-12 {
    left: 100%;
  }
  .col-md-push-11 {
    left: 91.66666667%;
  }
  .col-md-push-10 {
    left: 83.33333333%;
  }
  .col-md-push-9 {
    left: 75%;
  }
  .col-md-push-8 {
    left: 66.66666667%;
  }
  .col-md-push-7 {
    left: 58.33333333%;
  }
  .col-md-push-6 {
    left: 50%;
  }
  .col-md-push-5 {
    left: 41.66666667%;
  }
  .col-md-push-4 {
    left: 33.33333333%;
  }
  .col-md-push-3 {
    left: 25%;
  }
  .col-md-push-2 {
    left: 16.66666667%;
  }
  .col-md-push-1 {
    left: 8.33333333%;
  }
  .col-md-push-0 {
    left: auto;
  }
  .col-md-offset-12 {
    margin-left: 100%;
  }
  .col-md-offset-11 {
    margin-left: 91.66666667%;
  }
  .col-md-offset-10 {
    margin-left: 83.33333333%;
  }
  .col-md-offset-9 {
    margin-left: 75%;
  }
  .col-md-offset-8 {
    margin-left: 66.66666667%;
  }
  .col-md-offset-7 {
    margin-left: 58.33333333%;
  }
  .col-md-offset-6 {
    margin-left: 50%;
  }
  .col-md-offset-5 {
    margin-left: 41.66666667%;
  }
  .col-md-offset-4 {
    margin-left: 33.33333333%;
  }
  .col-md-offset-3 {
    margin-left: 25%;
  }
  .col-md-offset-2 {
    margin-left: 16.66666667%;
  }
  .col-md-offset-1 {
    margin-left: 8.33333333%;
  }
  .col-md-offset-0 {
    margin-left: 0;
  }
}
</style>