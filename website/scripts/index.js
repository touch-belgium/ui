import Vue from 'vue';
import css from 'Styles/main.scss';
import Materialize from 'materialize-css/dist/js/materialize.min';


document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, {});
});

var vm = new Vue({
  el: '#vue-root',
  delimiters: ["${", "}"],
  data: {
    message: 'Hello Vue!',
  }
});
