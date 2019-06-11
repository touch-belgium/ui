<template>
   <div class="footer">
      <div class="footer1">
         <b-container>
            <b-row align-h="between" class="pt-5">
               <b-col cols="12" md="6" xl="4">
                  <ul>
                     <h5>Find us on social media !</h5>
                     <li><a target="_blank" href="https://facebook.com/touchbelgium"><div class="align-middle" data-icon="ei-sc-facebook"></div>Facebook</a></li>
                     <li><a target="_blank" href="https://www.instagram.com/touchbelgium/"><div class="align-middle" data-icon="ei-sc-instagram"></div>Instagram</a></li>
                     <li><a target="_blank" href="https://twitter.com/touchbelgium?lang=en"><div class="align-middle" data-icon="ei-sc-twitter"></div>Twitter</a></li>
                     <li><a target="_blank" href="https://www.youtube.com/playlist?list=PLtSZiW1M9VjkRkxrrWVNHRgvm-m7VzOMT"><div class="align-middle" data-icon="ei-sc-youtube"></div>YouTube</a></li>
                  </ul>
               </b-col>
               <b-col class="text-right" cols="12" md="6" xl="4">
                  <ul>
                     <h5>More</h5>
                     <li><a class="subheading grey-text text-lighten-3" href="#!">TB logo</a></li>
                     <li><a class="subheading grey-text text-lighten-3" href="https://www.internationaltouch.org/">FIT</a></li>
                     <li><a class="subheading grey-text text-lighten-3" href="http://www.toucheurope.org/">EFT</a></li>
                  </ul>
               </b-col>
            </b-row>
         </b-container>
      </div>
      <div class="footer2">
         <b-container>
            <b-row align-h="between">
               <b-col cols="6" class="pt-2 pb-2">
                  <span class="align-middle">© {{new Date() | moment("YYYY")}} Touch Belgium</span>
               </b-col>
               <b-col cols="6" class="text-right pt-2 pb-2">
                  <a href="https://github.com/"><span v-html="github"></span><span class="align-middle ml-1"> GitHub</span></a> <span class="align-middle">|</span> <a class="align-middle" href="/api">API</a>
               </b-col>
            </b-row>
         </b-container>
      </div>
   </div>
</template>

<script>
 import octicons from "octicons";

 export default {
   name: 'Foot',
   data () {
     return {

     }
   },
   computed: {
     github () {
       return octicons["mark-github"].toSVG();
     }
   }
 }
</script>

<style lang="scss">
 @import "Styles/_custom-color-variables.scss";

 .footer {
   color: white;
   a {
     color: white;
     &:hover {
       text-decoration: none;
     }
   }
   ul {
     list-style: none;
     .icon {
       margin-bottom: 5px;
     }
   }
   .footer1 {
     background: $tb-black-light;
   }
   .footer2 {
     background: $tb-black;
     color: color("grey", "lighten-4");
     .octicon {
       fill: white;
     }
   }
 }
</style>
