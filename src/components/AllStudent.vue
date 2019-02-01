<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="12">
        <simplecard></simplecard>
      </el-col>
      <el-col :span="12">
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
</style>
