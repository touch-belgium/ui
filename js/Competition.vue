<template>
   <v-container>
      <h1>Table</h1>
      <h1>Fixtures and results</h1>
      <v-layout row>
         <v-flex xs12 sm12 md12 lg12 v-for="match in matches" :key="match.id">
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
       matches: null
     }
   },
   methods: {
     fetchComp () {
       let url = `${API}matches/c/${this.$route.params.id}`;
       axios.get(url, {crossdomain: true}).then(response => {
         this.matches = response.data.results;
       });
     }
   },
   mounted () {
     this.fetchComp();
   },
   components: {
     Match
   }
 }
</script>

<style module lang="scss">
</style>
