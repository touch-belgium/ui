import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', name: "home", component: () => import("../views/Home.vue") },
    { path: '/news', name: "news", component: () => import("../views/News.vue") },
    // { path: '/news/*,:id', name: "post", component: Post },
    // { path: '/calendar', name: "calendar", component: Calendar },
    // { path: '/template', name: "template", component: Template },
    { path: '/competitions', name: "competitions", component: () => import("../views/Competitions.vue") },
    { path: '/competitions/*,:id', name: "competition", component: () => import("../components/Competition.vue")},
    // { path: '/sponsorship', name: "sponsorship", component: Sponsorship },
  ],
  // The following makes the page scroll to the top after clicking a
  // router link
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});
