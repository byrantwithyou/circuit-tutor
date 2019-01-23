const state = {
  data: ""
}

const getters = {};

const mutations = {
  changeData(state, payload) {
    state.data = payload.data;
  }
};

const actions = {
  SOCKET_circuitChange({commit}, payload) {
    commit("changeData", {
      data: payload
    });
    console.log(payload);
  }
}; 

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}