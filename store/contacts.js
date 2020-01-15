export const state = () => ({
  contacts: []
});

export const getters = {
  contacts (state, getters) {
    return state.contacts;
  }
};

export const actions = {
  async fetch_contacts ({ state, commit }) {
    const url = "contacts";
    const response = await api.get(url).json();
    commit("set_contacts", response);
  }
};

export const mutations = {
  set_contacts (state, contacts) {
    state.contacts = contacts;
  }
};
