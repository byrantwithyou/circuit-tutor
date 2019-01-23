<template>
  <div class="hello">
    <h1>Fuck</h1>
    <el-button type="primary" icon="el-icon-edit"></el-button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  sockets: {
    connect: function () {
      console.log("I am connected");
    },
    disconnect: function () {
      console.log("I am disconnected");
    },
    circuitChange: function (data) {
      console.log(data);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
