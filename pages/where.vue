<template>
   <b-container class="mt-5">
      <b-row>
         <b-col v-if="error" cols="12">
            <b-alert show variant="danger">Teams could not be retrieved.</b-alert>
         </b-col>
         <b-col cols="12">
            <h1>Where to play</h1>
            <p class="text-justify">
               There are a number of Touch clubs in Belgium. For
               training times and schedules, click on the
               corresponding link to go to their website, or find the
               club nearest to you on the map below.
            </p>
         </b-col>
      </b-row>
      <b-row>
         <b-col v-for="team in belgian_teams" :key="team.url" md="4" cols="6" class="my-3">
            <team v-bind:team="team"></team>
         </b-col>
      </b-row>
      <b-row>
         <b-col>
            <div style="height: 60vh; max-height: 1300px" class="mb-3">
               <client-only>
                  <l-map
                    ref="map"
                    style="height:inherit;"
                    :zoom="zoom"
                    :center="belgium_center_coords"
                  >
                     <l-tile-layer :url="tile_url" :attribution="attribution"></l-tile-layer>
                     <l-polygon
                       :lat-lngs="belgium_polygon.latlngs"
                       :color="belgium_polygon.color"
                       :fill="belgium_polygon.fill"
                     >
                     </l-polygon>
                     <l-marker
                       v-for="team in belgian_teams"
                       :key="team.url"
                       :lat-lng="team_coordinates(team)"
                     >
                        <l-popup>
                           <p class="h4">{{team.name}} - Touch Club</p>
                           <p>Address: {{team.venue.address}}</p>
                           <a :href="team.website" target="_blank">Website</a>
                        </l-popup>
                     </l-marker>
                  </l-map>
               </client-only>
            </div>
         </b-col>
      </b-row>
      <b-row>
         <b-col cols="12">
            <p class="text-justify">
               To find out more about a Touch club near you, email <a href="mailto:secretary@touch-belgium.be">secretary@touch-belgium.be</a>
            </p>
         </b-col>
      </b-row>
   </b-container>
</template>

<script>
 import Team from "@/components/Team.vue";

 import { mapGetters, mapState } from "vuex";

 export default {
   async asyncData ({ $axios }) {
     const data = await $axios.$get("/belgian_teams");
     return { belgian_teams: data };
   },
   data () {
     return {
       error: null,
       tile_url: "https://{s}.tile.osm.org/{z}/{x}/{y}.png",
       attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
       zoom: 8
     }
   },
   head () {
     return {
       title: "Where to play ?"
     }
   },
   methods: {

   },
   mounted () {

   },
   computed: {
     ...mapState("geodata", [
       "belgium_center_coords",
       "belgium_polygon"
     ]),
     ...mapGetters("teams", [
       "team_coordinates"
     ])
   },
   components: {
     Team
   }
 }
</script>

<style module lang="scss">

</style>
