import api from "../../common/api.js";
import slugify from "slugify";

const state = {
  teams: [],
  team_stats: {}
};

const getters = {
  main_teams (state, getters) {
    return state.teams.filter(f => f.main_belgian_club).sort((a, b) => {
      return a.name > b.name ? 1 : -1;
    });
  },
  team_coordinates: (state, getters) => (team) => [team.lat, team.lng],
  team_page_url: (state, getters) => (team) => `teams/${slugify(team.name)},${team.id}`
};

const actions = {
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
