<template>
   <b-container class="mt-5">
      <span v-if="competition">{{competition.name}}</span>

      <p v-if="competition" class="subheading">
         {{competition.venue.name}}
         <span class="font-italic" v-if="competition.venue.address">. {{competition.venue.address}}</span>
      </p>

      <p v-if="comp">{{competition.description}}</p>

      <h1>Table</h1>
      <b-table striped :items="table_info">

      </b-table>


      <h1>Fixtures and results</h1>
      <match v-for="match in matches" :key="match.id" v-bind:info="match"></match>
   </b-container>
</template>

<script>
 import Match from './Match.vue';
 import { mapState, mapGetters } from "vuex";

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
       filtered_team: null
     }
   },
   methods: {

   },
   computed: {
     ...mapState("competitions", [
       "competition",
       "matches",
       "teams"
     ]),
     ...mapGetters("competitions", [
       "table_info"
     ])
   },
   async mounted () {
     await this.$store.dispatch("competitions/fetch_competition", this.$route.params.id);
     await this.$store.dispatch("competitions/fetch_matches", this.$route.params.id);
     console.log(this.table_info);
   },
   components: {
     Match
   }
 }
</script>

<style module lang="scss">
</style>
