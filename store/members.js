import _ from "lodash";

export const state = () => ({
  all_members: [],
  referees: [],
  coaches: [],
  committee: []
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
  },
  committee (state, getters) {
    const committee = _.cloneDeep(state.committee);
    return committee.sort((a, b) => {
      // DANGER: volatile and can break as soon as the position is
      // modified
      const priority_ordering = new Map([
        ["President", 3],
        ["Treasurer", 2],
        ["Secretary", 1]
      ]);
      if (priority_ordering.has(a.committee_position) &&
          priority_ordering.has(b.committee_position)) {
        return priority_ordering.get(a.committee_position) <
          priority_ordering.get(b.committee_position) ? 1 : -1;
      } else if (priority_ordering.has(a.committee_position)) {
        return -1;
      } else if (priority_ordering.has(b.committee_position)) {
        return 1;
      } else {
        return a.committee_position > b.committee_position ? 1 : -1;
      }
    });
  }
};

export const actions = {
  async fetch_members ({ state, commit }) {
    const url = "members/";
    const response = await this.$axios.$get(url);
    commit("set_members", response);
  },
  async fetch_referees ({ state, commit }) {
    const url = "referees/";
    const response = await this.$axios.$get(url);
    commit("set_referees", response);
  },
  async fetch_coaches ({ state, commit }) {
    const url = "coaches/";
    const response = await this.$axios.$get(url);
    commit("set_coaches", response);
  },
  async fetch_committee ({ state, commit }) {
    const url = "committee/";
    const response = await this.$axios.$get(url);
    commit("set_committee", response);
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
  set_committee (state, committee) {
    state.committee = committee;
  },
};
