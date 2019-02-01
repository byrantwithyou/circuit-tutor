<template>
  <div>
    <el-container>
      <el-main>
        <div>Carol</div>
        <img style="width: 100%;" src="bg.png">
      </el-main>
      <el-aside width="50px" >
        <div class="m-5">Active</div>     
        <el-button class="m-10" size="mini" type="primary" icon="el-icon-view" circle></el-button>
        <el-button class="m-10" size="mini" type="success" icon="el-icon-success" circle></el-button>
        <el-button class="m-10" size="mini" type="info" icon="el-icon-question" circle></el-button>
        <el-button class="m-10" size="mini" type="warning" icon="el-icon-error" circle></el-button>
        <el-button class="m-10" size="mini" type="danger" icon="el-icon-service" circle></el-button> 
      </el-aside>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "fullcard",
  data() {
    return {
    }
  },
  computed: { },
  components: { },
  methods: { 
  }
}
</script>

<style scoped>
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    padding: 0;
  }

  .m-10 {
    margin: 10px;
  }

  .m-5 {
    margin: 5px;
  }
</style>