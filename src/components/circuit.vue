<template>
  <div class="circuit-container">
    <el-container>
    <el-main>
    <el-card>
     <el-button @click="toggle">Toggle</el-button>
      <el-button @click="praise" type="success" icon="el-icon-star-on" size="mini" class="button"></el-button>
      <div style="width: 100%; height: 20px;"></div>
      <div>
        <vue-cropper v-show="!imgShow" :viewMode=3 :autoCropArea=0.01 :src="imgString"></vue-cropper>
        <img v-show="imgShow" class="image" :src="imgString">
      </div>
      <br>
      <el-row>
        <el-col :span="20" :gutter="1">
          <el-input placeholder="Say Something to the student" suffix-icon="el-icon-edit" v-model="text"></el-input>
        </el-col>
        <el-col :span="3">
          <el-button @click="textSend" style="float: right;" type="primary" round icon="el-icon-check"></el-button>
        </el-col>
      </el-row>
    </el-card>
    </el-main>
    <el-aside width="20px;"></el-aside>
    </el-container>
  </div>
</template>

<script>
import initImg from "@/config/initImg";
import VueCropper from "vue-cropperjs";
export default {
  name: 'circuit',
  data() {
    return {
      text: "",
      imgShow: true
    }
  },
  components: {
    VueCropper
  },
  props: {
    socketId: String,
  },
  methods: {
    praise: function () {
      this.$socket.emit("praise", this.socketId, "Wonderful");
    },
    textSend: function() {
      this.$socket.emit("text", this.socketId, this.text);
    },
    toggle: function () {

    }
  },
  computed: {
    imgString: function() {
      let index = this.$store.state.sockets.socketsid.findIndex((element) => element == this.socketId);
      if (this.$store.state.sockets.activeState[index] == 0) {
        return initImg;
      }
      return this.$store.state.sockets.imgString[index];
    }
  },
  created: function () {
    let that = this;
    setTimeout(function (){
      that.$store.commit("sockets/activeState", {
        id: that.socketId
      });
    }, 1000);
  }

}

</script>

<style scoped>
.image{
  width: 100%;
  height: 300px;
  position: relative;
  display: block;
}

.button {
  float: right
}

.circuit-contaienr{
  margin: 30px
}
</style>


