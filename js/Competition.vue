<template>
   <v-container>
      <span v-if="comp" class="display-3">{{comp.name}}</span>
      <v-rating v-if="comp" x-large readonly :value="comp.rating" class="ml-4"></v-rating>
      <h1>Table</h1>
      <h1>Fixtures and results</h1>
      <v-layout row wrap>
            <v-flex class="mt-3 mb-3" xs12 v-for="match in matches" :key="match.id">
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
       comp: null
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
 .v-rating {
   display: inline-block;
 }
</style>
