<template>
  <div>
    <div v-for = "(item, index) in socketsidFiltered" :key="index">
      <el-row>
        <el-col :span="11">
          <circuit :socketId="socketsid[2 * index]"></circuit>
        </el-col>
        <el-col :span="2">
        </el-col>
        <el-col :span="11">
          <circuit :socketId="socketsid[2 * index + 1]"></circuit>
        </el-col>
      </el-row>
    </div>
    <div v-if="socketsid.length % 2 != 0">
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
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
