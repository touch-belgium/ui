<template>
   <div class="footer text-light">
      <div class="top_footer">
         <b-container>
            <b-row align-h="between" class="pt-5">
               <b-col cols="12" md="6" xl="4">
                  <h5>Find us on social media !</h5>
                  <p>
                     <a target="_blank" href="https://facebook.com/touchbelgium">
                        <font-awesome-icon
                          class="mr-2"
                          :icon="['fab', 'facebook']"
                          :style="{
                            color: '#3b5998'
                          }"
                        />Facebook
                     </a>
                  </p>
                  <p>
                     <a target="_blank" href="https://www.instagram.com/touchbelgium/">
                        <font-awesome-icon
                          class="mr-2"
                          :icon="['fab', 'instagram']"
                          :style="{
                            color: '#405de6'
                          }"
                        />Instagram
                     </a>
                  </p>
                  <p>
                     <a target="_blank" href="https://twitter.com/touchbelgium?lang=en">
                        <font-awesome-icon
                          class="mr-2"
                          :icon="['fab', 'twitter']"
                          :style="{
                            color: '#00acee'
                          }"
                        />Twitter
                     </a>
                  </p>
                  <p>
                     <a target="_blank" href="https://www.youtube.com/playlist?list=PLtSZiW1M9VjkRkxrrWVNHRgvm-m7VzOMT">
                        <font-awesome-icon
                          class="mr-2"
                          :icon="['fab', 'youtube']"
                          :style="{
                            color: '#c4302b'
                          }"
                        />YouTube
                     </a>
                  </p>
               </b-col>

               <b-col class="footer-more text-right" cols="12" md="6" xl="4" v-show="false">
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
      <div class="bottom_footer">
         <b-container>
            <b-row align-h="between">
               <b-col cols="6" class="pt-2 pb-2">
                  <span>Touch Belgium</span>
               </b-col>
               <b-col cols="6" class="text-right pt-2 pb-2">
                  <a href="https://github.com/touch-belgium">
                     <font-awesome-icon :icon="['fab', 'github-alt']"  />
                     <span class="ml-1"> GitHub</span>
                  </a>
                  <span>|</span>
                  <a href="https://admin.touch-belgium.be/api">API</a>
               </b-col>
            </b-row>
         </b-container>
      </div>
   </div>
</template>

<script>
 export default {
   data () {
     return {

     }
   },
   computed: {

   }
 }
</script>

<style scoped lang="scss">
 .footer {
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
   .top_footer {
     background: $tb-black-light;
     @include media-breakpoint-down(md) {
       .footer-more {
         text-align: left !important;
       }
     }
   }
   .bottom_footer {
     background: $tb-black;
   }
 }
</style>
