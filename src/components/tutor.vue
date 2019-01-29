<template>
  <div>
  <el-row>
    <el-col :span="12" v-for = "(item, index) in socketsid" :key="index">
      <circuit :socketId="item"></circuit>
      <br>
    </el-col>
  </el-row>
  <br>
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
    circuitChange: function (data) {
      let imgString = data[0];
      let socketId = data[1];
      if (this.getState(socketId) == 1) {
        this.$store.commit("sockets/changeImg", {
          imgString: imgString,
          id: socketId
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
    studentSleep: function(id) {
      this.$store.commit("sockets/disState", {
        id: id
      })
    },
    studentAwake: function(id) {
      this.$store.commit("sockets/activeState", {
        id: id
      });
    }
  },
  methods: {
    getState: function(socketId) {
      let index = this.$store.state.sockets.socketsid.findIndex((element) => element == socketId);
      return this.$store.state.sockets.activeState[index];
    }
  }
}
</script>

<style scoped>

</style>
