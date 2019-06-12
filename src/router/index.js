import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', name: "home", component: () => import("../views/Home.vue") },
    // { path: '/news', name: "news", component: Blog },
    // { path: '/news/*,:id', name: "post", component: Post },
    // { path: '/calendar', name: "calendar", component: Calendar },
    // { path: '/template', name: "template", component: Template },
    { path: '/competitions', name: "competitions", component: () => import("../views/Competitions.vue") },
    // { path: '/competitions/*,:id', name: "competition", component: Competition },
    // { path: '/sponsorship', name: "sponsorship", component: Sponsorship },
  ],
});
