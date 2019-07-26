<template>
   <b-container class="mt-5">
      <b-img fluid src="media/banner_tournaments.jpg"></b-img>
      <h1>Tournaments and competitions</h1>

      <b-row>
         <b-col class="my-4" cols="12" md="6" lg="4" xl="6">
            <!-- TODO: hacer que este b-form-input sea una especie de v-model, leyendo del state de vue tambien -->
            <b-form-input
              label="Competition name"
              placeholder="Start typing to narrow down the results"
              browser-autocomplete="off"
              @input="on_type_search_box"
              :value="search_box"
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
            <b-alert show variant="warning">No tournaments available could not be retrieved.</b-alert>
         </b-col>
      </b-row>

      <b-row v-if="n_total_shown == 0">
         <b-alert show variant="warning">
            No competitions to show
         </b-alert>
      </b-row>
   </b-container>
</template>

<script>
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
       this.$store.commit("competitions/update_search_box", text);
     }
   },
   async mounted () {
     try {
       await this.$store.dispatch("competitions/fetch_competition_list");
     } catch (e) {
       this.error = true;
     }
   },
   computed: {
     ...mapState("competitions", [
       "max_shown",
       "search_box"
     ]),
     ...mapGetters("competitions", [
       "competitions",
       "filtered_competitions",
       "paginated_competitions",
       "n_total_shown"
     ])
   }
 }

</script>

<style module lang="scss">
 .v-rating .v-icon {
   padding: 0;
   font-size: 18px;
 }
</style>
