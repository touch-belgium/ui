<template>
   <div>
      <carousel :pictures="tournaments_banner_pictures"></carousel>
      <FixedTBLogo></FixedTBLogo>
      <b-container class="mt-5">
         <h1>Belgium National Championship</h1>
         <b-row v-if="championships.length" class="pb-4">
            <b-col>
               <b-list-group>
                  <b-list-group-item
                    v-for="champ in championships"
                    :key="champ.id"
                    :to="{ path: champ.router }"
                  >
                     {{champ.name}}
                  </b-list-group-item>
               </b-list-group>
            </b-col>
         </b-row>

         <b-row v-if="error">
            <b-col cols="12">
               <b-alert show variant="warning">
                  Competitions could not be retrieved
               </b-alert>
            </b-col>
         </b-row>

         <b-row v-if="!championships.length">
            <b-col>
               <b-alert show variant="warning">
                  No competitions to show
               </b-alert>
            </b-col>
         </b-row>
      </b-container>
   </div>
</template>

<script>
 import Carousel from "../components/Carousel.vue";
 import FixedTBLogo from "../components/FixedTBLogo.vue";

 import { mapGetters, mapState } from "vuex";

 export default {
   data () {
     return {
       per_page: 5,
       error: null
     }
   },
   methods: {
   },
   async mounted () {
     try {
       this.$Progress.start();
       await this.$store.dispatch("banner_pictures/fetch_banner_pictures");
       await this.$store.dispatch("competitions/fetch_competition_list");
       this.$Progress.finish();
     } catch (e) {
       this.error = true;
       this.$Progress.fail();
     }
   },
   computed: {
     ...mapGetters("banner_pictures", [
       "tournaments_banner_pictures"
     ]),
     ...mapGetters("competitions", [
       "championships",
     ])
   },
   components: { Carousel, FixedTBLogo }
 }
</script>

<style module lang="scss">
</style>
