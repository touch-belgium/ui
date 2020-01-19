<template>
   <div>
      <carousel :pictures="banner_pictures_of('domestic events')"></carousel>
      <b-container class="mt-5">
         <h1>Touch Belgium competitions and tournaments</h1>

         <p class="text-justify">
            Playing Touch is one of the best ways to get involved,
            learn the game and develop as a player.
         </p>
         <p class="text-justify">
            Touch Belgium and its member clubs organise a number of
            sporting and social events throughout the year. To see
            what tournaments and events might interest you, click on
            one of the items below:
         </p>


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
 import Carousel from "@/components/Carousel.vue";

 import { mapGetters, mapState } from "vuex";

 export default {
   async asyncData ({ store, error }) {
     try {
       await store.dispatch("banner_pictures/fetch_banner_pictures");
       await store.dispatch("competitions/fetch_competition_list");
     } catch (e) {
       error({ statusCode: 404, message: "This page is currently unavailable" });
     }
   },
   data () {
     return {
       per_page: 5,
       error: null
     }
   },
   head () {
     return {
       title: "Competitions - Touch Belgium"
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
   mounted () {

   },
   computed: {
     ...mapState("competitions", [
       "max_shown",
       "search_competition_box"
     ]),
     ...mapGetters("banner_pictures", [
       "banner_pictures_of"
     ]),
     ...mapGetters("competitions", [
       "other_competitions",
       "filtered_competitions",
       "paginated_competitions",
       "n_total_shown"
     ])
   },
   components: { Carousel }
 }

</script>

<style scoped lang="scss">

</style>
