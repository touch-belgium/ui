<template>
   <b-container class="mt-5" v-if="!pending">
      <b-row v-if="error">
         <b-col cols="12">
            <b-alert show variant="warning">
               {{error_message}}
            </b-alert>
         </b-col>
      </b-row>
      <b-row>
         <b-col cols="12">
            <b-card>
               <template v-slot:header>
                  <h2 class="text-center">{{team_stats.name}}</h2>
                  <b-card-img-lazy class="team_logo" width=100 :src="team_stats.logo" alt="Team logo" top></b-card-img-lazy>
                  <div class="text-center">
                     <a v-if="team_stats.website" :href="team_stats.website" class="card-link">Website</a>
                     <a v-if="team_stats.facebook" :href="team_stats.facebook" class="card-link">Facebook</a>
                  </div>
               </template>
               <b-row>
                  <b-col cols="12" md="6" class="mb-5">
                     <p v-if="team_stats.founded"><b>Founded:</b> {{team_stats.founded}}</p>
                     <p><b>Number of registered members:</b> {{team_stats.n_registered_members}}</p>
                     <p><b>Venue:</b> {{team_stats.venue.name}}. {{team_stats.venue.address}}</p>
                     <p><b>Number of refs:</b> {{team_stats.n_refs}}</p>
                     <p><b>Average ref level:</b> {{team_stats.avg_ref_level}}</p>
                     <p><b>Average touchdowns per match:</b></p>
                     <b-progress class="mt-2 mb-4" :max="max_td_ratio" height="2rem">
                        <b-progress-bar :value="team_stats.avg_touchdowns_scored" variant="success">
                           Scored: <strong>{{team_stats.avg_touchdowns_scored}}</strong>
                        </b-progress-bar>
                        <b-progress-bar :value="team_stats.avg_touchdowns_conceded" variant="danger">
                           Conceded: <strong>{{team_stats.avg_touchdowns_conceded}}</strong>
                        </b-progress-bar>
                     </b-progress>
                     <MiniMap :team="team_stats"></MiniMap>
                  </b-col>
                  <b-col cols="12" md="6">
                     <p class="text-center"><b>Global win/lose ratio:</b></p>
                     <WinLoseRatio class="win_lose_ratio" :won="team_stats.matches_won" :lost="team_stats.matches_lost" :tied="team_stats.matches_tied"></WinLoseRatio>
                  </b-col>
               </b-row>
               <b-row class="mb-5">
                  <b-col cols="12">
                     <p class="text-center"><b>Form over time:</b></p>
                     <div class="team_form_chart">
                        <TeamFormChart></TeamFormChart>
                     </div>
                  </b-col>
               </b-row>


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
 import WinLoseRatio from "../components/WinLoseRatio.vue";
 import TeamFormChart from "../components/TeamFormChart.vue";
 import MiniMap from "../components/MiniMap.vue";

 export default {
   data () {
     return {
       pending: true,
       error: false,
       data: null,
       error_message: null
     }
   },
   methods: {

   },
   async mounted () {
     this.pending = true;
     try {
       this.$Progress.start();
       await this.$store.dispatch("teams/fetch_team_stats", this.$route.params.id);
       this.$Progress.finish();
     } catch (e) {
       this.$Progress.fail();
       this.error = e;
       this.error_message = "Team info could not be retrieved";
     }
     this.pending = false;
   },
   computed: {
     ...mapState("teams", [
       "team_stats"
     ]),
     max_td_ratio () {
       return this.team_stats.avg_touchdowns_scored + this.team_stats.avg_touchdowns_conceded;
     }
   },
   components: { WinLoseRatio, TeamFormChart, MiniMap }
 }
</script>

<style module lang="scss">
 .card-img-top.team_logo {
   width: 100%;
   height: 30vh;
   object-fit: contain;
   padding: 20px;
 }

 .team_form_chart {
   height: 30vh;
 }

 .win_lose_ratio {
   height: 20vh;
 }
</style>
