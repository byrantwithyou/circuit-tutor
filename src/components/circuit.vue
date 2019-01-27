<template>
  <div class="circuit-container">
    <el-container>
    <el-main>
    <el-card>
      <el-button @click="praise" type="success" icon="el-icon-success" size="mini" class="button"></el-button>
      <div style="height: 10px; width: 100%;"></div>
      <div>
        <img class="image" :src="imgString">
      </div>
    </el-card>
    </el-main>
    <el-aside width="20px;"></el-aside>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'circuit',
  props: {
    socketId: String,
  },
  methods: {
    praise: function () {
      this.$socket.emit("praise", this.socketId, "Wonderful");
    },
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


