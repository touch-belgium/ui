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

         <b-row v-if="championships.length" class="pb-4">
            <b-col>
               <b-list-group>
                  <b-list-group-item
                    v-for="champ in championships"
                    :key="champ.id"
                    :to="{ path: champ.router }"
                  >
                     <h5>{{ champ.name }}</h5>
                     <p>{{ champ.short_description }}</p>
                     <small class="d-block">Start: {{ $moment(champ.start_date).fromNow() }}</small>
                     <small class="d-block">End: {{ $moment(champ.end_date).fromNow() }}</small>
                  </b-list-group-item>
               </b-list-group>
            </b-col>
         </b-row>

         <b-row v-if="error">
            <b-col cols="12">
               <b-alert show variant="warning">
                  Competitions could not be retrieved
               </b-alert>
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
 import Carousel from "@/components/Carousel.vue";

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
     ...mapGetters("teams", [
       "current_champion"
     ]),
     ...mapGetters("banner_pictures", [
       "banner_pictures_of"
     ]),
     ...mapGetters("competitions", [
       "championships",
     ])
   },
   components: {
     Carousel
   }
 }
</script>

<style scoped lang="scss">

</style>
