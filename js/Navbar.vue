<template>
   <v-toolbar app dark color="tb_red">
      <v-layout align-center fill-height row>
         <router-link to="/">
            <img src="~Images/logo-tb.png" style="height: 64px" alt="TB logo" />
         </router-link>
         <div class="social-links-navbar hidden-md-and-down">
            <a v-for="(icon_, index) in social_links" target="_blank" :href="icon_.url">
               <div :class="icon_.cls" :data-icon="icon_.icon" data-size="m"></div>
            </a>
         </div>
      </v-layout>
      <v-layout align-center fill-height justify-end>
         <v-toolbar-items>
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
             url: "/news"
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
         url: {name: "news"},
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

     ]
   })
 }
</script>

<style module lang="scss">
 @import "custom-color-variables";

 nav {

 }

 .social-links-navbar {
   div.icon {
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
 }
</style>
