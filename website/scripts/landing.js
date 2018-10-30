import Vue from 'vue';

import Post from './Post.vue';
import Blog from './Blog.vue';

import css from 'Styles/landing.scss';

/* Plugins come before new Vue instance */
Vue.use(require('vue-moment'));

var vm = new Vue({
  el: '#vue-root',
  delimiters: ["${", "}"],
  data: {
    message: 'Hello Vue!',
  },
  components: { Post, Blog },
});
