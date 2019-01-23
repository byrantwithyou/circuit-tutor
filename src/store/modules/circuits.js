const state = {
  circuits: {}
}

const getters = {};

const mutations = {
  addComponent(state, payload) {
    if (!state.circuits[payload.socketId]) {
      state.circuits[payload.socketId] = new Array();
    }
    state.circuits[payload.socketId].push({
      componentType: payload.componentType,
      componentId: payload.componentId,
      posx: payload.posx,
      posy: payload.posy
    })
  },
  removeComponent(state, payload) {
    let ind = state.circuits[payload.socketId].findIndex( (element) => element.componentId == payload.componentId)
    if (ind != -1) {
      state.circuits[payload.socketId].splice(ind, 1);
    }
  }
};

const actions = { };

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}