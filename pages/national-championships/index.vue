<template>
   <div>
      <carousel :pictures="banner_pictures_of('championship')"></carousel>
      <b-container class="mt-5">
         <h1>Belgium National Championship</h1>
         <b-row>
            <b-col>
               <p class="text-justify">
                  Every year each club in Belgium competes for the
                  title of national champion. Held over four days
                  throughout the year and at different locations
                  across Flanders, Wallonia and Brussels, the
                  2019-2020 national championship will be played in a
                  league format. The overall winner will be announced
                  at the end of the final leg in June.
               </p>
               <p class="text-justify">
                  The current national champion is Boitsfort.
               </p>
            </b-col>
         </b-row>

         <client-only>
            <b-row class="mb-4">
               <b-col>
                  <v-gallery :images="images" :index="index" @close="index = null"/>
                  <div
                    class="vue-gallery-image"
                    v-for="(image, imageIndex) in images"
                    :key="imageIndex"
                    @click="index = imageIndex"
                    :style="{ backgroundImage: 'url(' + image + ')', width: '300px', height: '200px' }"
                  ></div>
               </b-col>
            </b-row>
         </client-only>

         <b-row v-if="ongoing_championships.length" class="pb-4">
            <b-col>
               <ongoing-events :competitions="ongoing_championships" />
            </b-col>
         </b-row>

         <b-row v-if="upcoming_championships.length" class="pb-4">
            <b-col>
               <upcoming-events :competitions="upcoming_championships" />
            </b-col>
         </b-row>

         <b-row v-if="past_championships.length" class="pb-4" v-show="false">
            <b-col>
               <past-events :competitions="past_championships" />
            </b-col>
         </b-row>

         <b-row v-if="!championships.length">
            <b-col>
               <b-alert show variant="warning">
                  No competitions to show
               </b-alert>
            </b-col>
         </b-row>
      </b-container>
   </div>
</template>

<script>
 import Carousel from "@/components/Carousel";
 import OngoingEvents from "@/components/OngoingEvents";
 import UpcomingEvents from "@/components/UpcomingEvents";
 import PastEvents from "@/components/PastEvents";

 import { mapGetters, mapState } from "vuex";

 export default {
   async asyncData ({ $axios, store, error }) {
     try {
       await store.dispatch("banner_pictures/fetch_banner_pictures");
       await store.dispatch("competitions/fetch_competition_list");
       const pictures = await $axios.$get("pictures");
       return { pictures }
     } catch (e) {
       error({ statusCode: 404, message: "This page is currently unavailable" });
     }
   },
   data () {
     return {
       per_page: 5,
       error: null,
       index: null
     }
   },
   head () {
     return {
       title: "National Championships - Touch Belgium"
     }
   },
   methods: {

   },
   mounted () {

   },
   computed: {
     images () {
       return this.pictures.map(p => p.picture);
     },
     ...mapGetters("clubs", [
       "current_champion"
     ]),
     ...mapGetters("banner_pictures", [
       "banner_pictures_of"
     ]),
     ...mapGetters("competitions", [
       "championships",
       "ongoing_championships",
       "upcoming_championships",
       "past_championships"
     ])
   },
   components: {
     Carousel, OngoingEvents, UpcomingEvents, PastEvents
   }
 }
</script>

<style scoped lang="scss">

</style>
