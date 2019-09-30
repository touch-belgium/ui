import api from "../../common/api.js";

const state = {
  contacts: []
};

const getters = {
  contacts (state, getters) {
    return state.contacts;
  }
};

const actions = {
  async fetch_contacts ({ state, commit }) {
    const url = "contacts";
    const response = await api.get(url).json();
    commit("set_contacts", response);
  }
};

const mutations = {
  set_contacts (state, contacts) {
    state.contacts = contacts;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
