<template>
   <b-container class="mt-5">
      <b-row>
         <b-col cols="12">
            <h2>{{team_stats.name}}</h2>
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

     }
   },
   methods: {

   },
   async mounted () {
     try {
       this.$Progress.start();
       await this.$store.dispatch("teams/fetch_team_stats", this.$route.params.id);
       this.$Progress.finish();
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
