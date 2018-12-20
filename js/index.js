import EvilIcons from 'evil-icons/assets/evil-icons.min.js';
import EvilIconsCss from 'evil-icons/assets/evil-icons.min.css';

import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

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

import css from 'Styles/main.scss';

const routes = [
  { path: '/', name:"landing", component: Landing },
  { path: '/news', name: "news", component: Blog },
  { path: '/competitions', name: "competitions", component: Competitions },

];

/* Plugins come before new Vue instance */
Vue.use(require('vue-moment'));
Vue.use(VueRouter);
Vue.use(Vuetify, {
  options: {
    // Generates CSS variables for the theme below
    customProperties: true
  },
  theme: {
    primary: '#3f51b5',
    secondary: '#b0bec5',
    accent: '#8c9eff',
    error: '#b71c1c',
    tb_red: '#e11e26',
    tb_yellow: '#d6b92b',
    tb_black: '#111617',
    tb_black_light: '#273234'
  }
});

const router = new VueRouter({
  routes // short for `routes: routes`
});

Vue.config.devtools = true;
var vm = new Vue({
  el: '#vue-root',
  data: () => ({
    drawer_visible: false
  }),
  router,
  delimiters: ["${", "}"],
  components: { Navbar, Sidenav, Foot, Landing, Post, PostCard, Blog, BlogLanding, Tag, Calendar },
});
