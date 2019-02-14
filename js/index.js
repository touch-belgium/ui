import EvilIcons from 'evil-icons/assets/evil-icons.min.js';
import EvilIconsCss from 'evil-icons/assets/evil-icons.min.css';

import Vue from 'vue';
import VueRouter from 'vue-router';
import VueI18n from 'vue-i18n';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

import moment from 'moment';

import Navbar from './Navbar.vue';
import Sidenav from './Sidenav.vue';
import Foot from './Foot.vue';
import Landing from './Landing.vue';
import Post from './Post.vue';
import PostCard from './PostCard.vue';
import Blog from './Blog.vue';
import BlogLanding from './BlogLanding.vue';
import Tag from './Tag.vue';
import Calendar from './Calendar.vue';
import Competitions from './Competitions.vue';
import Competition from './Competition.vue';
import Sponsorship from './Sponsorship.vue';
import Match from './Match.vue';
import Template from './Template.vue';

import css from 'Styles/main.scss';

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

const routes = [
  { path: '/', name:"landing", component: Landing },
  { path: '/news', name: "news", component: Blog },
  { path: '/news/*,:id', name: "post", component: Post },
  { path: '/calendar', name: "calendar", component: Calendar },
  { path: '/template', name: "template", component: Template },
  { path: '/competitions', name: "competitions", component: Competitions },
  { path: '/competitions/*,:id', name: "competition", component: Competition },
  { path: '/sponsorship', name: "sponsorship", component: Sponsorship },

];

/* Plugins come before new Vue instance */
Vue.use(require('vue-moment'), {moment});
Vue.use(VueRouter);
Vue.use(VueI18n);
Vue.use(Vuetify, {
  options: {
    // Generates CSS variables for the theme below
    customProperties: true
  },
  theme: {
    primary: '#3f51b5',
    secondary: '#b0bec5',
    accent: '#8c9eff',
    error: '#b71c1c'
  }
});

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'EN', // set locale
  messages, // set locale messages
});

// Create Vue Router with options
const router = new VueRouter({
  routes // short for `routes: routes`
});

Vue.config.devtools = true;
var vm = new Vue({
  el: '#vue-root',
  router,
  i18n,
  data: {
    drawer: false,
  },
  delimiters: ["${", "}"],
  components: { Navbar, Sidenav, Foot, Landing, Post, PostCard, Blog, BlogLanding, Tag, Calendar },
});
