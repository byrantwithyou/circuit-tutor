<template>
  <div style="position: relative;">
    <el-card style="position: absolute; z-index: 1000; top: 200px; left: 200px;" v-show="showWindow">Helloworld</el-card>
    <el-container>
      <el-container>
        <el-main>
          <div>
            <span class="item">Carol</span>
            <el-badge :value="12" class="item f-right">
              <el-button @click="toggleShowWindow" size="mini">Unread</el-button>
            </el-badge>
          </div>
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
      <el-footer height="70px">
        <el-row>
          <el-col :span="19">
            <el-button @click="showMessage" size="mini" class="m-5" icon="el-icon-search" circle></el-button>
            <el-button @click="showMessage" size="mini" class="m-5" type="primary" icon="el-icon-edit" circle></el-button>
            <el-button @click="showMessage" size="mini" class="m-5" type="success" icon="el-icon-check" circle></el-button>
            <div style="height: 5px;"></div>     
            <el-tooltip content="Correctiness" placement="top">
              <el-progress color="rgba(142, 113, 199, 0.7)" :text-inside="true" :stroke-width="18" :percentage="70"></el-progress>
            </el-tooltip>
          </el-col>
          <el-col :span="5">
            <el-button class="m-5" icon="el-icon-search" circle></el-button>
            <el-button class="m-5" @click="toggleShowWindow" icon="el-icon-tickets" circle></el-button>
          </el-col>
        </el-row>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "fullcard",
  data() {
    return {
      showWindow: false
    }
  },
  computed: { },
  components: { },
  methods: { 
    showMessage: function () {
      this.$message({
        message: "Successful!",
        type: "success",
        showClose: true
      })
    },
    toggleShowWindow: function() {
      this.showWindow = !this.showWindow;
    }
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

    .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
  }
  .item {
  margin-top: 10px;
  margin-right: 40px;
  margin-bottom: 10px;
  margin-left: 10px;
}
.f-right {
  float: right;
}
</style>