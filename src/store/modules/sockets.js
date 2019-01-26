
const state = {
  socketsid: new Array(),
  imgString: new Array()
}

const getters = {};

const mutations = {
  addSocket(state, payload) {
    state.socketsid.push(payload.id);
    state.imgString.push("");
  },
  removeSocket(state, payload) {
    let index = state.socketsid.findIndex((element) => element == payload.id);
    state.socketsid.splice(index, 1);
    state.imgString.splice(index, 1);
  },
  changeImg() {
    
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