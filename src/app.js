import EvilIcons from 'evil-icons/assets/evil-icons.min.js';
import EvilIconsCss from 'evil-icons/assets/evil-icons.min.css';

import Vue from 'vue';

import VueI18n from 'vue-i18n';
import ElementUI from 'element-ui';
import "Styles/custom-element.scss";

import moment from 'moment';

import store from './store/index.js';
import router from './router/index.js';
import App from './components/App.vue';

const messages = {
  EN: {
    message: {
      hello: 'hello world'
    }
  },
  FR: {
    message: {
      hello: 'texte en français'
    }
  }
};

/* Plugins come before new Vue instance */
Vue.use(require('vue-moment'), {moment});
Vue.use(VueI18n);
Vue.use(ElementUI);

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'EN', // set locale
  messages, // set locale messages
});

Vue.config.devtools = true;

var vm = new Vue({
  el: '#vue-root',
  i18n,
  store,
  router,
  delimiters: ["${", "}"],
  render: h => h(App),
  // components: { Navbar, Sidenav, Foot, Landing, Post, PostCard, Blog, BlogLanding, Tag, Calendar },
});
