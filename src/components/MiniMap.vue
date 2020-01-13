<template>
   <div style="height: 20vh; max-height: 400px" class="mb-3">
      <l-map
        ref="map"
        style="height:inherit;"
        :zoom="zoom"
        :center="team_coordinates(team)"
      >
         <l-tile-layer :url="tile_url" :attribution="attribution"></l-tile-layer>
         <l-polygon
           :lat-lngs="polygon.latlngs"
           :color="polygon.color"
           :fill="polygon.fill"
         >
         </l-polygon>
         <l-marker
           :lat-lng="team_coordinates(team)"
         >
            <l-popup>
               <h4>{{team.name}} - Touch Club</h4>
               <p>Address: {{team.venue.address}}</p>
               <a :href="team.website" target="_blank">Website</a>
            </l-popup>
         </l-marker>
      </l-map>
   </div>
</template>

<script>
 import { mapGetters, mapState } from "vuex";
 import { LMap, LTileLayer, LMarker, LPolygon, LPopup } from "vue2-leaflet";
 import { belgium_polygon, belgium_center_coords } from "../common/geodata.js";

 export default {
   props: ["team"],
   data () {
     return {
       error: null,
       tile_url: "https://{s}.tile.osm.org/{z}/{x}/{y}.png",
       attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
       zoom: 15,
       center: belgium_center_coords,
       polygon: {
         /* This is an inverted polygon, where Belgium is the hole */
         latlngs: [[[90, -180],
                    [90, 180],
                    [-90, 180],
                    [-90, -180]],
                   belgium_polygon],
         color: "green"
       },
     }
   },
   methods: {

   },
   async mounted () {

   },
   computed: {
     ...mapGetters("teams", [
       "team_coordinates"
     ])
   },
   components: {
     LMap, LTileLayer, LMarker, LPolygon, LPopup
   }
 }
</script>

<style module lang="scss">
</style>
