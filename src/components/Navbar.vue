<template>
   <b-navbar toggleable="xl" variant="light" fixed="top">
      <b-navbar-brand class="p-2 mr-3" :to="{ name: 'home' }">
         <b-img src="~Images/navbar-logo.png" height="60px" alt="Touch Belgium"></b-img>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
         <b-navbar-nav>

            <b-nav-item class="m-0" :to="{ name: 'news' }">News</b-nav-item>

            <b-nav-item-dropdown
              class="m-0"
              text="Events"
            >
               <b-dropdown-item :to="{ name: 'national-championships' }">National championship</b-dropdown-item>
               <b-dropdown-item :to="{ name: 'competitions' }">Competitions and results</b-dropdown-item>
               <b-dropdown-divider></b-dropdown-divider>
               <b-dropdown-item :to="{ name: 'calendar' }">Calendar</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown
              text="Get Involved"
              class="m-0"
            >
               <b-dropdown-item :to="{ name: 'where' }">Where to play</b-dropdown-item>
               <b-dropdown-item :to="{ name: 'referees' }">Referees</b-dropdown-item>
               <b-dropdown-item :to="{ name: 'coaching' }">Coaches</b-dropdown-item>
               <b-dropdown-item :to="{ name: 'national-teams' }">National teams</b-dropdown-item>
               <b-dropdown-item :to="{ name: 'youth' }">Youth</b-dropdown-item>
               <b-dropdown-item :to="{ name: 'getting-started' }">Getting started</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown
              text="About touch"
              class="m-0"
            >
               <b-dropdown-item href="#">What is touch</b-dropdown-item>
               <b-dropdown-item :to="{ name: 'where' }">Where to play</b-dropdown-item>
               <b-dropdown-item href="#">Training/courses</b-dropdown-item>
               <b-dropdown-item href="#">Rules and regulations</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item class="m-0" :to="{ name: 'sponsorship' }">Sponsorship</b-nav-item>

            <b-nav-item-dropdown
              text="Touch Belgium"
              class="m-0"
            >
               <b-dropdown-item :to="{ name: 'where' }">Members</b-dropdown-item>
               <b-dropdown-item :to="{ name: 'become-a-member' }">Become a member</b-dropdown-item>
               <b-dropdown-item :to="{ name: 'committee' }">Committee</b-dropdown-item>
               <b-dropdown-item :to="{ name: 'agm' }">AGM</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item class="m-0" :to="{ name: 'contact' }">Contact</b-nav-item>

            <b-nav-item-dropdown class="lang-picker">
               <template slot="button-content"><span class="mr-2" v-html="globe_icon"></span> {{pretty_locale}} </template>
               <b-dropdown-item-button @click="on_locale_change('English')">English</b-dropdown-item-button>
               <b-dropdown-item-button @click="on_locale_change('Français')">Français</b-dropdown-item-button>
               <b-dropdown-item-button @click="on_locale_change('Nederlands')">Nederlands</b-dropdown-item-button>
            </b-nav-item-dropdown>

         </b-navbar-nav>

         <!-- Right aligned nav items -->
         <b-navbar-nav class="ml-auto d-none d-xl-flex">
            <b-nav-item class="social-icon" target="_blank" href="https://www.instagram.com/touchbelgium"><div data-icon="ei-sc-instagram" data-size="m"></div></b-nav-item>
            <b-nav-item class="social-icon" target="_blank" href="https://facebook.com/touchbelgium"><div data-icon="ei-sc-facebook" data-size="m"></div></b-nav-item>
            <b-nav-item class="social-icon" target="_blank" href="https://twitter.com/touchbelgium"><div data-icon="ei-sc-twitter" data-size="m"></div></b-nav-item>
            <b-nav-item class="social-icon" target="_blank" href="https://www.youtube.com/playlist?list=PLtSZiW1M9VjkRkxrrWVNHRgvm-m7VzOMT"><div data-icon="ei-sc-youtube" data-size="m"></div></b-nav-item>

         </b-navbar-nav>
      </b-collapse>
   </b-navbar>
</template>

<script>
 import moment from "moment";
 import octicons from "@primer/octicons";
 import { mapGetters } from "vuex";

 export default {
   data () {
     return {

     }
   },
   methods: {
     on_locale_change (lang) {
       this.$store.dispatch("i18n/change_locale", lang);
     }
   },
   computed: {
     ...mapGetters("i18n", [
       "pretty_locale"
     ]),
     globe_icon () {
       return octicons.globe.toSVG({ "height": 24 });
     }
   }
 }
</script>

<style module lang="scss">
 @import "Styles/_custom-bootstrap-variables.scss";
 @import "Styles/_custom-color-variables.scss";

 .v-list a {
   color: #000;
   text-decoration: none;
   &.router-link-active {
     color: red;
   }
 }

 .navbar-nav {
   .dropdown {
     .dropdown-toggle:focus {
       outline: none;
     }
     .dropdown-menu:focus {
       outline: none;
     }
   }
   .lang-picker {
     @media (min-width: map-get($grid-breakpoints, "xl")) {
       padding-left: 1em;
       margin-left: 1em;
       border-left: 1px solid black;
     }
   }
   .social-icon {
     .nav-link {
       padding: 0;
       background-size: 10px 10px;
       .icon {

       }
     }
   }
 }

</style>
