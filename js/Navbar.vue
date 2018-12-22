<template>
   <v-toolbar app dark color="tb_red">
      <v-layout align-center fill-height row>
         <router-link to="/">
            <img src="~Images/logo-tb.png" style="height: 64px" alt="TB logo" />
         </router-link>
         <v-toolbar-items style="width: 100%;">
            <template v-for="(section, index) in sections">
               <v-menu v-if="section.subsections.length" offset-y class="hidden-md-and-down">
                  <v-btn flat slot="activator">{{section.name}}</v-btn>
                  <v-list>
                     <v-list-tile
                       v-for="(e, index) in section.subsections"
                       :key="index"
                     >
                        <router-link :to="e.url">
                           <v-list-tile-title>{{ e.name }}</v-list-tile-title>
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
            <v-flex v-for="(icon_, index) in social_links" align-self-center class="social_icon hidden-md-and-down">
               <a target="_blank" :href="icon_.url">
                  <div :class="icon_.cls" :data-icon="icon_.icon" data-size="m"></div>
               </a>
            </v-flex>
         </v-toolbar-items>
      </v-layout>
   </v-toolbar>

   <!-- Contact us comes after in here but it is shown before the rest of the menu items (wanted)  -->
   <!-- <div id="contact-us" class="right hide-on-med-and-down">
        <span>Contact us !</span>
        </div> -->
</template>

<script>
 export default {
   data: () => ({
     social_links: [
       {
         url: "https://www.instagram.com/touchbelgium/",
         cls: "icon-insta",
         icon: "ei-sc-instagram"

       },
       {
         url: "https://facebook.com/touchbelgium",
         cls: "icon-fb",
         icon: "ei-sc-facebook"

       },
       {
         url: "https://twitter.com/touchbelgium",
         cls: "icon-twitter",
         icon: "ei-sc-twitter"

       },
       {
         url: "https://www.youtube.com/playlist?list=PLtSZiW1M9VjkRkxrrWVNHRgvm-m7VzOMT",
         cls: "icon-yt",
         icon: "ei-sc-youtube"

       },
     ],
     sections: [
       {
         name: "News",
         url: {name: "news"},
         subsections: []
       },
       {
         name: "Events",
         subsections: [
           {
             name: "Tournaments and results",
             url: "/competitions"
           },
           {
             name: "Calendar",
             url: "/news"
           },
           {
             name: "AGM",
             url: "/news"
           }
         ]
       },
       {
         name: "Get Involved",
         subsections: [
           {
             name: "Where to play",
             url: "/news"
           },
           {
             name: "Referees",
             url: "/news"
           },
           {
             name: "Coaches",
             url: "/news"
           },
           {
             name: "National teams",
             url: "/news"
           }
         ]
       },
       {
         name: "About touch",
         subsections: [
           {
             name: "What is touch ?",
             url: "/news"
           },
           {
             name: "Where to play ?",
             url: "/news"
           },
           {
             name: "Training/courses",
             url: "/news"
           },
           {
             name: "Rules and regulations",
             url: "/news"
           }
         ]
       },
       {
         name: "Sponsorship",
         url: {name: "sponsorship"},
         subsections: []
       },
       {
         name: "Touch Belgium",
         subsections: [
           {
             name: "Members",
             url: "/news"
           },
           {
             name: "Committee",
             url: "/news"
           },
           {
             name: "Contact",
             url: "/news"
           },
         ]
       },
     ],
     langs: ['EN', 'FR', 'NL']
   })
 }
</script>

<style module lang="scss">
 @import "custom-color-variables";

 nav {

   .v-divider {
     border-width: 1px;
     border-color: #555 !important;
   }
   .social_icon {
     /* Small fix to vuetify flex default */
     flex: 0 1 auto !important;
   }
 }

   div.icon {
     flex: 0 1 auto;
     align-self: center;
     transition: 0.3s;
     fill: #ffffff !important;
     &.icon-insta:hover {
       fill: #3f729b !important;
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
</style>
