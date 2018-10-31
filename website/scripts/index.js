import Materialize from 'materialize-css/dist/js/materialize.min';
import EvilIcons from 'evil-icons/assets/evil-icons.min.js';
import EvilIconsCss from 'evil-icons/assets/evil-icons.min.css';

import Vue from 'vue';

import Post from './Post.vue';
import Blog from './Blog.vue';

import css from 'Styles/main.scss';

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, {});
});

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
