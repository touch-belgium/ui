<template>
   <div>
      <carousel :pictures="banner_pictures_of('championship')"></carousel>
      <b-container class="mt-5">
         <h1>Belgium National Championship</h1>
         <b-row v-if="championships.length" class="pb-4">
            <b-col>
               <b-list-group>
                  <b-list-group-item
                    v-for="champ in championships"
                    :key="champ.id"
                    :to="{ path: champ.router }"
                  >
                     {{champ.name}}
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
   async asyncData ({ store, error }) {
     try {
       await store.dispatch("banner_pictures/fetch_banner_pictures");
       await store.dispatch("competitions/fetch_competition_list");
     } catch (e) {
       error({ statusCode: 404, message: "This page is currently unavailable" });
     }
   },
   data () {
     return {
       per_page: 5,
       error: null
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
