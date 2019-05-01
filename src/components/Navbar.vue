<template>
   <v-toolbar fixed app color="white">
      <v-layout align-center fill-height row>
         <router-link to="/">
            <img src="~Images/logo-tb.png" style="height: 64px; vertical-align: middle;" alt="TB logo" />
         </router-link>
         <v-toolbar-items style="width: 100%;">
            <template v-for="(section, index) in sections">
               <v-menu v-if="section.subsections.length" offset-y class="hidden-md-and-down">
                  <v-btn flat slot="activator">{{section.name}}</v-btn>
                  <v-list>
                     <router-link
                       tag="v-list-tile"
                       :to="e.url"
                       v-for="(e, index) in section.subsections"
                       :key="index"
                     >
                        {{ e.name }}
                     </router-link>
                  </v-list>
               </v-menu>
               <v-btn class="hidden-md-and-down" flat v-else :to="section.url">
                  {{section.name}}
               </v-btn>
            </template>
            <v-divider inset vertical class="hidden-md-and-down"></v-divider>
            <v-flex md1>
               <v-select
                 class="hidden-md-and-down ml-3 pt-3"
                 prepend-icon="language"
                 :items="langs"
                 @change="change_moment_locale"
                 v-model="$i18n.locale"
               ></v-select>
            </v-flex>
            <v-spacer></v-spacer>
            <v-flex v-for="(icon_, index) in social_links" :key="index" align-self-center class="social_icon hidden-md-and-down">
               <a target="_blank" :href="icon_.url">
                  <div :class="icon_.cls" :data-icon="icon_.icon" data-size="m"></div>
               </a>
            </v-flex>
            <v-toolbar-side-icon @click="switch_drawer_state" class="hidden-lg-and-up"></v-toolbar-side-icon>
         </v-toolbar-items>
      </v-layout>
      <!-- Gradient for instagram -->
      <svg width="0" height="0">
         <radialGradient id="instagram_gradient" r="150%" cx="30%" cy="107%">
            <stop stop-color="#fdf497" offset="0" />
            <stop stop-color="#fdf497" offset="0.05" />
            <stop stop-color="#fd5949" offset="0.25" />
            <stop stop-color="#d6249f" offset="0.6" />
            <stop stop-color="#285AEB" offset="0.9" />
         </radialGradient>
      </svg>
      <svg width="0" height="0">
         <radialGradient id="instagram_gradient_reverse" r="150%" cx="30%" cy="107%">
            <stop stop-color="#285AEB" offset="0" />
            <stop stop-color="#d6249f" offset="0.2" />
            <stop stop-color="#fd5949" offset="0.6" />
            <stop stop-color="#fdf497" offset="0.85" />
            <stop stop-color="#fdf497" offset="0.9" />
         </radialGradient>
      </svg>
   </v-toolbar>
   <!-- Contact us comes after in here but it is shown before the rest of the menu items (wanted)  -->
   <!-- <div id="contact-us" class="right hide-on-med-and-down">
        <span>Contact us !</span>
        </div> -->
</template>

<script>
 import Navigation from './Navigation.vue';
 const moment = require('moment');

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
 /* @import "custom-color-variables"; */



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
