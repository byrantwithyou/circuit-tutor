<template>
  <div>
    <el-container height="100px">
      <el-main>Snapshot of Circuit Board</el-main>
      <el-aside width="50px">
        <div>
          <i class="el-icon-edit"></i>
        </div>
      </el-aside>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "simplecard",
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
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
</style>