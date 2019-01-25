<template>
  <div :style="{position: position, top: top + '%', left: left}">
    <svg>
      <line x1="0" y1="0" :x2="200" :y2="200" style="stroke:rgb(255,0,0);stroke-width:2" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'wire',
  data() {
    return {
      position: "absolute",
    }
  },
  computed: {
    left: function () {
      let posx = Number(this.posx0);
      let left = (posx - 1) * 1.535 + 2.25;
      return left + "%";

    },
    top: function () {
      let posyy = this.posy0;
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
        return 23 + baseline;
      }
      else if (["F", "G", "H", "I", "J"].includes(posy)) {
        return 33 + baseline; 
      }
      else if (posy == "W") {
        return 92.8 + 2;
      }
      else if (posy == "X") {
        return 88.1 + 2;
      }
      else if (posy == "Y") {
        return 8.5;
      }
      else if (posy == "Z") {
        return 2.3 + 1.5;
      }
      return 20.5;
    }
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
      let left = (posx - 1) * 1.51 + 2.25;
      /* eslint-disable */
      console.log(left);
      return left;
    }
  }
  
}
</script>

<style scoped>
</style>
