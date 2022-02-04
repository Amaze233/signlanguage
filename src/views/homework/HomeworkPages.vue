<template>
  <div class="mainPages">
    <BreadCrumb/>
    <h1 style="margin: 20px">{{this.form.question}}</h1>
    <div class="recorder-wrapper">
      <div class="phone-content">
        <transition-group tag="ul" class="msg-list" name="fade">
          <li v-for="(item, index) in chunkList" :key="index" class="msg">
            <div class="avatar"></div>
            <div class="video" @click="onPlay(index)">
              <img alt="截图" :src="item.poster">
              <i class="el-icon-caret-right"></i>
            </div>
          </li>
        </transition-group>
        <video ref="video"
               id="phone-video"
               preload="auto"
               autoplay=true
               muted=false
               webkit-playsinline="true"
               playsinline="true"
               x-webkit-airplay="allow"
               x5-video-player-type="h5-page"
               x5-video-orientation="portraint"
               style="object-fit: contain"
               @click="showVideo(false)"
               @touchend.prevent="showVideo(false)"></video>
      </div>
      <canvas ref="canvas"></canvas>
      <div class="show-video">
        <div class="player">
          <video-player  class="video-player vjs-custom-skin"
                         ref="videoPlayer"
                         :playsinline="true"
                         :options="playerOptions"
                         @play="onPlayerPlay($event)"
                         @pause="onPlayerPause($event)"
          >
          </video-player>
        </div>
      </div>
    </div>
    <form style="display: none">
      <el-input v-model="form.question"></el-input>
      <el-input v-model="form.video_path"></el-input>
    </form>
    <el-button type="primary" @click="onMousedown" plain style="margin-left: 20px">开始录制</el-button>
    <el-button type="primary" @click="onMouseup" plain>停止录制</el-button>
    <el-button type="primary" @click="video_upload('/001')" plain>提交</el-button>
    <div v-if="boolList" style="margin: 10px;padding: 20px">
      <el-table
          ref="filterTable"
          :data="boolList"
          style="width: 100%">
        <el-table-column
            prop="word_id"
            label="分词"
            sortable
            width="100"
            :filter-method="filterHandler"
        >
        </el-table-column>
        <el-table-column
            prop="correction"
            label="标签"
            width="100"
            :filters="[{ text: '正确', value: 1 }, { text: '错误', value: 0 }]"
            :filter-method="filterTag"
            filter-placement="bottom-end">
          <template slot-scope="scope">
            <el-tag
                :type="scope.row.correction === '家' ? 'success' : 'danger'"
                disable-transitions>{{scope.row.correction}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column
            width="100"
            label="操作">
          <template slot-scope="scope">
            <el-button
                size="mini"
                @click="toPages(scope.row)"
                icon="el-icon-edit-outline"
            >前往</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <ScrollTop/>
  </div>
</template>

<script>

import BreadCrumb from "../../components/BreadCrumb";
import ScrollTop from "../../components/ScrollTop";
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'
import { videoPlayer } from 'vue-video-player';
import request from "../../utils/request";

export default {
  name: 'HomeworkPages',
  data(){
    return{
      form:{
      },
      boolList:[],
      chunks: [],
      chunkList: [],
      index: 0,
      swicth: 0,
      playerOptions: {
        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [{
          type: "video/mp4",
          src: require("../../assets/video/test~1.mp4")
        }],
        poster: "", //你的封面地址
        width: document.documentElement.clientWidth,
        notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true  //全屏按钮
        }
      }
    }
  },
  components: {
    ScrollTop,
    BreadCrumb,
    videoPlayer
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player
    }
  },
  methods: {
    onPlayerPlay(player) {
    },
    onPlayerPause(player){
    },
    requestAudioAccess () {
      navigator.mediaDevices.getUserMedia({audio: true, video: true}).then(stream => {
        this.recorder = new window.MediaRecorder(stream);
        // this.recorder.setVideoEncoder(MediaRecorder.VideoEncoder.H264_STREAM_TYPE);//设置视频编码
        this.stream = stream;
        this.bindEvents();
      }, error => {
        alert('出错，请确保已允许浏览器获取音视频权限');
      });
    },
    toPages(row){
      this.$router.push(
          {
            path: '/dictionaryPages',
            query:{
              word: row.word_id
            }
          }
      )
      this.reload()
    },
    onMousedown () {
      this.showVideo(true);
      this.onPreview();
      this.onStart();
    },

    onMouseup () {
      this.onStop();
    },

    onPreview () {
      this.video.srcObject = this.stream;
      this.video.muted = true;
      this.video.play();
    },

    showVideo (bShow) {
      if(bShow) {
        this.video.style.display = 'block';
      } else {
        this.video.style.display = 'none';
        this.video.pause();
      }
    },

    onStart () {
      this.recorder.start();
    },

    onStop () {
      this.recorder.stop();
    },

    onPlay (index) {
      this.swicth = index;
      this.showVideo(true);
      let item = this.chunkList[index];
      console.log(this.swicth);
      console.log(item);
      this.video.src = item.stream;
      this.video.muted = false;
      this.video.play();


      this.bindAudioEvent();
    },

    bindAudioEvent () {
      this.video.onended = () => {
        this.showVideo(false);
      }
    },

    bindEvents () {
      this.recorder.ondataavailable = this.getRecordingData;
      this.recorder.onstop = this.saveRecordingData;
    },

    getRecordingData (e) {
      this.chunks.push(e.data);
    },

    saveRecordingData  () {
      let blob = new Blob(this.chunks, { 'type' : 'video/mp4'}),
          videoStream = URL.createObjectURL(blob);
      this.chunkList.push({stream: videoStream});
      console.log("视频流")
      console.log(videoStream)
      this.onCapture(this.index);

      this.chunks = [];
    },

    //获取视频截图
    onCapture (index) {
      let item = this.chunkList[index];
      this.ctx.drawImage(this.video, 0, 0, this.canvas.width, this.canvas.height);
      this.canvas.toBlob((blob) => {
        let src = URL.createObjectURL(blob);
        this.$set(item, 'poster', src);
      });
      //索引后移
      this.index ++;

      //隐藏video
      this.showVideo(false);
      this.video.srcObject = null;
    },
    video_upload(video_path){
      this.form.video_path = video_path;
      request.post('/api/video',this.form).then(res=>{
        this.boolList = res;
        console.log(res)
      })
    },
    resetDateFilter() {
      this.$refs.filterTable.clearFilter('date');
    },
    clearFilter() {
      this.$refs.filterTable.clearFilter();
    },
    formatter(row, column) {
      return row.address;
    },
    filterTag(value, row) {
      return row.tag === value;
    },
    filterHandler(value, row, column) {
      const property = column['property'];
      return row[property] === value;
    }

  },
  created() {
    this.form.question = this.$route.query.question
    console.log("开始")
    console.log(this.form)
    console.log("源"+this.playerOptions.sources)
  },
  mounted () {
    if (!navigator.mediaDevices) {
      alert('您的浏览器不支持获取用户设备');
      return;
    }
    if (!window.MediaRecorder) {
      alert('您的浏览器不支持录音');
      return;
    }
    this.video = this.$refs.video;
    this.canvas = this.$refs.canvas;
    this.ctx = this.canvas.getContext('2d');
    this.requestAudioAccess();
  }
}
</script>
<style>
.mainPages{
  margin: 20px;
  background: #fff;
  max-width: calc(70vw - 200px);
  box-shadow:0 0 25px #909399;
}

.recorder-wrapper {
  width: calc(70vw - 240px);
  margin: 20px;
  display: flex;
}
.show-video{
  background-color: black;
  width: calc(70vw - 440px);
  height: calc(39vw - 248px);
  margin: 0 10px;
}

#phone-video
{
  width: 900px;
  height: 500px;
  margin:220px 300px 0 770px;
  z-index: 10;
}

.phone-head span {
  display: inline-block;
}
.phone-head span:nth-child(2) {
  width: 100px;
  text-align: center;
}
.phone-head span:nth-child(3) {
  float: right;
  margin-right: 10px;
}
.phone-content {
  width: 180px;
  background-color: #f1eded;
  padding: 5px;
  border: 1px solid #409EFF;
}
.phone-operate {
  position: relative;
  line-height: 28px;
  text-align: center;
  cursor: pointer;
  font-weight: bold;
  box-shadow: 0 -1px 1px rgba(0, 0, 0, .1);
}
.phone-operate:active {
  background-color: #95a5a6;
}
.phone-operate:active:before {
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  top: -2px;
  content: '';
  width: 0%;
  height: 2px;
  background-color: #40b3ff;
  animation: loading 1s ease-in-out infinite backwards;
}
.msg-list {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}
.msg-list::-webkit-scrollbar {
  display: none;
}
.msg-list .msg {
  list-style: none;
  padding: 0 8px;
  margin: 10px 0;
  overflow: hidden;
}
.msg-list .msg .avatar,
.msg-list .msg .video,
.msg-list .msg .duration {
  float: left;
}
.msg-list .msg .avatar {
  width: 24px;
  height: 24px;
  line-height: 24px;
  text-align: center;
  background-size: 100%;
}
.msg-list .msg .video {
  position: relative;
  width: 100px;
  height: 75px;
  line-height: 80px;
  margin-right: 6px;
  border-radius: 4px;
  overflow: hidden;
  color: rgba(255, 255, 255, .8);
  text-align: center;
  font-size: 0;
  cursor: pointer;
}
.msg-list .msg .video img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #636e72;
}
.msg-list .msg .video i {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 30px;
}
.msg-list .msg.eg {
  cursor: default;
}
.msg-list .msg.eg .video {
  position: relative;
  width: auto;
  height: 24px;
  line-height: 24px;
  padding: 0 8px 0 10px;
  border-radius: 2px;
  color: #000;
  overflow: initial;
  font-size: 12px;
  background-color: rgb(64, 179, 255);
}
.msg-list .msg.eg .video:before {
  position: absolute;
  content: '';
  right: -8px;
  top: 8px;
  display: inline-block;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 4px;
  border-color: transparent transparent transparent rgb(64, 179, 255);
}
video {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: none;
}
canvas {
  display: none;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

@keyframes loading {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}
</style>