<template>
   <div class="page-footer">
      <v-container>
         <v-layout row wrap >
            <v-flex xs12 sm5>
               <v-list color="tb_black_light" dark dense subheader>
                  <v-subheader>Find us on social media !</v-subheader>
                  <v-list-tile><a target="_blank" class="subheading grey-text text-lighten-3" href="https://facebook.com/touchbelgium"><div data-icon="ei-sc-facebook"></div>Facebook</a></v-list-tile>
                  <v-list-tile><a target="_blank" class="subheading grey-text text-lighten-3" href="https://www.instagram.com/touchbelgium/"><div data-icon="ei-sc-instagram"></div>Instagram</a></v-list-tile>
                  <v-list-tile><a target="_blank" class="subheading grey-text text-lighten-3" href="https://twitter.com/touchbelgium?lang=en"><div data-icon="ei-sc-twitter"></div>Twitter</a></v-list-tile>
                  <v-list-tile><a target="_blank" class="subheading grey-text text-lighten-3" href="https://www.youtube.com/playlist?list=PLtSZiW1M9VjkRkxrrWVNHRgvm-m7VzOMT"><div data-icon="ei-sc-youtube"></div>YouTube</a></v-list-tile>
               </v-list>
            </v-flex>
            <v-flex xs12 offset-sm2 sm5>
               <v-list dark dense subheader>
                  <v-subheader>More</v-subheader>
                  <v-list-tile><a class="subheading grey-text text-lighten-3" href="#!">TB logo</a></v-list-tile>
                  <v-list-tile><a class="subheading grey-text text-lighten-3" href="https://www.internationaltouch.org/">FIT</a></v-list-tile>
                  <v-list-tile><a class="subheading grey-text text-lighten-3" href="http://www.toucheurope.org/">EFT</a></v-list-tile>
               </v-list>
            </v-flex>
         </v-layout>
      </v-container>
      <v-layout>
         <v-flex class="footer-copyright">
            <v-container>
               <v-layout row>
                  <span class="mt-2 ml-3">© {{new Date() | moment("YYYY")}} Touch Belgium</span>
                  <v-spacer></v-spacer>
                  <span class="mt-2"><a class="" href="https://github.com/"><div data-icon="ei-sc-github"></div> GitHub</a> | <a href="/api">API</a></span>
               </v-layout>
            </v-container>
         </v-flex>
      </v-layout>
   </div>
</template>

<script>
</script>

<style module lang="scss">
 /* @import "custom-color-variables"; */

 $tb-black-light: black;
 $tb-black: black;

 .page-footer {
   background: $tb-black-light;
   z-index: 2;
   position: relative;
   .v-list {
     background: $tb-black-light;
     a {
       color: white;
       text-decoration: none;
     }
   }
   .footer-copyright {
     background: $tb-black;
     min-height: 50px;
     color: color("grey", "lighten-4");
     .container {
       padding: 5px;
       span {
         a {
           text-decoration: none;
           color: color("grey", "lighten-4");
           div.icon.icon--ei-sc-github {
             fill: color("grey", "lighten-4");
           }
         }
       }
     }
   }
 }
</style>
