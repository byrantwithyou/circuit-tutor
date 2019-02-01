<template>
  <div id="app">
    <el-container style="height: 500px; border: 1px solid #eee">
        <el-header style="border: 1px solid #eee">
          <el-row v-show="!showSearchInput">
            <el-col :span="1" :offset="23">
              <el-button @click="toggleSearchInput" style="margin: 10px;" icon="el-icon-search" circle></el-button>
            </el-col>
          </el-row>
          <el-row v-show="showSearchInput">
            <el-col :span="22">
              <el-input @blur="toggleSearchInput" style="margin: 10px;" placeholder="Please Enter Student Name" v-model="searchInput"></el-input>
            </el-col>
            <el-col :span="1" :offset="1">
              <el-button @click="toggleSearchInput" style="margin: 10px;" icon="el-icon-search" circle></el-button>
            </el-col>
          </el-row>
        </el-header>
        <el-container>
          <el-aside style="background-color: rgb(238, 241, 246)" width="200px">
            <el-menu :default-openeds="['1', '2']">
              <el-submenu index="1">
                <template slot="title"><i class="el-icon-info"></i>Home</template>
                <el-menu-item @click="showCondition" index="1-1">Condition</el-menu-item>
                <el-menu-item @click="showInstruction" index="1-2">Instruction</el-menu-item>
                <el-menu-item @click="showNotice" index="1-3">Notice</el-menu-item>
              </el-submenu>
              <el-submenu index="2">
                <template slot="title"><i class="el-icon-menu"></i>Group</template>
                <el-menu-item @click="showAllStudent" index="2-1">All</el-menu-item>
                <el-menu-item @click="showGoodStudent" index="2-2">Good Student</el-menu-item>
                <el-menu-item @click="showPoorStudent" index="2-3">Poor Student</el-menu-item>
              </el-submenu>
            </el-menu>
          </el-aside>
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
    </el-container>
  </div>
</template>


<script>
export default {
  name: "app",
  data() {
    return {
      showSearchInput: false,
      searchInput: "",
    }
  },
  computed: { },
  components: { },
  methods: { 
    toggleSearchInput: function () {
      this.showSearchInput = !this.showSearchInput;
      if (this.searchInput != "") {
        this.$router.push("/all");
      }
      this.searchInput = "";
    },
    showCondition: function() {
      this.$router.push("/");
    },
    showInstruction: function () {
      this.$router.push("/instruct");
    },
    showNotice: function () {
      this.$router.push("/notice");
    },
    showAllStudent: function() {
      this.$router.push("/all");
    },
    showGoodStudent: function() {
      this.$router.push("/good");
    },
    showPoorStudent: function() {
      this.$router.push("/poor");
    } 
  },
  created: function() {
    this.$router.push("/");
  }
}
</script>

<style scoped>
</style>
