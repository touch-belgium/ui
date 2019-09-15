import api from "../../common/api.js";

const state = {
  teams: []
};

const getters = {
  main_teams (state, getters) {
    return state.teams.filter(f => f.main_belgian_club).sort((a, b) => {
      return a.name > b.name ? 1 : -1;
    });
  },
  teams (state, getters) {
    return state.teams;
  },
  team_coordinates: (state, getters) => (team) => [team.lat, team.lng],
};

const actions = {
  async fetch_teams ({ state, commit }) {
    const url = "teams";
    const response = await api.get(url).json();
    commit("set_teams", response);
  }
};

const mutations = {
  set_teams (state, teams) {
    state.teams = teams;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
