import Vue from "vue";


const state = {
  wires: {}
}

const getters = {};

const mutations = {
  addWire: function (state, payload) {
    if (!state.wires[payload.socketId]) {
      Vue.set(state.wires, payload.socketId, new Array());
    }
    let idtype = payload.idtype;
    let pos = payload.pos;
    let posx = new Array();
    let posy = new Array();
    for (let key in [0, 1]) {
      let str = pos.split("#")[key];
      posx.push(str.substring(3, str.length - 1));
      posy.push(str[str.length - 1]);
    }
    state.wires[payload.socketId].push({
      posx: posx,
      posy: posy,
      wireId: idtype.split("#")[0]
    });
  },
  removeWire: function(state, payload) {
    let id = payload.idtype.split("#")[0];
    let socketId = payload.socketId;
    if (state.wires[socketId]) {
      let ind = state.wires[socketId].findIndex((element) => element.wireId == id)
      if (ind != -1) {
        state.wires[socketId].splice(ind, 1);
      }
    }
    console.log("============================");
    console.log(socketId);
    console.log(state.wires[socketId]);
    if (state.wires[socketId].length == 0) {
      Vue.delete(state.wires, socketId);
    }
  }
};

const actions = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}