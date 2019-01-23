import Vue from "vue";
import Vuex from "vuex";
import sockets from "./modules/sockets";
import circuits from "./modules/circuits";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    sockets,
    circuits
  }
});