<template>
   <div>
      <carousel :pictures="banner_pictures_of('national teams')"></carousel>
      <b-container class="mt-3">
         <b-row>
            <b-col cols="12">
               <h1>National teams</h1>
               <p class="text-justify">
                  Have you ever wanted the opportunity to represent your
                  country, and to play for Belgium as part of a national
                  team? The European Touch Championships, and the Touch
                  World Cup give you the chance to play Touch at the
                  highest level and to take part in an unforgettable
                  experience.
               </p>

               <p class="text-justify">
                  Belgium currently has a Men's, Women's and Men's over
                  40 team representing the country at international
                  level, and is continuously looking for new talent to
                  develop and grow the national teams. The Belgian teams
                  are currently preparing for the European Touch
                  Championships 2020, and are training on a regular basis
                  around Belgium.
               </p>
               <p class="text-justify">
                  The national players are supported by a team of
                  dedicated coaches, managers, physios and supporters -
                  all helping the squads strive for the best results.
               </p>
               <p class="text-justify">
                  If you are interested in joining, watching or
                  supporting the national teams in any way, email
                  <a href="mailto:president@touch-belgium.be">president@touch-belgium.be</a>.
               </p>

               <p class="text-justify">
                  For sponsorship opportunities, check out our sponsorship brochure below:
               </p>
               <b-row v-if="display_sponsorship_brochure" class="mb-5">
                  <b-embed
                    type="iframe"
                    :src="display_sponsorship_brochure.file">
                  </b-embed>
               </b-row>
            </b-col>
         </b-row>
      </b-container>
   </div>
</template>

<script>
 import { mapGetters } from "vuex";

 import Carousel from "@/components/Carousel";

 export default {
   async asyncData ({ store, error }) {
     try {
       await store.dispatch("banner_pictures/fetch_banner_pictures");
       await store.dispatch("files/fetch_files");
     } catch (e) {
       error({ statusCode: 404, message: "This page is currently unavailable" });
     }
   },
   data () {
     return {

     }
   },
   head () {
     return {
       title: "National Teams - Touch Belgium"
     }
   },
   methods: {

   },
   mounted () {

   },
   computed: {
     ...mapGetters("banner_pictures", [
       "banner_pictures_of"
     ]),
     ...mapGetters("files", [
       "sponsorship_files",
       "display_sponsorship_brochure"
     ])
   },
   components: {
     Carousel
   }
 }
</script>

<style module lang="scss">
</style>
