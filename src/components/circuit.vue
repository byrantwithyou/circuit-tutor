<template>
  <div>
    <span>{{socketId.split("#")[1]}}</span>
    <div class="placeholder"></div>
    <el-card>
      <el-button @click="praise" type="success" icon="el-icon-success" size="mini" class="button"></el-button>
      <br>
      <br>
      <div style="position: relative;">
        <img src="/breadboard/breadboard2.svg" class="image">
        <img v-for="(item, index) in components" :key="index" :src="item.componentType" :style="{ position: position, top: posy2top(item.posy) + '%', left: posx2left(item.posx) + '%', width: width + '%'}">
        <wire v-for="(item, index) in wires" :key="100 + index" :posx0="item.posx[0]" :posx1="item.posx[1]" :posy0="item.posy[0]" :posy1="item.posy[1]"></wire>          
      </div>
    </el-card>
  </div>
</template>

<script>
import wire from "@/components/wire";
export default {
  name: 'circuit',
  data() {
    return {
      position: "absolute",
      width: 6.5
    }
  },
  components: {
    wire
  },
  props: {
    socketId: String,
  },
  computed: {
    components: function () {
      return this.$store.state.circuits.circuits[this.socketId];
    },
    wires: function () {
      return this.$store.state.wires.wires[this.socketId];
    }
  },
  methods: {
    create:function(){
    },
    praise: function () {
      this.$socket.emit("praise", this.socketId, "Wonderful");
    },
    posx2left: function (posx) {
      let left = (posx - 1) * 1.535 + 2.27;
      /* eslint-disable */
      console.log(left);
      return left;
    },
    posy2top: function(posy) {
      let trans = {
        "A": "J",
        "B": "I",
        "C": "H",
        "D": "G",
        "E": "F",
        "F": "E",
        "G": "D",
        "H": "C",
        "I": "B",
        "J": "A",
        "W": "W",
        "X": "X",
        "Y": "Y",
        "Z": "Z"
      };
      console.log("posy" + posy);
      let posyy = trans[posy];
      let baseline = (posyy.charCodeAt() - "A".charCodeAt()) * 4.7;
      if (["A", "B", "C", "D", "E"].includes(posyy)){
        return 21.5 + baseline;
      }
      else if (["F", "G", "H", "I", "J"].includes(posyy)) {
        return 31.5 + baseline; 
      }
      else if (posyy == "W") {
        return 92.8;
      }
      else if (posyy == "X") {
        return 88.1;
      }
      else if (posyy == "Y") {
        return 7;
      }
      else if (posyy == "Z") {
        return 2.3;
      }
      
      return 20.5;
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


