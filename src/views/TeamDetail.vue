<template>
   <b-container class="mt-5">
      <b-row v-if="error">
         <b-col cols="12">
            <b-alert show variant="warning">
               {{error}}
            </b-alert>
         </b-col>
      </b-row>
      <b-row>
         <b-col cols="12">
            <b-card>
               <h2>{{team_stats.name}}</h2>
            </b-card>
            <p class="text-justify">

            </p>

            <p class="text-justify">

            </p>
         </b-col>
      </b-row>
   </b-container>
</template>

<script>
 import octicons from "@primer/octicons";
 import { mapState, mapGetters } from "vuex";

 export default {
   data () {
     return {
       error: null
     }
   },
   methods: {

   },
   async mounted () {
     try {
       this.$Progress.start();
       await this.$store.dispatch("teams/fetch_team_stats", this.$route.params.id);
       this.$Progress.finish();
       console.log(this.team_stats);
     } catch (e) {
       this.$Progress.fail();
       this.error = "Team info could not be retrieved";
     }
   },
   computed: {
     ...mapState("teams", [
       "team_stats"
     ])
   }
 }
</script>

<style module lang="scss">
</style>
