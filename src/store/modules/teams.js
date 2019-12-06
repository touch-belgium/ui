import api from "../../common/api.js";
import slugify from "slugify";

const state = {
  teams: [],
  belgian_teams: [],
  team_stats: {}
};

const getters = {
  team_coordinates: (state, getters) => (team) => [team.lat, team.lng],
  team_page_url: (state, getters) => (team) => `teams/${slugify(team.name)},${team.id}`
};

const actions = {
  async fetch_belgian_teams ({ state, commit }) {
    const url = "belgian_teams";
    const response = await api.get(url).json();
    commit("set_belgian_teams", response);
  },
  async fetch_teams ({ state, commit }) {
    const url = "teams";
    const response = await api.get(url).json();
    commit("set_teams", response);
  },
  async fetch_team_stats ({ state, commit }, id) {
    const url = `teams/${id}/stats`;
    const response = await api.get(url).json();
    commit("set_team_stats", response);
  }
};

const mutations = {
  set_teams (state, teams) {
    state.teams = teams;
  },
  set_belgian_teams (state, teams) {
    state.belgian_teams = teams;
  },
  set_team_stats (state, team_stats) {
    state.team_stats = team_stats;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
