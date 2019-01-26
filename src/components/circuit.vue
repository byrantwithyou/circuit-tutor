<template>
  <div>
    <el-card>
      <el-button @click="praise" type="success" icon="el-icon-success" size="mini" class="button"></el-button>
      <br>
      <div>
        <img class="image" :src="imgString">
      </div>
    </el-card>
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
  position: relative;
  display: block;
}

.button {
  float: right
}
</style>


