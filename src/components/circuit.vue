<template>
  <div>
    <span>{{socketId.split("#")[1]}}</span>
    <div class="placeholder"></div>
    <el-card>
      <el-button @click="praise" type="success" icon="el-icon-success" size="mini" class="button"></el-button>
      <br>
      <br>
      <div style="position: relative;">
        <img src="/breadboard/breadboard.svg" class="image">
        <img v-for="(item, index) in components" :key="index" :src="item.componentType" :style="{ position: position, top: top + '%', left: posx2left(item.posx) + '%', width: width + '%'}">
      </div>
    </el-card>
  </div>
</template>

<script>
//1.54% for one hole, 1 / 65 excatly
export default {
  name: 'circuit',
  data() {
    return {
      position: "absolute",
      top: 20.5,
      width: 9.5
    }
  },
  components: {
    
  },
  props: {
    socketId: String,
  },
  computed: {
    components: function () {
      return this.$store.state.circuits.circuits[this.socketId];
    }
  },
  methods: {
    create:function(){
    },
    praise: function () {
      this.$socket.emit("praise", this.socketId);
    },
    posx2left: function (posx) {
      let left = (posx - 1) * 1.55 + 2.2;
      /* eslint-disable */
      console.log(left);
      return left;
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


