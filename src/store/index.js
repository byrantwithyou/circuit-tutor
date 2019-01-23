import Vue from "vue";
import Vuex from "vuex";
import sockets from "./modules/sockets";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    sockets
  }
});