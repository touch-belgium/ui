<template>
   <div class="page-footer">
      <v-container>
         <v-layout row wrap >
            <v-flex xs12 sm5>
               <v-list color="tb_black_light" dark dense subheader>
                  <v-subheader>Find us on social media !</v-subheader>
                  <v-list-tile><a target="_blank" class="grey-text text-lighten-3" href="https://facebook.com/touchbelgium"><div data-icon="ei-sc-facebook"></div><span>Facebook</span></a></v-list-tile>
                  <v-list-tile><a target="_blank" class="grey-text text-lighten-3" href="https://www.instagram.com/touchbelgium/"><div data-icon="ei-sc-instagram"></div>Instagram</a></v-list-tile>
                  <v-list-tile><a target="_blank" class="grey-text text-lighten-3" href="https://twitter.com/touchbelgium?lang=en"><div data-icon="ei-sc-twitter"></div><span>Twitter</span></a></v-list-tile>
                  <v-list-tile><a target="_blank" class="grey-text text-lighten-3" href="https://www.youtube.com/playlist?list=PLtSZiW1M9VjkRkxrrWVNHRgvm-m7VzOMT"><div data-icon="ei-sc-youtube"></div>YouTube</a></v-list-tile>
               </v-list>
            </v-flex>
            <v-flex xs12 offset-sm2 sm5>
               <v-list dark dense subheader>
                  <v-subheader>More</v-subheader>
                  <v-list-tile><a class="grey-text text-lighten-3" href="#!">FIT</a></v-list-tile>
                  <v-list-tile><a class="grey-text text-lighten-3" href="#!">EFT</a></v-list-tile>
                  <v-list-tile><a class="grey-text text-lighten-3" href="/api">API</a></v-list-tile>
                  <v-list-tile><a class="grey-text text-lighten-3" href="#!">Our logo</a></v-list-tile>
                  <v-list-tile><a class="grey-text text-lighten-3" href="#!">GitHub</a></v-list-tile>
               </v-list>
            </v-flex>
         </v-layout>
      </v-container>
      <v-layout>
         <v-flex class="footer-copyright">
            <v-container>
               <p>© 2018 Touch Belgium. Language test: {{$t("message.hello")}}</p>
            </v-container>
         </v-flex>
      </v-layout>
   </div>
</template>

<script>
</script>

<style scoped lang="scss">
 .page-footer {
   background: var(--v-tb_black_light-base);
   z-index: 2;
   position: relative;
   .v-list {
     background: var(--v-tb_black_light-base);
     a {
       color: white;
       text-decoration: none;
     }
   }
   .footer-copyright {
     background: var(--v-tb_black-base);
     min-height: 50px;
     color: white;
     .container {
       padding: 5px;
     }
   }
 }
</style>
