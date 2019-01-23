import Vue from "vue";
import Vuex from "vuex";
import sockets from "./modules/sockets";
import circuit from "./modules/circuit";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    sockets,
    circuit
  }
});