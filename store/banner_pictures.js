export const state = () => ({
  banner_pictures: []
});

export const getters = {
  banner_pictures_of: (state, getters) => (tag_word) => {
    return state.banner_pictures.filter(f => f.tag.word === tag_word);
  }
};

export const actions = {
  async fetch_banner_pictures ({ state, commit }) {
    const url = "banner_pictures/";
    const response = await this.$axios.$get(url);
    commit("set_banner_pictures", response);
  }
};

export const mutations = {
  set_banner_pictures (state, banner_pictures) {
    state.banner_pictures = banner_pictures;
  }
};
