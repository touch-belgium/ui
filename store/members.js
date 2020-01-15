export const state = () => ({
  all_members: [],
  referees: [],
  coaches: []
});

export const getters = {
  referee_board (state, getters) {
    return state.referees.filter(r => r.referee_board_member).sort((a, b) => {
      return a.referee_level < b.referee_level ? 1 : -1;
    });
  },
  normal_refs (state, getters) {
    return state.referees.filter(r => !r.referee_board_member).sort((a, b) => {
      return a.referee_level < b.referee_level ? 1 : -1;
    });
  },
  coaching_board (state, getters) {
  }
};

export const actions = {
  async fetch_members ({ state, commit }) {
    const url = "members";
    const response = await api.get(url).json();
    commit("set_teams", response);
  },
  async fetch_referees ({ state, commit }) {
    const url = "referees";
    const response = await api.get(url).json();
    commit("set_referees", response);
  },
  async fetch_coaches ({ state, commit }) {
    const url = "coaches";
    const response = await api.get(url).json();
    commit("set_coaches", response);
  }
};

export const mutations = {
  set_members (state, members) {
    state.all_members = members;
  },
  set_referees (state, refs) {
    state.referees = refs;
  },
  set_coaches (state, coaches) {
    state.coaches = coaches;
  },
};
