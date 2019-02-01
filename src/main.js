import Vue from 'vue';
import App from './App.vue';
import router from "@/router";
import store from "@/store";
import './plugins/element.js';
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import VueGoogleCharts from "vue-google-charts";

Vue.use(ElementUI);
Vue.use(VueGoogleCharts);


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

