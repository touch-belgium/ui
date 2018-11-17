import Materialize from 'materialize-css/dist/js/materialize.min';
import EvilIcons from 'evil-icons/assets/evil-icons.min.js';
import EvilIconsCss from 'evil-icons/assets/evil-icons.min.css';

import Vue from 'vue';

import Post from './Post.vue';
import PostCard from './PostCard.vue';
import Blog from './Blog.vue';
import BlogLanding from './BlogLanding.vue';
import Tag from './Tag.vue';
import Calendar from './Calendar.vue';

import css from 'Styles/main.scss';


document.addEventListener('DOMContentLoaded', () => {
  // Init side navs
  var side_navs = document.querySelectorAll('.sidenav');
  var sn_instances = M.Sidenav.init(side_navs, {});

  // Init dropdown menus
  var drop_menus = document.querySelectorAll('.dropdown-trigger');
  var dm_instances = M.Dropdown.init(drop_menus, {
    constrainWidth: false,
    coverTrigger: false,
  });

  // Init collaps
  var collaps_menus = document.querySelectorAll('.collapsible');
  var cm_instances = M.Collapsible.init(collaps_menus, {});

  // Init selects
  var selects = document.querySelectorAll('select');
  var s_instances = M.FormSelect.init(selects, {});
});

/* Plugins come before new Vue instance */
Vue.use(require('vue-moment'));
Vue.config.devtools = true;
var vm = new Vue({
  el: '#vue-root',
  delimiters: ["${", "}"],
  components: { Post, PostCard, Blog, BlogLanding, Tag, Calendar },
});
