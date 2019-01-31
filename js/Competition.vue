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
        v-if="matches"
        class="elevation-2"
        :pagination.sync="pagination"
        no-data-text="Sorry, no data to display here"
        :headers="headers"
        :items="table_info">
         <template slot="items" slot-scope="props">
            <td>{{props.item.team}}</td>
            <td>{{props.item.points}}</td>
            <td>{{props.item.bonus}}</td>
            <td>{{props.item.wins}}</td>
            <td>{{props.item.loses}}</td>
            <td>{{props.item.ties}}</td>
            <td>{{props.item.tf}}</td>
            <td>{{props.item.ta}}</td>
            <td>{{props.item.tf}}</td>
         </template>
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
       headers: [
         {
           text: 'Team',
           align: 'left',
           sortable: false,
           value: 'team'
         },
         { text: 'Total points', value: 'points' },
         { text: 'Bonus', value: 'bonus'},
         { text: 'Wins', value: 'wins' },
         { text: 'Loses', value: 'loses' },
         { text: 'Ties', value: 'ties' },
         { text: 'TDs for', value: 'tf' },
         { text: 'TDs against', value: 'ta' },
         { text: 'TDs diff', value: 'td' }],
       matches: null,
       comp: null,
       filtered_team: null,
       pagination: {
         descending: false,
         page: 1,
         rowsPerPage: 10,
         sortBy: 'team',
         totalItems: 0,
       }
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
     },
     relevant_matches (name) {
       /* Filter only the matches that contain this team name */
       return this.matches.filter(m => m.home_team.name == name
                                  || m.away_team.name == name)
     },
     reduce_wins (acc, cur, idx, src) {
       return 1;
     },
     team_to_row (name) {
       /* Assemble table information for a given team name */
       let eso = {team: name, points: 1, bonus: 1, wins: 1, loses: 1, ties: 1, tf: 1, ta: 1, td: 1};
       console.log(eso);
       return eso;
     }
   },
   computed: {
     shown_matches () {
       if (this.filtered_team)
         return this.relevant_matches(this.filtered_team);
       return this.matches;
     },
     teams () {
       let s = new Set();
       for (let match of this.matches) {
         s.add(match.home_team.name);
         s.add(match.away_team.name);
       }
       return [...s];
     },
     table_info () {
       return this.teams.map(x => this.team_to_row(x));
     },
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
