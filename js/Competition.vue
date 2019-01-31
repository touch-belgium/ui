<template>
   <v-container>
      <span v-if="comp" class="display-3">{{comp.name}}</span>
      <v-rating v-if="comp" x-large readonly :value="comp.rating" class="ml-4"></v-rating>

      <p v-if="comp" class="subheading">
         <v-icon>place</v-icon>
         {{comp.venue.name}}
         <span class="font-italic" v-if="comp.venue.address">. {{comp.venue.address}}</span>
      </p>
      <p v-if="comp">{{comp.description}}</p>
      <h1 class="display-1 mb-4 mt-3">Table</h1>
      <v-data-table
        class="elevation-2"
        hide-actions
        no-data-text="Sorry, no data to display here">
      </v-data-table>
      <h1 class="display-1 mb-4 mt-4">Fixtures and results</h1>
      <v-layout row wrap>
         <v-flex v-if="matches" xs12 sm6 md4 lg3>
            <v-select
              clearable
              label="Filter by team name"
              outline
              :items="teams"
              v-model="filtered_team"
            ></v-select>
         </v-flex>

         <v-flex class="mt-3 mb-3" xs12 v-for="match in shown_matches" :key="match.id">
            <match v-bind:info="match"></match>
         </v-flex>
      </v-layout>
   </v-container>
</template>

<script>
 import axios from 'axios';
 import Match from './Match.vue';
 export default {
   data () {
     return {
       matches: null,
       comp: null,
       items: [...new Set([1, 2, 4, 4])],
       filtered_team: null
     }
   },
   methods: {
     fetchComp () {
       let url = `${API}competitions/${this.$route.params.id}`;
       axios.get(url, {crossdomain: true}).then(response => {
         this.comp = response.data;
       });
     },
     fetchMatches () {
       let url = `${API}matches/c/${this.$route.params.id}`;
       axios.get(url, {crossdomain: true}).then(response => {
         this.matches = response.data.results;
       });
     }
   },
   computed: {
     shown_matches () {
       if (this.filtered_team)
         return this.matches.filter(m => m.home_team.name == this.filtered_team
                                    || m.away_team.name == this.filtered_team)
       return this.matches;
     },
     teams () {
       let s = new Set();
       for (let match of this.matches) {
         s.add(match.home_team.name);
         s.add(match.away_team.name);
       }
       return [...s];
     }
   },
   mounted () {
     this.fetchMatches();
     this.fetchComp();
   },
   components: {
     Match
   }
 }
</script>

<style module lang="scss">
 @import "custom-color-variables";
 .v-rating {
   display: inline-block;
   .v-icon {
     color: $tb-red !important;
   }
 }
</style>
