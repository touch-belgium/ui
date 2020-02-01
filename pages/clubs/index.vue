<template>
   <b-container class="mt-5">
      <b-row>
         <b-col cols="12">
            <h1>Where to play</h1>
            <p class="text-justify">
               There are a number of Touch clubs in Belgium. For
               training times and schedules, click on the
               corresponding link to go to their website, or find the
               club nearest to you on the map below.
            </p>
            <p class="text-justify">
               To find out more about a Touch club near you, email <a href="mailto:secretary@touch-belgium.be">secretary@touch-belgium.be</a>
            </p>
         </b-col>
      </b-row>
      <b-row>
         <b-col v-for="club in belgian_clubs" :key="club.url" md="4" cols="6" class="my-3">
            <club v-bind:club="club"></club>
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
                       v-for="club in belgian_clubs"
                       :key="club.url"
                       :lat-lng="club_coordinates(club)"
                     >
                        <l-popup>
                           <p class="h4">{{club.name}} - Touch Club</p>
                           <p>Address: {{club.venue.address}}</p>
                           <a :href="club.website" target="_blank">Website</a>
                        </l-popup>
                     </l-marker>
                  </l-map>
               </client-only>
            </div>
         </b-col>
      </b-row>
   </b-container>
</template>

<script>
 import Club from "@/components/Club.vue";

 import { mapGetters, mapState } from "vuex";

 export default {
   async asyncData ({ $axios, store, error }) {
     try {
       await store.dispatch("clubs/fetch_belgian_clubs");
     } catch (e) {
       error({ statusCode: 404, message: "This page is currently unavailable" });
     }
   },
   data () {
     return {
       tile_url: "https://{s}.tile.osm.org/{z}/{x}/{y}.png",
       attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
       zoom: 8
     }
   },
   head () {
     return {
       title: "Where to play ? - Touch Belgium"
     }
   },
   methods: {

   },
   mounted () {

   },
   computed: {
     ...mapState("clubs", [
       "belgian_clubs"
     ]),
     ...mapState("geodata", [
       "belgium_center_coords",
       "belgium_polygon"
     ]),
     ...mapGetters("clubs", [
       "club_coordinates"
     ])
   },
   components: {
     Club
   }
 }
</script>

<style scoped lang="scss">

</style>
