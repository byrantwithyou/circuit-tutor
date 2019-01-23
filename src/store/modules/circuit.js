const state = {
  components: [],
  socketId: ""
}

const getters = {};

const mutations = {
  addComponent(state, payload) {
    state.components.push({
      componentId: payload.componentId,
      componentType: payload.componentType,
      position: payload.position
    });
  },
  removeComponent(state, payload) {
    state.components.splice(state.components.findIndex((element) => element.componentId == payload.componentId), 1);
  },
  setSocketId(state, payload) {
    state.socketId = payload.socketId;
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