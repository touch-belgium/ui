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
    return getters.sponsorship_files.find(f => _.includes(f.file, "sponsoring-en"));
  }
};

export const actions = {
  async fetch_files ({ state, commit }) {
    const url = "files";
    const response = await api.get(url).json();
    commit("set_files", response);
  }
};

export const mutations = {
  set_files (state, files) {
    state.files = files;
  }
};
