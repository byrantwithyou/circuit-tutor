<template>
  <div>
    <el-row class="m-10">
      <el-col :span='8'>
        <el-button round>Order Key1</el-button>
      </el-col>
      <el-col :span="8">
        <el-button round>Order Key2</el-button>
      </el-col>
      <el-col :span="8">
        <el-button round>Order Key3</el-button>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12" v-for="index in 2" :key="index">
        <simplecard></simplecard>
      </el-col>
    </el-row>
  </div>
</template>


<script>
import simplecard from "@/components/SimpleCard";
export default {
  name: "allstudent",
  data() {
    return {
    }
  },
  computed: { },
  components: { 
    simplecard
  },
  methods: { 
  }
}
</script>

<style scoped>
.m-10 {
  margin: 10px;
}
</style>
