import _ from "lodash";
import moment from "moment";
import { getField, updateField } from 'vuex-map-fields';

// Useful to reset the form
const init_state = {
  season: "",
  first_name: "",
  family_name: "",
  email_address: "",
  touch_club: "",
  dob: "",
  media_consent: false,
  guardian_name: "",
  guardian_email: ""
};

export const state = () => ({
  season: "",
  first_name: "",
  family_name: "",
  email_address: "",
  touch_club: "",
  dob: "",
  media_consent: false,
  guardian_name: "",
  guardian_email: ""
});

export const getters = {
  getField,
  under18: state => {
    return moment().diff(moment(state.dob), 'years') < 18;
  },
  full_name: state => `${_.trim(state.first_name)} ${_.trim(state.family_name)}`,
  unfinished_form: state => {
    return _.isEmpty(state.first_name) ||
           _.isEmpty(state.family_name) ||
           _.isEmpty(state.email_address) ||
           _.isEmpty(state.dob);
  }
};

export const actions = {
  async fetch_contacts ({ state, commit }) {
    const url = "contacts/";
    const response = await this.$axios.$get(url);
    commit("set_contacts", response);
  },
  async post_form ({ state, getters, commit }) {
    const url = "registrations/";
    const response = await this.$axios.$post(url, {
      season: _.trim(state.season),
      name: getters.full_name,
      email: _.trim(state.email_address),
      club: state.touch_club,
      dob: state.dob,
      media_consent: state.media_consent,
      guardian_name: _.trim(state.guardian_name),
      guardian_email: _.trim(state.guardian_email)
    });
    commit("reset_state");
  }
};

export const mutations = {
  updateField,
  reset_state (state) {
    Object.assign(state, init_state);
  }
};
