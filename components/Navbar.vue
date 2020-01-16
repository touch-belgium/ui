<template>
   <b-navbar toggleable="xl" variant="light" fixed="top">
      <b-navbar-brand class="p-2 mr-3" :to="{ name: 'index' }">
         <b-img src="~assets/img/navbar-logo.png" height="60px" alt="Touch Belgium"></b-img>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
         <b-navbar-nav>

            <b-nav-item class="m-0" :to="{ name: 'posts' }">News</b-nav-item>

            <b-nav-item-dropdown
              class="m-0"
              text="Events"
            >
               <b-dropdown-item :to="{ name: 'national-championships' }">National championship</b-dropdown-item>
               <b-dropdown-item :to="{ name: 'competitions' }">Touch Belgium competitions</b-dropdown-item>
               <b-dropdown-item v-show="false">International competitions</b-dropdown-item>
               <b-dropdown-divider></b-dropdown-divider>
               <b-dropdown-item :to="{ name: 'calendar' }">Calendar</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown
              text="Get Involved"
              class="m-0"
            >
               <b-dropdown-item :to="{ name: 'where' }">Where to play ?</b-dropdown-item>
               <b-dropdown-item :to="{ name: 'referees' }">Referees</b-dropdown-item>
               <b-dropdown-item :to="{ name: 'coaching' }">Coaches</b-dropdown-item>
               <b-dropdown-item :to="{ name: 'national-teams' }">National teams</b-dropdown-item>
               <b-dropdown-item :to="{ name: 'youth' }">Youth</b-dropdown-item>
               <b-dropdown-item :to="{ name: 'getting-started' }">Getting started</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown
              text="About Touch"
              class="m-0"
            >
               <b-dropdown-item href="#">What is Touch ?</b-dropdown-item>
               <b-dropdown-item :to="{ name: 'where' }">Where to play ?</b-dropdown-item>
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

            <b-nav-item-dropdown class="lang-picker" v-show="false">
               <template slot="button-content"><span class="mr-2" v-html="globe_icon"></span> {{pretty_locale}} </template>
               <b-dropdown-item-button @click="on_locale_change('English')">English</b-dropdown-item-button>
               <b-dropdown-item-button @click="on_locale_change('Français')">Français</b-dropdown-item-button>
               <b-dropdown-item-button @click="on_locale_change('Nederlands')">Nederlands</b-dropdown-item-button>
            </b-nav-item-dropdown>

         </b-navbar-nav>

         <!-- Right aligned nav items -->
         <b-navbar-nav class="ml-auto d-none d-xl-flex">
            <a target="_blank" href="https://www.instagram.com/touchbelgium">
               <font-awesome-icon
                 class="mr-2"
                 :icon="['fab', 'instagram']"
                 :style="{
                   fontSize: '40px',
                   color: '#405de6'
                 }"
               />
            </a>
            <a target="_blank" href="https://twitter.com/touchbelgium">
               <font-awesome-icon
                 class="mx-2"
                 :icon="['fab', 'twitter']"
                 :style="{
                   fontSize: '40px',
                   color: '#00acee'
                 }"
               />
            </a>
            <a target="_blank" href="https://www.youtube.com/playlist?list=PLtSZiW1M9VjkRkxrrWVNHRgvm-m7VzOMT">
               <font-awesome-icon
                 class="mx-2"
                 :icon="['fab', 'youtube']"
                 :style="{
                   fontSize: '40px',
                   color: '#c4302b'
                 }"
               />
            </a>
            <a target="_blank" href="https://facebook.com/touchbelgium">
               <font-awesome-icon
                 class="ml-2"
                 :icon="['fab', 'facebook-square']"
                 :style="{
                   fontSize: '40px',
                   color: '#3b5998'
                 }"
               />
            </a>
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
       pretty_locale: 'EN'
     }
   },
   methods: {
     /* on_locale_change (lang) {
      *   this.$store.dispatch("i18n/change_locale", lang);
      * } */
   },
   computed: {
     /* ...mapGetters("i18n", [
      *   "pretty_locale"
      * ]), */
     globe_icon () {
       return octicons.globe.toSVG({ "height": 24 });
     }
   }
 }
</script>

<style scoped lang="scss">
 @import "~assets/css/_custom-bootstrap-variables.scss";
 @import "~assets/css/_custom-color-variables.scss";

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
