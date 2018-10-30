import Materialize from 'materialize-css/dist/js/materialize.min';

import css from 'Styles/main.scss';


document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, {});
});
