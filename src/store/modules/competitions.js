import api from "../../common/api.js";
import slugify from "slugify";

const state = {
  search_box: "",
  competitions: [],
  n_total_shown: 5
};

const getters = {
  competitions (state, getters) {
    return state.competitions;
  },
  filtered_competitions (state, getters) {
    const patt = new RegExp(state.search_box, "i");
    return state.competitions.filter(c => patt.test(c.name));
  },
  paginated_competitions (state, getters) {
    return getters.filtered_competitions.slice(0, state.n_total_shown);
  }
};

const actions = {
  async fetch_competitions ({ state, commit }) {
    const url = "competitions";
    const response = await api.get(url).json();
    commit("set_competitions", response.results);
  }
};

const mutations = {
  set_competitions (state, competitions) {
    state.competitions = competitions.map(comp => {return {...comp, router: `competitions/${slugify(comp.name)},${comp.id}`};});
  },
  update_search_box (state, search) {
    state.search_box = search;
  },
  show_more (state) {
    state.n_total_shown += 5;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
