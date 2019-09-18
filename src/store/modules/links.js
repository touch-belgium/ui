import api from "../../common/api.js";

const state = {
  links: []
};

const getters = {
  referee_links (state, getters) {
    return state.links.filter(f => f.tag.word === "referees");
  },
  links (state, getters) {
    return state.links;
  }
};

const actions = {
  async fetch_links ({ state, commit }) {
    const url = "links";
    const response = await api.get(url).json();
    commit("set_links", response);
  }
};

const mutations = {
  set_links (state, links) {
    state.links = links;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
