import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', name: "home", component: () => import("../views/Home.vue") },
    { path: '/news', name: "news", component: () => import("../views/News.vue") },
    { path: '/news/*,:id', name: "post", component: () => import("../components/Post.vue") },
    // { path: '/calendar', name: "calendar", component: Calendar },
    // { path: '/template', name: "template", component: Template },
    { path: '/competitions', name: "competitions", component: () => import("../views/Competitions.vue") },
    { path: '/where', name: "where", component: () => import("../views/Where.vue") },
    { path: '/referees', name: "referees", component: () => import("../views/Referees.vue") },
    { path: '/coaching', name: "coaching", component: () => import("../views/Coaching.vue") },
    { path: '/national-teams', name: "national-teams", component: () => import("../views/NationalTeams.vue") },
    { path: '/youth', name: "youth", component: () => import("../views/Youth.vue") },
    { path: '/getting-started', name: "getting-started", component: () => import("../views/GettingStarted.vue") },

    { path: '/competitions/*,:id', name: "competition", component: () => import("../components/Competition.vue")},
    // { path: '/sponsorship', name: "sponsorship", component: Sponsorship },
  ],
  // The following makes vue router able to navigate through anchor tags

  // It also allows the page to automatically scroll to the top after
  // clicking a router link
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash,
        offset: { x: 0, y: 120 }
      }
    }
  }
});
