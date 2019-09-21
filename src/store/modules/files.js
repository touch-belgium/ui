import api from "../../common/api.js";

const state = {
  files: []
};

const getters = {
  referee_files (state, getters) {
    return state.files.filter(f => f.tag.word === "referees");
  },
  sponsorship_files (state, getters) {
    return state.files.filter(f => f.tag.word === "sponsorship");
  },
  files (state, getters) {
    return state.files;
  }
};

const actions = {
  async fetch_files ({ state, commit }) {
    const url = "files";
    const response = await api.get(url).json();
    commit("set_files", response);
  }
};

const mutations = {
  set_files (state, files) {
    state.files = files;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
