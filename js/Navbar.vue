<template>
   <v-toolbar fixed app dark color="tb_red">
      <v-layout align-center fill-height row>
         <router-link to="/">
            <img src="~Images/logo-tb.png" style="height: 64px; vertical-align: middle;" alt="TB logo" />
         </router-link>
         <v-toolbar-items style="width: 100%;">
            <template v-for="(section, index) in sections">
               <v-menu v-if="section.subsections.length" offset-y class="hidden-md-and-down">
                  <v-btn flat slot="activator">{{section.name}}</v-btn>
                  <v-list>
                     <v-list-tile
                       v-for="(e, index) in section.subsections"
                       :key="index"
                       @click=""
                     >
                        <router-link :to="e.url">
                           {{ e.name }}
                        </router-link>
                     </v-list-tile>
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
                 dense
                 prepend-icon="language"
                 :items="langs"
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
   </v-toolbar>

   <!-- Contact us comes after in here but it is shown before the rest of the menu items (wanted)  -->
   <!-- <div id="contact-us" class="right hide-on-med-and-down">
        <span>Contact us !</span>
        </div> -->
</template>

<script>
 import Navigation from './Navigation.vue';

 export default {
   extends: Navigation,
   methods: {
     switch_drawer_state () {
       this.$root.$emit('SIGdrawer');
     }
   }
 }
</script>

<style module lang="scss">
 @import "custom-color-variables";


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
     border-color: white !important;
   }
   .social_icon {
     /* Small fix to vuetify flex default */
     flex: 0 1 auto !important;
     div.icon {
       flex: 0 1 auto;
       align-self: center;
       transition: 0.3s;
       fill: #ffffff !important;
       &.icon-insta:hover {
         fill: #fef444 !important;
       }
       &.icon-fb:hover {
         fill: #3b5998 !important;
       }
       &.icon-twitter:hover {
         fill: #55acee !important;
       }
       &.icon-yt:hover {
         fill: #000 !important;
       }
     }
   }
 }

</style>
