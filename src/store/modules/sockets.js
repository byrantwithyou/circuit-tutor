const state = {
  socketsid: new Array()
}

const getters = {};

const mutations = {
  addSocket(state, payload) {
    state.socketsid.push(payload.id);
  },
  removeSocket(state, payload) {
    state.socketsid.splice(state.socketsid.indexOf(payload.id), 1);
  }
};

const actions = {
  /*SOCKET_circuitChange({commit}, payload) {
    commit("changeData", {
      data: payload
    });
  }*/
}; 

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}