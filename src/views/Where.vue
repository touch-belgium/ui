<template>

   <b-container class="mt-5">
      <b-row>
         <b-col cols="12">
            <h2>Where to play</h2>
            <p class="text-justify">
               There are a number of Touch clubs in Belgium. For
               training times and schedules, click on the logo of the
               club nearest to you, or on the map below.
            </p>
         </b-col>
      </b-row>
      <b-row>
         <b-col v-for="team in main_teams" :key="team.url" lg="4" cols="12">
            <team v-bind:team="team"></team>
         </b-col>
      </b-row>
      <b-row>
         <b-col>
            <div style="height: 50vh;" class="mb-5">
               <l-map ref="map" style="height:inherit;">
                  <l-tile-layer :url="tile_url" :attribution="attribution"></l-tile-layer>
               </l-map>
            </div>
         </b-col>
      </b-row>
   </b-container>
</template>

<script>
 import Team from "../components/Team.vue";
 import octicons from "@primer/octicons";
 import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
 import { mapGetters } from "vuex";

 export default {
   data () {
     return {
       error: null,
       tile_url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
       attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
     }
   },
   methods: {

   },
   async mounted () {
     try {
       this.$Progress.start();
       await this.$store.dispatch("teams/fetch_teams");
       this.$Progress.finish();
     } catch (e) {
       this.error = true;
     }
   },
   computed: {
     ...mapGetters("teams", [
       "main_teams"
     ])
   },
   components: {
     LMap, LTileLayer, LMarker, Team
   }
 }
</script>

<style module lang="scss">
</style>
