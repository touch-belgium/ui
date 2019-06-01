<template>
   <b-navbar toggleable="lg" variant="light" fixed="top">
      <b-navbar-brand href="#">
         <b-img src="~Images/navbar-logo.png" height="45px" alt="Touch Belgium"></b-img>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
         <b-navbar-nav>
            <b-nav-item href="#">Link</b-nav-item>
            <b-nav-item href="#" disabled>Disabled</b-nav-item>
         </b-navbar-nav>

         <!-- Right aligned nav items -->
         <b-navbar-nav class="ml-auto">
            <b-nav-form>
               <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
               <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form>

            <b-nav-item-dropdown text="Lang" right>
               <b-dropdown-item href="#">EN</b-dropdown-item>
               <b-dropdown-item href="#">ES</b-dropdown-item>
               <b-dropdown-item href="#">RU</b-dropdown-item>
               <b-dropdown-item href="#">FA</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown right>
               <!-- Using 'button-content' slot -->
               <template slot="button-content"><em>User</em></template>
               <b-dropdown-item href="#">Profile</b-dropdown-item>
               <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
         </b-navbar-nav>
      </b-collapse>
   </b-navbar>
</template>

<script>
 import Navigation from './Navigation.vue';
 import moment from 'moment';

 export default {
   extends: Navigation,
   methods: {
     switch_drawer_state () {
       this.$root.$emit('SIGdrawer');
     },
     change_moment_locale (e) {
       this.$moment.locale(e.toLowerCase());
       this.$root.$emit('SIGlocale');
     }
   }
 }
</script>

<style module lang="scss">
 @import "Styles/_custom-color-variables.scss";



 .v-list a {
   color: #000;
   text-decoration: none;
   &.router-link-active {
     color: red;
   }
 }

 nav {
   .v-divider {
     border-width: 1pt;
     border-color: black !important;
   }
   .social_icon {
     /* Small fix to vuetify flex default */
     flex: 0 1 auto !important;
     div.icon {
       flex: 0 1 auto;
       align-self: center;
       -webkit-transition: all 0.3s ease;
       -moz-transition: all 0.3s ease;
       -ms-transition: all 0.3s ease;
       -o-transition: all 0.3s ease;
       transition: all 0.3s ease;

       &.icon-insta {
         fill: url(#instagram_gradient);
       }
       &.icon-fb:hover {
         fill: #8b9dc3 !important;
       }
       &.icon-twitter:hover {
         fill: #4d9ddd !important;
       }
       &.icon-yt:hover {
         fill: red !important;
       }
     }
   }
 }

</style>
