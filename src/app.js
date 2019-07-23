import EvilIcons from 'evil-icons/assets/evil-icons.min.js';
import EvilIconsCss from 'evil-icons/assets/evil-icons.min.css';

import Vue from 'vue';
import Vuex from 'vuex';
import BootstrapVue from 'bootstrap-vue';
import css from './css/main.scss';

import moment from 'moment';
// require('moment/locale/fr');

import store from './store/index.js';
import router from './router/index.js';
import i18n from './i18n/index.js';

import App from './App.vue';


Vue.config.devtools = true;

/* Plugins come before new Vue instance */
Vue.use(require('vue-moment'), {moment});
Vue.use(BootstrapVue);
Vue.use(Vuex);

export default new Vue({
  el: '#vue-root',
  i18n,
  store,
  router,
  delimiters: ["${", "}"],
  render: h => h(App),
});
