<template>
  <div>
    <span>{{socketId.split("#")[1]}}</span>
    <div class="placeholder"></div>
    <el-card>
      <el-button @click="praise" type="success" icon="el-icon-success" size="mini" class="button"></el-button>
      <br>
      <br>
      <img src="@/assets/breadboard/breadboard.svg" class="image">
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'circuit',
  data() {
    return {
    }
  },
  props: {
    socketId: String,
  },
  computed: {
    components: function () {
      let socket = this.socketId;
      return this.$store.state.circuits.circuits[socket];
    }
  },
  methods: {
    create:function(){
    },
    praise: function () {
      this.$socket.emit("praise", this.socketId);
    }

  }
}

</script>

<style scoped>

.image {
  width: 100%;
  display: block;
  position: relative;
}

.button {
  float: right
}
.placeholder {
  width: 100%;
  height: 20px;
}
</style>


