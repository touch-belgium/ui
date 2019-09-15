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
               <l-map
                 ref="map"
                 style="height:inherit;"
                 :zoom="zoom"
                 :center="center"
               >
                  <l-tile-layer :url="tile_url" :attribution="attribution"></l-tile-layer>
                  <l-polygon
                    :lat-lngs="polygon.latlngs"
                    :color="polygon.color"
                    :fill="polygon.fill"
                  >
                  </l-polygon>
                  <l-marker
                    v-for="team in main_teams"
                    :key="team.url"
                    :lat-lng="team_coordinates(team)"
                  ></l-marker>
               </l-map>
            </div>
         </b-col>
      </b-row>
   </b-container>
</template>

<script>
 import Team from "../components/Team.vue";
 import octicons from "@primer/octicons";
 import { LMap, LTileLayer, LMarker, LPolygon } from "vue2-leaflet";
 import { mapGetters } from "vuex";
 import { belgium_polygon, belgium_center_coords } from "../common/geodata.js";

 export default {
   data () {
     return {
       error: null,
       tile_url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
       attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
       zoom: 8,
       center: belgium_center_coords,
       polygon: {
         latlngs: belgium_polygon,
         color: "green",
         fill: false
       },
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
       "main_teams",
       "team_coordinates"
     ])
   },
   components: {
     LMap, LTileLayer, LMarker, LPolygon, Team
   }
 }
</script>

<style module lang="scss">
</style>
