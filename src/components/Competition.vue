<template>
   <b-container class="mt-5">
      <b-row v-if="error">
         <b-col>
            <b-alert show variant="danger">Failed to load competition</b-alert>
         </b-col>
      </b-row>
      <b-row>
         <b-col>
            <h1 class="display-4" v-if="competition">{{competition.name}}</h1>
         </b-col>

      </b-row>
      <b-row>
         <b-col>
         <p v-if="competition">
            <span class="mr-2" v-html="milestone_icon"></span> <span class="align-middle">
               {{competition.venue.name}}.
               <span class="font-italic" v-if="competition.venue.address">
                  {{competition.venue.address}}
               </span>
            </span>
         </p>

         <pre class="comp_description" v-if="competition">{{competition.description}}</pre>
         </b-col>
      </b-row>

      <b-row>
         <b-col cols="12">
         <h1>Table</h1>
         <b-table
           striped
           bordered
           hover
           sort-by="points"
           sort-desc
           :fields="table_fields"
           :items="table_info"
         >
         </b-table>
         </b-col>
      </b-row>

      <b-row class="mt-3">
         <b-col>
            <h1>Fixtures and results</h1>
         </b-col>
      </b-row>

      <b-row>
         <b-col>
            <p>Filter matches by team:</p>
         </b-col>
      </b-row>

      <b-row class="mb-4">
         <b-col cols="12" md="6" lg="4">
            <b-form-select
              @input="on_select_team_box"
              :options="teams"
            >
            </b-form-select>
            <!-- TODO: clear selected team -->
         </b-col>
      </b-row>

      <b-row v-if="select_team_box">
         <b-col>
            <p class="font-italic" @click="clear_select_team_box">Reset filter</p>
         </b-col>
      </b-row>

      <b-row no-gutters v-for="match in filtered_matches(selected_team)" :key="match.id">
         <b-col cols="12">
            <match v-bind:info="match"></match>
         </b-col>
      </b-row>
   </b-container>
</template>

<script>
 import octicons from "@primer/octicons";
 import Match from "./Match.vue";
 import { mapState, mapGetters } from "vuex";

 export default {
   data () {
     return {
       error: null,
       selected_team: null
     }
   },
   methods: {
     on_select_team_box (team) {
       this.selected_team = team;
     },
     clear_select_team_box () {

     }
   },
   computed: {
     ...mapState("competitions", [
       "teams",
       "competition",
       "matches",
       "table_fields"
     ]),
     ...mapGetters("competitions", [
       "table_info",
       "filtered_matches"
     ]),
     law_icon () {
       return octicons["law"].toSVG();
     },
     milestone_icon () {
       return octicons["milestone"].toSVG();
     }
   },
   async mounted () {
     try {
       this.$Progress.start();
       await this.$store.dispatch("competitions/fetch_competition", this.$route.params.id);
       this.$Progress.increase(20);
       await this.$store.dispatch("competitions/fetch_matches", this.$route.params.id);
       this.$Progress.finish();
     } catch (e) {
       this.$Progress.fail();
       this.error = "Competition could not be retrieved";
     }
   },
   components: {
     Match
   }
 }
</script>

<style module lang="scss">
 .comp_description {
   /* TODO: remove monospace font ? */
   word-wrap: break-word;
 }
</style>
