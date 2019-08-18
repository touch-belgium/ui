<template>
   <b-container class="mt-5">
      <b-row>
         <h1 class="display-4" v-if="competition">{{competition.name}}</h1>

      </b-row>
      <b-row>
         <p v-if="competition">
            <span class="mr-2" v-html="milestone_icon"></span> <span class="align-middle">
               {{competition.venue.name}}.
               <span class="font-italic" v-if="competition.venue.address">
                  {{competition.venue.address}}
               </span>
            </span>
         </p>

         <p v-if="comp">{{competition.description}}</p>
      </b-row>

      <b-row>
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
      <b-row>
         <b-col cols="12" md="6" lg="4">
            <b-form-select
              @input="on_select_team_box"
              :options="teams"
            >
            </b-form-select>
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
       "competition",
       "matches",
       "table_fields"
     ]),
     ...mapGetters("competitions", [
       "table_info",
       "teams",
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
     await this.$store.dispatch("competitions/fetch_competition", this.$route.params.id);
     await this.$store.dispatch("competitions/fetch_matches", this.$route.params.id);
     console.log(this.teams);
   },
   components: {
     Match
   }
 }
</script>

<style module lang="scss">
</style>
