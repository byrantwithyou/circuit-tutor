<template>
  <div>
    <el-container>
      <el-main>
      </el-main>
      <el-aside width="50px">
        <el-row>
          <el-col :span="2">
            <div class="bg-purple-light">
              <i v-for="index in 6" :key="index" class="el-icon-search bg-purple-light m-10"></i>
            </div>
          </el-col>
        </el-row>
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