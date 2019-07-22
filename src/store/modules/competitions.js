import api from "../../common/api.js";

const state = {
  search_box: "",
  competitions: []
};

const getters = {
  competitions (state, getters) {
    return state.competitions;
  },
  shown (state, getters) {
    const patt = new RegExp(state.search_box, "i");
    return state.competitions.filter(c => patt.test(c.name));
  },
  total_rows (state, getters) {
    return getters.shown.length;
  }
};

const actions = {
  async fetch_competitions ({ state, commit }) {
    const url = "competitions";
    const response = await api.get(url).json();
    commit("set_competitions", response.results);
  }
};

const mutations = {
  set_competitions (state, competitions) {
    state.competitions = competitions;
  },
  update_search_box (state, search) {
    state.search_box = search;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
