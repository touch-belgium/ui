import slugify from "slugify";

export const state = () => ({
  clubs: [],
  belgian_clubs: [],
  member_clubs: [],
  club_stats: {}
});

export const getters = {
  club_coordinates: (state, getters) => (club) => [club.lat, club.lng],
  club_page_url: (state, getters) => (club) => `clubs/${club.id}/${slugify(club.name, {lower: true})}/`,
  current_champion (state, getters) {
    // TODO: FIXME: DANGER: this is just a dummy implementation.
    return state.belgian_clubs.find(t => t.name == "Boitsfort");
  }
};

export const actions = {
  async fetch_belgian_clubs ({ state, commit }) {
    const url = "belgian_clubs/";
    const response = await this.$axios.$get(url);
    commit("set_belgian_clubs", response);
  },
  async fetch_clubs ({ state, commit }) {
    const url = "clubs/";
    const response = await this.$axios.$get(url);
    commit("set_clubs", response);
  },
  async fetch_member_clubs ({ state, commit }) {
    const url = "member_clubs/";
    const response = await this.$axios.$get(url);
    commit("set_member_clubs", response);
  },
  async fetch_club_stats ({ state, commit }, id) {
    const url = `clubs/${id}/stats/`;
    const response = await this.$axios.$get(url);
    commit("set_club_stats", response);
  }
};

export const mutations = {
  set_clubs (state, clubs) {
    state.clubs = clubs;
  },
  set_belgian_clubs (state, clubs) {
    state.belgian_clubs = clubs;
  },
  set_member_clubs (state, clubs) {
    state.member_clubs = clubs;
  },
  set_club_stats (state, club_stats) {
    state.club_stats = club_stats;
  }
};
