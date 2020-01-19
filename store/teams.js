import slugify from "slugify";

export const state = () => ({
  teams: [],
  belgian_teams: [],
  team_stats: {}
});

export const getters = {
  team_coordinates: (state, getters) => (team) => [team.lat, team.lng],
  team_page_url: (state, getters) => (team) => `teams/${slugify(team.name)},${team.id}`
};

export const actions = {
  async fetch_belgian_teams ({ state, commit }) {
    const url = "belgian_teams";
    const response = await this.$axios.$get(url);
    commit("set_belgian_teams", response);
  },
  async fetch_teams ({ state, commit }) {
    const url = "teams";
    const response = await this.$axios.$get(url);
    commit("set_teams", response);
  },
  async fetch_team_stats ({ state, commit }, id) {
    const url = `teams/${id}/stats`;
    const response = await this.$axios.$get(url);
    commit("set_team_stats", response);
  }
};

export const mutations = {
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
