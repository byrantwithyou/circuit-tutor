<template>
  <div style="position: absolute; left: 0; top: 0; width: 100%; height: 100%; ">
    <svg width="100%" height="100%">
      <line :x1="posx2left(posx0)" :y1="posy2top(posy0) + '%'" :x2="posx2left(posx1)" :y2="posy2top(posy1) + '%'" style="stroke:rgb(255,0,0);stroke-width:2" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'wire',
  data() {
    return {
    }
  },
  computed: {
  },
  props: {
    posx0: String,
    posx1: String,
    posy0: String,
    posy1: String
  },
  components: {
  },
  methods: {
    posx2left: function (posx) {
      let left = (Number(posx) - 1) * 1.535 + 2.25;
      /* eslint-disable */
      return left + "%";
    },
    posy2top: function (posyy) {
      let trans = {
        "A": "J",
        "B": "I",
        "C": "H",
        "D": "G",
        "E": "F",
        "F": "E",
        "G": "D",
        "H": "C",
        "I": "B",
        "J": "A",
        "W": "W",
        "X": "X",
        "Y": "Y",
        "Z": "Z"
      };
      let posy = trans[posyy];
      let baseline = (posy.charCodeAt() - "A".charCodeAt()) * 4.7;
      if (["A", "B", "C", "D", "E"].includes(posy)){
        return 23.5 + baseline;
      }
      else if (["F", "G", "H", "I", "J"].includes(posy)) {
        return 34.5 + baseline; 
      }
      else if (posy == "W") {
        return 93.3 + 2;
      }
      else if (posy == "X") {
        return 88.4 + 2;
      }
      else if (posy == "Y") {
        return 9;
      }
      else if (posy == "Z") {
        return 2.8 + 1.5;
      }
      return 20.5;
    }
  }
  
}
</script>

<style scoped>
</style>
