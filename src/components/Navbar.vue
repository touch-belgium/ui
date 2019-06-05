<template>
   <b-navbar toggleable="xl" variant="light" fixed="top">
      <b-navbar-brand class="mr-5" href="#">
         <b-img src="~Images/navbar-logo.png" height="45px" alt="Touch Belgium"></b-img>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
         <b-navbar-nav>
            <b-nav-item-dropdown >
               <template slot="button-content">News and events</template>
               <b-dropdown-item href="#">Announcements</b-dropdown-item>
               <b-dropdown-item href="#">Tournaments and results</b-dropdown-item>
               <b-dropdown-item href="#">Calendar</b-dropdown-item>
               <b-dropdown-item href="#">AGM</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown>
               <template slot="button-content">Get Involved</template>
               <b-dropdown-item href="#">Where to play</b-dropdown-item>
               <b-dropdown-item href="#">Referees</b-dropdown-item>
               <b-dropdown-item href="#">Coaches</b-dropdown-item>
               <b-dropdown-item href="#">National teams</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown>
               <template slot="button-content">About touch</template>
               <b-dropdown-item href="#">What is touch</b-dropdown-item>
               <b-dropdown-item href="#">Where to play</b-dropdown-item>
               <b-dropdown-item href="#">Training/courses</b-dropdown-item>
               <b-dropdown-item href="#">Rules and regulations</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item href="#">Sponsorship</b-nav-item>

            <b-nav-item-dropdown>
               <template slot="button-content">Touch Belgium</template>
               <b-dropdown-item href="#">Members</b-dropdown-item>
               <b-dropdown-item href="#">Committee</b-dropdown-item>
               <b-dropdown-item href="#">Contact</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown class="lang-picker">
               <template slot="button-content"><span v-html="settings"></span></template>
               <b-dropdown-item href="#">EN</b-dropdown-item>
               <b-dropdown-item href="#">FR</b-dropdown-item>
               <b-dropdown-item href="#">NL</b-dropdown-item>
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
 import moment from 'moment';
 import octicons from 'octicons';

 export default {
   methods: {
     change_moment_locale (e) {
       this.$moment.locale(e.toLowerCase());
       this.$root.$emit('SIGlocale');
     }
   },
   computed: {
     settings () {
       return octicons.settings.toSVG({ "height": 24 });
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
