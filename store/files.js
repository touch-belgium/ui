export const state = () => ({
  files: []
});

export const getters = {
  referee_files (state, getters) {
    return state.files.filter(f => f.tag.word === "referees");
  },
  sponsorship_files (state, getters) {
    return state.files.filter(f => f.tag.word === "sponsorship");
  },
  files (state, getters) {
    return state.files;
  },
  display_sponsorship_brochure (state, getters) {
    return getters.sponsorship_files.find(f => f.file.includes("sponsorship-booklet-en"));
  }
};

export const actions = {
  async fetch_files ({ state, commit }) {
    const url = "files";
    const response = await this.$axios.$get(url);
    commit("set_files", response);
  }
};

export const mutations = {
  set_files (state, files) {
    state.files = files;
  }
};
