<template>
   <b-container class="mt-5">
      <b-img fluid src="media/banner_tournaments.jpg"></b-img>
      <h1>Tournaments and competitions</h1>

      <b-row>
         <b-col class="my-4" cols="12" md="6" lg="4" xl="6">
            <b-form-input
              label="Competition name"
              placeholder="Start typing to narrow down the results"
              browser-autocomplete="off"
              @input="on_type_search_box"
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
                 button
                 v-if="n_total_shown < filtered_competitions.length"
                 @click="on_show_more_click"
               >
                  Show 5 more...
               </b-list-group-item>
            </b-list-group>
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
     this.$store.dispatch("competitions/fetch_competitions");
   },
   computed: {
     ...mapState("competitions", [
       "n_total_shown"
     ]),
     ...mapGetters("competitions", [
       "competitions",
       "filtered_competitions",
       "paginated_competitions"
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
