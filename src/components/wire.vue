<template>
  <div :style="{position: position, top: top, left: left}">
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
      let left = (posx - 1) * 1.51 + 2.25;
      return left + "%";

    },
    top: function () {
      return "1%";
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
