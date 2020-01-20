<template>
   <div class="mt-4">
      <b-row>
         <b-col>
            <h4>Category: <b-badge>{{cat.category}}</b-badge></h4>
         </b-col>
      </b-row>

      <b-row v-if="false">
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

      <b-row no-gutters v-for="match in filtered_matches(cat.matches, selected_team)" :key="match.id">
         <b-col cols="12">
            <match v-bind:info="match"></match>
         </b-col>
      </b-row>
   </div>
</template>

<script>
 import Match from "@/components/Match.vue";

 import { mapState, mapGetters } from "vuex";

 export default {
   props: ["cat"],
   data () {
     return {
       error: null,
       selected_team: null,
       select_team_box: null/* FIX: que es esto */
     }
   },
   methods: {
     on_select_team_box (team) {
       this.selected_team = team;
     },
     clear_select_team_box () {

     }
   },
   mounted () {
   },
   computed: {
     ...mapState("competitions", [
       "teams",
       "competition",
       "table_fields"
     ]),
     ...mapGetters("competitions", [
       "table_info",
       "filtered_matches"
     ])
   },
   components: {
     Match
   }
 }
</script>

<style module lang="scss">
</style>
