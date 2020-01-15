export const state = () => ({
  banner_pictures: []
});

export const getters = {
  referee_banner_pictures (state, getters) {
    return state.banner_pictures.filter(f => f.tag.word === "referees");
  },
  sponsorship_banner_pictures (state, getters) {
    return state.banner_pictures.filter(f => f.tag.word === "sponsorship");
  },
  tournaments_banner_pictures (state, getters) {
    return state.banner_pictures.filter(f => f.tag.word === "tournaments");
  },
  banner_pictures (state, getters) {
    return state.banner_pictures;
  }
};

export const actions = {
  async fetch_banner_pictures ({ state, commit }) {
    const url = "banner_pictures";
    const response = await api.get(url).json();
    commit("set_banner_pictures", response);
  }
};

export const mutations = {
  set_banner_pictures (state, banner_pictures) {
    state.banner_pictures = banner_pictures;
  }
};
