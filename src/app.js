import EvilIcons from 'evil-icons/assets/evil-icons.min.js';
import EvilIconsCss from 'evil-icons/assets/evil-icons.min.css';

import Vue from 'vue';
import Vuex from 'vuex';
import BootstrapVue from 'bootstrap-vue';
import VueProgressBar from 'vue-progressbar';
import css from './css/main.scss';

import { Icon }  from 'leaflet';
import 'leaflet/dist/leaflet.css';

// this part resolves an issue where the markers would not appear
delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

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
Vue.use(VueProgressBar, {
  color: '#e11e26',
  failedColor: 'black',
  thickness: '2px'
});

export default new Vue({
  el: '#vue-root',
  i18n,
  store,
  router,
  delimiters: ["${", "}"],
  render: h => h(App),
});
