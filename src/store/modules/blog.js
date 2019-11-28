import api from "../../common/api.js";

const state = {
  posts: [],
  post: null,
  tags: [],
  selected_tags: []
};

const getters = {
  latest_posts (state, getters) {
    return state.posts.slice(0, 4);
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
          return state.selected_tags.includes(t.word);
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
    commit("set_posts", response);
  },
  async fetch_posts ({ state, commit }) {
    const url = "posts";
    const response = await api.get(url).json();
    commit("set_posts", response);
  },
  async fetch_post ({ state, commit }, id) {
    const url = `posts/${id}/`;
    const response = await api.get(url).json();
    commit("set_post", response);
  },
  async fetch_tags ({ state, commit }) {
    const url = "tags";
    const response = await api.get(url).json();
    commit("set_tags", response);
  },
  select_tag ({ state, commit }, tag_word) {
    const tag = state.tags.find(t => t.word == tag_word);
    commit("add_selected_tag", tag);
    const new_tags = _.without(state.tags, tag);
    commit("set_tags", new_tags);
  }
};

const mutations = {
  set_posts (state, posts) {
    state.posts = posts;
  },
  set_post (state, post) {
    state.post = post;
  },
  set_tags (state, tags) {
    state.tags = tags;
  },
  add_selected_tag (state, tag) {
    state.selected_tags.push(tag);
  }
 };

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
