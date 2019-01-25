<template>
  <div>
    <div class="circuit-container" v-for = "(item, index) in socketsidFiltered" :key="index">
      <el-row>
        <el-col :span="11" :offset="1">
          <circuit :socketId="socketsid[2 * index]"></circuit>
        </el-col>
        <el-col :span="11" :offset="1">
          <circuit :socketId="socketsid[2 * index + 1]"></circuit>
        </el-col>
      </el-row>
    </div>
    <div class="circuit-container" v-if="socketsid.length % 2 != 0">
      <el-row>
        <el-col :span="11">
          <circuit :socketId="socketsid[socketsid.length - 1]"></circuit>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import circuit from "@/components/circuit";
export default {
  /* eslint-disable */
  name: 'tutor',
  data() {
    return {
    }
  },
  computed: {
    socketsid: function () {
      return this.$store.state.sockets.socketsid;
    },
    socketsidFiltered: function () {
      return new Array(Math.floor(this.socketsid.length / 2));
    }
  },
  props: {
  },
  components: {
    circuit
  },
  sockets: {
    connect: function () {
    },
    disconnect: function () {
    },
    circuitChange: function (data) { 
      let id = data[0];
      let type = data[1];
      let posx = data[2];
      let posy = data[3];
      let flag = data[4];
      let socketId = data[5];
      if (flag == "1") {
        this.$store.commit("circuits/addComponent", {
          componentId: id,
          componentType: type,
          posx: posx,
          posy: posy,
          socketId: socketId
        });
      }
      else {
        this.$store.commit("circuits/removeComponent", {
          componentId: id,
          componentType: type,
          posx: posx,
          posy: posy,
          socketId: socketId
        });
      }
    },
    studentOn: function(id) {
      this.$store.commit("sockets/addSocket", {
        id: id
      });
    },
    studentOff: function(id) {
      this.$store.commit("sockets/removeSocket", {
        id: id
      });
    },
    wire: function(data) {
      let idtype = data[0];
      let pos = data[1];
      let flag = data[2];
      let socketId = data[3];
      if (flag == "1") {
        this.$store.commit("wires/addWire", {
          idtype: idtype,
          pos: pos,
          socketId: socketId
        })
      }
      else {
        this.$store.commit("wires/removeWire", {
          idtype: idtype,
          pos: pos,
          socketId: socketId
        })
      }
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.circuit-container {
  margin: 10px;
}
</style>
