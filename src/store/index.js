import Vue from "vue";
import Vuex from "vuex";
import i18n from "./modules/i18n.js";
import blog from "./modules/blog.js";
import competitions from "./modules/competitions.js";

// As of 22/07/19, the following line is needed so devtools can check
// the Vuex store. No store detected otherwise.
Vue.config.devtools = true;
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    i18n,
    blog,
    competitions
  }
});
