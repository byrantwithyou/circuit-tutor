<template>
  <div class="circuit-container">
    <el-container>
    <el-main>
    <el-card>
      <el-button @click="praise" type="success" icon="el-icon-star-on" size="mini" class="button"></el-button>
      <div style="width: 100%; height: 20px;"></div>
      <div>
        <img class="image" :src="imgString">
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
export default {
  name: 'circuit',
  data() {
    return {
      text: ""
    }
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
    }
  },
  computed: {
    imgString: function() {
      let index = this.$store.state.sockets.socketsid.findIndex((element) => element == this.socketId);
      return this.$store.state.sockets.imgString[index];
    }
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


