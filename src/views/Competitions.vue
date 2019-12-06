<template>
   <div>
      <carousel :pictures="tournaments_banner_pictures"></carousel>
      <FixedTBLogo></FixedTBLogo>
      <b-container class="mt-5">
         <h1>Competitions and tournaments</h1>

         <b-row>
            <b-col class="my-4" cols="12" md="6" lg="4" xl="6">
               <b-form-input
                 label="Competition name"
                 placeholder="Start typing to narrow down the results"
                 browser-autocomplete="off"
                 @input="on_type_search_box"
                 :value="search_competition_box"
               ></b-form-input>
            </b-col>
         </b-row>


         <b-row v-if="n_total_shown" class="pb-4">
            <b-col>
               <b-list-group>
                  <b-list-group-item
                    v-for="comp in paginated_competitions"
                    :key="comp.id"
                    :to="{ path: comp.router }"
                  >
                     {{comp.name}}
                  </b-list-group-item>
                  <b-list-group-item
                    variant="secondary"
                    button
                    v-if="n_total_shown < filtered_competitions.length"
                    @click="on_show_more_click"
                  >
                     Show 5 more...
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

         <b-row v-if="n_total_shown == 0">
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
     on_show_more_click (e) {
       this.$store.commit("competitions/show_more");
     },
     on_type_search_box (text) {
       this.$store.commit("competitions/update_search_competition_box", text);
     }
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
     ...mapState("competitions", [
       "max_shown",
       "search_competition_box"
     ]),
     ...mapGetters("banner_pictures", [
       "tournaments_banner_pictures"
     ]),
     ...mapGetters("competitions", [
       "competitions",
       "filtered_competitions",
       "paginated_competitions",
       "n_total_shown"
     ])
   },
   components: { Carousel, FixedTBLogo }
 }

</script>

<style module lang="scss">
 .v-rating .v-icon {
   padding: 0;
   font-size: 18px;
 }
</style>
