// @ClassName: Test
// @Author: XIAO SIYU
// @Date: 2022/1/29 17:08
// @Version: 1.0
// @Description: TODO


<template>
 <div class="mainPages">
   <form>
     <a-form-item
         label="商品视频"
         :labelCol="{span: 4}"
         :wrapperCol="{span: 18}"
     >
       <a-upload
           v-decorator="['videoUrl',
                               {
                                   valuePropName: 'fileList',
                                   getValueFromEvent: normFile,
                                   rules: [{required: true, message: '请上传商品视频！'}]
                               },
                           ]"
           name="file"
           :action="action"
           :headers="uploadHeaders"
           :accept="'video/mp4'"
           list-type="picture-card"
           @change="videoUploadChange"
           :before-upload="videoBeforeUpload"
           :preview-file="previewVideoFile"
           @preview="videoPreview"
       >

         <div >
           <a-icon type="plus" />
           <div class="ant-upload-text">
             Upload
           </div>
         </div>

         <a-modal :visible="videoPreviewVisible" :footer="null"  @cancel="videoPreviewCancel" >
           <video width="100%" height="600px;"  controls="controls" id="video">
             您的浏览器不支持播放该视频！
           </video>
         </a-modal>

       </a-upload>
     </a-form-item>
   </form>

 </div>
</template>

<script>
export default {
  name: "Test",
  watch: {
    //预览并播放视频时,如果关闭了弹框,电脑还有视频的声音,监听视频预览的弹框的打开/关闭,如果关闭了弹框就让video不要播放了
    videoPreviewVisible: function (val) {
      if(val === false){
        const video = document.getElementById('video')
        video.pause()
      }
    }
  },
  data(){
    return{
      uploadHeaders: {Authorization: getAuthorization()},		//这里是从cookie中取token值,后台鉴权用的
      action:  process.env.VUE_APP_API_BASE_URL+'/upload/oss',
      videoPreviewVisible: false,
    }
  },
  methods: {
    methods: {
      normFile(e) {
        //本方法作用,因为我的业务是只能上传一个视频,因此每次上传时只保留uoload组件的fileList字段的最后一个值作为提交给后台的数据
        if (Array.isArray(e)) {
          return e;
        }
        if(e && e.fileList){
          //截取最后一个元素,返回只包含最后一个元素的数组
          let fileList = e.fileList.slice(-1);
          fileList = fileList.map(file => {
            if (file.response) {
              // Component will show file.url as link
              file.url = file.response.data;	//file.response.data是后台返回的当前视频上传成功后入库的url
            }
            return file;
          });
          e.fileList = fileList
        }
        return e && e.fileList;
      },
      videoUploadChange({file, fileList  }) {
        if(file.status === 'error'){
          fileList.pop()
          this.$message.error("上传失败!")
        }
      },
      videoBeforeUpload(file) {
        const isLt10M = file.size / 1024 / 1024 < 10;
        if (!isLt10M) {
          this.$message.error('视频大小不能超过10M!');
        }
        return isLt10M
      },
      videoPreview(file){
        //预览视频的方法
        this.videoPreviewVisible = true;
        this.$nextTick(() => {	//这里一定要使用nextTick,否则document将找不到id为video的节点,因为modal框初始为隐藏状态,<video id='video'>标签初始在dom树中并不存在

          const video = document.getElementById('video')
          video.src = file.url
        });
      },
      videoPreviewCancel(){
        this.videoPreviewVisible = false
      },

    }
  }
}
</script>

<style scoped>

</style>