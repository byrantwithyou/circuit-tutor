<template>
  <div class="circuit-container">
    <el-container>
    <el-main>
    <el-card>
      <el-button @click="toggle">Toggle</el-button>
      <el-button @click="sendRec">Send</el-button>      
      <el-button @click="praise" type="success" icon="el-icon-star-on" size="mini" class="button"></el-button>
      <div style="width: 100%; height: 20px;"></div>
      <div>
        <vue-cropper :img-style="{ 'width': '100%', 'height': '300px' }" ref="cropper" v-if="!imgShow" :initialAspectRatio="0.5" :viewMode=3 :autoCropArea=0.4 :src="imgString"></vue-cropper>
        <img v-show="imgShow" class="image" :src="imgString">
      </div>
      <br>
      <el-row>
        <el-col :span="20" :gutter="1">
          <el-input placeholder="Say Something to the student" suffix-icon="el-icon-edit" v-model="text"></el-input>
        </el-col>
        <el-col :span="3">
          <el-button @click="textSend" style="float: right;" type="primary" round icon="el-icon-check"></el-button>
        </el-col>
      </el-row>
        <v-chart :options="options" />
    </el-card>
    </el-main>
    <el-aside width="20px;"></el-aside>
    </el-container>
  </div>
</template>

<script>
import initImg from "@/config/initImg";
import VueCropper from "vue-cropperjs";
import "echarts/lib/chart/heatmap";
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/pie';
import 'echarts/lib/chart/map';
import 'echarts/lib/chart/radar';
import 'echarts/lib/chart/scatter';
import 'echarts/lib/chart/effectScatter';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/polar';
import 'echarts/lib/component/geo';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/title';
import 'echarts/lib/component/visualMap';
import 'echarts/lib/component/dataset';


export default {
  name: 'circuit',
  data() {
    let hours = ['12a', '1a'];
    let days = ['Add Component'];
    let data = [[0,0,1], [0,1,2]]

    data = data.map(function (item) {
      return [item[1], item[0], item[2] || '-'];
    });

    return {
      text: "",
      imgShow: true,
      options: {
        tooltip: {
          position: "top"
        },
        animation: false,
        grid: {
          height: '10%',
          y: '10%'
        },
        xAxis: {
          type: 'category',
          data: hours,
          splitArea: {
            show: true
          }
        },
        yAxis: {
          type: 'category',
          data: days,
          splitArea: {
            show: true
          }
        },
        visualMap: {
          min: 0,
          max: 10,
          calculable: true,
          orient: 'horizontal',
          left: 'center',
          bottom: '15%',
          show: false
        },
        series: [{
          name: 'Punch Card',
          type: 'heatmap',
          data: data,
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }]
      }
    }
  },
  components: {
    VueCropper,
  },
  props: {
    socketId: String,
  },
  methods: {
    praise: function () {
      this.$socket.emit("praise", this.socketId, "Wonderful");
    },
    textSend: function() {
      this.$socket.emit("text", this.socketId, this.text);
    },
    toggle: function () {
      this.imgShow = !this.imgShow;
    },
    sendRec: function() {
      let img = this.$refs.cropper.getImageData();
      let imgWidth = img.width;
      let imgHeight = img.height;


      let cropperData = this.$refs.cropper.getCropBoxData();
      let xOffset = cropperData.left;
      let yOffset = cropperData.top;
      let croppedAreaWidth = cropperData.width;
      let croppedAreaHeight = cropperData.height;
      this.$socket.emit("highlight", this.socketId, xOffset / imgWidth, yOffset / imgHeight, croppedAreaWidth / imgWidth, croppedAreaHeight / imgHeight);
    }
  },
  computed: {
    imgString: function() {
      let index = this.$store.state.sockets.socketsid.findIndex((element) => element == this.socketId);
      if (this.$store.state.sockets.activeState[index] == 0) {
        return initImg;
      }
      return this.$store.state.sockets.imgString[index];
    }
  },
  created: function () {
    let that = this;
    setTimeout(function (){
      that.$store.commit("sockets/activeState", {
        id: that.socketId
      });
    }, 1000);
  }

}

</script>

<style scoped>
.image{
  width: 100%;
  height: 300px;
  position: relative;
  display: block;
}

.button {
  float: right
}

.circuit-contaienr{
  margin: 30px
}



</style>


