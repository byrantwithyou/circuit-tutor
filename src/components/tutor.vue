<template>
  <div>
  <el-row>
    <el-col :span="11" :offset="1" v-for = "(item, index) in socketsid" :key="index">
      <circuit :socketId="item[0]"></circuit>
    </el-col>
  </el-row>
  </div>
</template>

<script>
import circuit from "@/components/circuit";
export default {
  name: "tutor",
  computed: {
    socketsid: function () {
      return this.$store.state.sockets.socketsid;
    }
  },
  components: {
    circuit
  },
  sockets: {
    circuitChange: function () { 

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
    }
  }
}
</script>

<style scoped>
.circuit-container {
  margin: 10px;
}
</style>
