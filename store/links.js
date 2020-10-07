export const state = () => ({
  links: []
});

export const getters = {
  referee_links (state, getters) {
    return state.links.filter(f => f.tag.word === "referees");
  },
  rules_links (state, getters) {
    return state.links.filter(f => f.tag.word === "rules");
  },
  links (state, getters) {
    return state.links;
  }
};

export const actions = {
  async fetch_links ({ state, commit }) {
    const url = "links/";
    const response = await this.$axios.$get(url);
    commit("set_links", response);
  }
};

export const mutations = {
  set_links (state, links) {
    state.links = links;
  }
};
