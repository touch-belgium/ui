<template functional>
   <v-layout row wrap class="page-footer">
      <v-flex xs12 md5 offset-md2>
         <v-list dark dense subheader>
            <v-subheader>Find us on social media !</v-subheader>
            <v-list-tile><a target="_blank" class="grey-text text-lighten-3" href="https://facebook.com/touchbelgium"><div data-icon="ei-sc-facebook"></div><span>Facebook</span></a></v-list-tile>
            <v-list-tile><a target="_blank" class="grey-text text-lighten-3" href="https://www.instagram.com/touchbelgium/"><div data-icon="ei-sc-instagram"></div>Instagram</a></v-list-tile>
            <v-list-tile><a target="_blank" class="grey-text text-lighten-3" href="https://twitter.com/touchbelgium?lang=en"><div data-icon="ei-sc-twitter"></div><span>Twitter</span></a></v-list-tile>
            <v-list-tile><a target="_blank" class="grey-text text-lighten-3" href="https://www.youtube.com/playlist?list=PLtSZiW1M9VjkRkxrrWVNHRgvm-m7VzOMT"><div data-icon="ei-sc-youtube"></div>YouTube</a></v-list-tile>
         </v-list>
      </v-flex>
      <v-flex xs12 md5>
         <v-list dark dense subheader>
            <v-subheader>More</v-subheader>
            <v-list-tile><a class="grey-text text-lighten-3" href="#!">FIT</a></v-list-tile>
            <v-list-tile><a class="grey-text text-lighten-3" href="#!">EFT</a></v-list-tile>
            <v-list-tile><a class="grey-text text-lighten-3" href="/api">API</a></v-list-tile>
            <v-list-tile><a class="grey-text text-lighten-3" href="#!">Our logo</a></v-list-tile>
            <v-list-tile><a class="grey-text text-lighten-3" href="#!">GitHub</a></v-list-tile>
         </v-list>
      </v-flex>
      <v-flex>
         <div class="footer-copyright">
            © 2018 Touch Belgium
         </div>
      </v-flex>
   </v-layout>
</template>

<script>
</script>

<style scoped lang="scss">
 .page-footer {
   color: #fafafa;
   background: #273234;
   z-index: 2;
   position: relative;
   .v-list {
     background: #273234;
     a {
       color: white;
     }
   }
   .footer-copyright {
     background: #1c2426;
     min-height: 50px;
   }
 }
</style>
