<template>
  <div>
    <el-card>
      <el-button @click="praise" type="success" icon="el-icon-success" size="mini" class="button"></el-button>
      <br>
      <div>
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
  }

}

</script>

<style scoped>


.button {
  float: right
}
</style>


