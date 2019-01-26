import Vue from 'vue';
import App from './App.vue';
import router from "@/router";
import store from "@/store";
import './plugins/element.js';
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import VueSocketIO from "vue-socket.io";

Vue.use(ElementUI);
Vue.use(new VueSocketIO({
  debug: false,
  connection: "http://localhost:3000/tutor",
  vuex: {
    store,
    actionPrefix: "SOCKET_",
    mutationPrefix: "SOCKET_"
  }
}));


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
