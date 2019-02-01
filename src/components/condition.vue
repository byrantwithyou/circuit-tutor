<template>
  <div>
    <h1>Condition</h1>
    <el-row>
      <el-col v-for="index in 3" :key="index" :span="8">
        <GChart type="ColumnChart" :data="chartData" :options="chartOptions"/>
      </el-col>
    </el-row>
  </div>
</template>


<script>
export default {
  name: "condition",
  data() {
    return {
      chartData: [
        ['Year', 'Sales', 'Expenses', 'Profit'],
        ['2014', 1000, 400, 200],
        ['2015', 1170, 460, 250],
        ['2016', 660, 1120, 300],
        ['2017', 1030, 540, 350]
      ],
      chartOptions: {
        chart: {
          title: 'Company Performance',
          subtitle: 'Sales, Expenses, and Profit: 2014-2017',
        }
      }
    }
  },
  computed: { },
  components: {},
  methods: { 
  }
}
</script>

<style scoped>
</style>
