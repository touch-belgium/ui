import api from "../../common/api.js";

const state = {
  banner_pictures: []
};

const getters = {
  referee_banner_pictures (state, getters) {
    return state.banner_pictures.filter(f => f.tag.word === "referees");
  },
  sponsorship_banner_pictures (state, getters) {
    return state.banner_pictures.filter(f => f.tag.word === "sponsorship");
  },
  tournaments_banner_pictures (state, getters) {
    return state.banner_pictures.filter(f => f.tag.word === "tournaments");
  },
  banner_pictures (state, getters) {
    return state.banner_pictures;
  }
};

const actions = {
  async fetch_banner_pictures ({ state, commit }) {
    const url = "banner_pictures";
    const response = await api.get(url).json();
    commit("set_banner_pictures", response);
  }
};

const mutations = {
  set_banner_pictures (state, banner_pictures) {
    state.banner_pictures = banner_pictures;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
