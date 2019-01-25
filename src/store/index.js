import Vue from "vue";
import Vuex from "vuex";
import sockets from "./modules/sockets";
import circuits from "./modules/circuits";
import wires from "./modules/wires";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    sockets,
    circuits,
    wires
  }
});