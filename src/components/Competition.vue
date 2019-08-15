<template>
   <b-container class="mt-5">
      <h1 class="display-4" v-if="competition">{{competition.name}}</h1>

      <p v-if="competition" class="">
         <span class="mr-2" v-html="milestone_icon"></span> <span class="align-middle">
            {{competition.venue.name}}.
            <span class="font-italic" v-if="competition.venue.address">
               {{competition.venue.address}}
            </span>
         </span>
      </p>

      <p v-if="comp">{{competition.description}}</p>

      <h1>Table</h1>
      <b-table
        striped
        bordered
        hover
        sort-by="points"
        sort-desc
        :fields="fields"
        :items="table_info"
      >

      </b-table>


      <h1>Fixtures and results</h1>
      <match v-for="match in matches" :key="match.id" v-bind:info="match"></match>
   </b-container>
</template>

<script>
 import octicons from "@primer/octicons";
 import Match from "./Match.vue";
 import { mapState, mapGetters } from "vuex";

 export default {
   data () {
     return {

     }
   },
   methods: {

   },
   computed: {
     ...mapState("competitions", [
       "competition",
       "matches",
       "teams",
       "fields"
     ]),
     ...mapGetters("competitions", [
       "table_info"
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
   },
   components: {
     Match
   }
 }
</script>

<style module lang="scss">
</style>
