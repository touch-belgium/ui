<template>
   <b-container class="mt-5">
      <b-row>
         <b-col cols="12">
            <h1>Member clubs</h1>
            <p class="text-justify">
               The following member clubs have access to a range of
               resources and support from Touch Belgium, that helps
               their players, coaches and referees to develop and
               discover the sport, at both social and competitive
               levels. If you would like to become a member, check out
               our page on <nuxt-link :to="{ name: 'become-a-member' }">becoming a member</nuxt-link>.
            </p>
         </b-col>
      </b-row>
      <b-row>
         <b-col v-for="club in member_clubs" :key="club.url" md="4" cols="6" class="my-3">
            <club v-bind:club="club"></club>
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
 import Club from "@/components/Club.vue";

 import { mapGetters, mapState } from "vuex";

 export default {
   async asyncData ({ store, error }) {
     try {
       await store.dispatch("clubs/fetch_member_clubs");
     } catch (e) {
       error({ statusCode: 404, message: "This page is currently unavailable" });
     }
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
       title: "Affiliated members - Touch Belgium"
     }
   },
   methods: {

   },
   mounted () {

   },
   computed: {
     ...mapState("clubs", [
       "member_clubs"
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
