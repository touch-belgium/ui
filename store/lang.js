// import instance from "../../app.js";
// import i18n from "../../i18n/index.js";

export const state = () => ({
  locale: "en"
});

export const getters = {
  pretty_locale (state, getters) {
    switch (state.locale) {
    case "en":
      return "English";
    case "fr":
      return "Français";
    case "nl":
      return "Nederlands";
    default:
      return "English";
    }
  }
};

export const actions = {
  change_locale ({ state, commit }, pretty_locale) {
    let locale;
    if (pretty_locale == "Nederlands") {
      locale = "nl";
    } else if (pretty_locale == "Français") {
      locale = "fr";
    } else {
      locale = "en";
    }
    commit("state_locale", locale);
    commit("i18n_locale", locale);
    commit("moment_locale", locale);
  }
};

export const mutations = {
  state_locale (state, locale) {
    state.locale = locale;
  },
  i18n_locale (state, locale) {
    i18n.locale = locale;
  },
  moment_locale (state, locale) {
    instance.$moment.locale(locale);
    instance.$root.$emit("SIGlocale");
  }
};
