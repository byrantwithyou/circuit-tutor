<template>
  <div>
    <el-button @click="praise" type="primary" icon="el-icon-success" size="mini"></el-button>
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
  computed: {},
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

</style>


