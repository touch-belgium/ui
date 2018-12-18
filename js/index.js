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

import css from 'Styles/main.scss';

const routes = [
  { path: '/news', name: "news", component: Blog },
  { path: '/', name:"landing", component: Landing }
];

/* Plugins come before new Vue instance */
Vue.use(require('vue-moment'));
Vue.use(VueRouter);
Vue.use(Vuetify, {
  theme: {
    primary: '#3f51b5',
    secondary: '#b0bec5',
    accent: '#8c9eff',
    error: '#b71c1c',
    tbred: '#e11e26',
    tbyellow: '#d6b92b',
    tbblack: '#111617'
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
