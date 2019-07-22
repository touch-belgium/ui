import api from "../../common/api.js";

const state = {
  posts: [],
  tags: [],
  selected_tags: []
};

const getters = {
  latest_posts (state, getters) {
    return state.posts.slice(0, 6);
  },
  posts (state, getters) {
    return state.posts;
  },
  tags (state, getters) {
    return state.tags;
  },
  filtered_posts (state, getters) {
    if (state.selected_tags.length) {
      return state.posts.filter(p => {
        return p.tags.some(t => {
          return store.selected_tags.includes(t.word);
        });
      });
    } else {
      return state.posts;
    }
  }
};

const actions = {
  async fetch_recent_posts ({ state, commit }) {
    const url = "posts/recent";
    const response = await api.get(url).json();
    commit("set_posts", response.results);
  },
  async fetch_posts ({ state, commit }) {
    const url = "posts";
    const response = await api.get(url).json();
    commit("set_posts", response.results);
  },
  async fetch_tags ({ state, commit }) {
    const url = "tags";
    const response = await api.get(url).json();
    commit("set_tags", response.results);
  }
};

const mutations = {
  set_posts (state, posts) {
    state.posts = posts;
  },
  set_tags (state, tags) {
    state.tags = tags;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
