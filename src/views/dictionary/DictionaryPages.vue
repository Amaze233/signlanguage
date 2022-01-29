// @ClassName: DictionaryPages
// @Author: XIAO SIYU
// @Date: 2022/1/2 00:37
// @Version: 1.0
// @Description: TODO


<template>
  <div id="contain">
    <BreadCrumb/>
    <h1>{{word}}</h1>
    <a>{{description}}</a>
    <ScrollTop/>
  </div>
</template>

<script>
import * as THREE from "three/build/three.module";
import Stats from "three/examples/jsm/libs/stats.module.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import {inflate} from "three/examples/jsm/libs/fflate.module.js"
import BreadCrumb from "../../components/BreadCrumb";
import ScrollTop from "../../components/ScrollTop";

export default{
  name:'test',
  components:{
    ScrollTop,
    BreadCrumb
  },
  data(){
    return {
      camera: null,
      scene: null,
      renderer: null,
      controls: null,
      mixer:null,
      mixers:[],
      clock: new THREE.Clock(),
      modelPath: "static/model/111.fbx",
      word:"情况",
      description:"我也不知道该咋描述"
    }
  },
  methods:{
    init() {
      let self = this;

      //摄像机
      let container = document.getElementById("contain");
      // let mouse = new THREE.Vector2();
      self.camera = new THREE.PerspectiveCamera(
          45,
          container.clientWidth / container.clientHeight,
          0.01,
          2000
      );
      self.camera.position.set(0, 75, 120);
      self.scene = new THREE.Scene();

      // 地板
      var mesh = new THREE.Mesh(
          new THREE.PlaneBufferGeometry(2000, 2000),
          new THREE.MeshPhongMaterial({ color: 0x999999, depthWrite: false })
      );
      mesh.rotation.x = -Math.PI / 2;
      mesh.receiveShadow = true;
      self.scene.add(mesh);

      //底部网格
      var grid = new THREE.GridHelper(2000, 200, 0x000000, 0x000000);
      grid.material.opacity = 0.2;
      grid.material.transparent = true;
      self.scene.add(grid);

      self.renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        precision: "highp"
      });
      self.renderer.setSize(container.clientWidth, container.clientHeight);
      container.appendChild(self.renderer.domElement)

      //交互
      self.controls = new OrbitControls(self.camera, self.renderer.domElement);
      self.controls.target.set(0, 50, 0);
      self.controls.update();

      //光照
      var light = new THREE.HemisphereLight(0xffffff, 0x444444);
      light.position.set(200, 200, 0);
      self.scene.add(light);

      light = new THREE.DirectionalLight(0xffffff);
      light.position.set(0, 200, 100);
      light.castShadow = true;
      light.shadow.camera.top = 180;
      light.shadow.camera.bottom = -100;
      light.shadow.camera.left = -120;
      light.shadow.camera.right = 120;
      self.scene.add(light);

      //加载模型
      const mixers = self.mixers;
      const fbxLoader = new FBXLoader();
      fbxLoader.load(self.modelPath, function(object) {
        console.log(object)
        object.mixer = new THREE.AnimationMixer(object);
        mixers.push(object.mixer)
        var action = object.mixer.clipAction(object.animations[0]);
        action.play();
        object.scale.multiplyScalar(.5);
        self.scene.add(object);
      });
    },
    animate() {
      requestAnimationFrame(this.animate);
      // console.log(mixers)
      if (this.mixers.length > 0) {
        for (let i = 0; i < this.mixers.length; i ++) {
          this.mixers[i].update(this.clock.getDelta());
        }
      }
      this.renderer.render(this.scene, this.camera);
    }
  },
  mounted() {
    this.init();
    this.animate();
  }

}
</script>

<style lang="less">
#contain{
  margin: 20px;
  max-width: calc(70vw - 200px);
  box-shadow:0 0 25px #909399;
  h1{
    margin-left: 20px;
  }
  a{
    margin: 0 0 0 20px;
  }
  canvas{
    margin-left: 20px;
    width: calc(70vw - 270px) !important;
    height: 70vh !important;
  }
}
</style>