<template>
   <b-card
     no-body
     class="mb-2"
     style="height: 100%;"
   >
      <b-card-img class="club_logo" :src="club.logo" alt="Club logo" top></b-card-img>

      <b-card-body class="less-padding-y">
         <b-card-title title-tag="p" class="h4">{{ club.name }}</b-card-title>
         <b-card-sub-title sub-title-tag="p" class="h6 mb-2">{{ club.venue.address }}</b-card-sub-title>
      </b-card-body>

      <b-list-group flush v-show="false">
         <b-list-group-item variant="primary" :to="club_page_url(club)">Club page/stats</b-list-group-item>
      </b-list-group>

      <!-- Spacer -->
      <b-card-body class="spacer"></b-card-body>

      <b-card-body class="less-padding-y mb-2">
         <b-row>
            <b-col cols="12" sm="5" md="6" lg="4">
               <a v-if="club.website" :href="club.website" target="_blank" class="card-link">Website</a>
            </b-col>
            <b-col cols="12" sm="auto">
               <a v-if="club.facebook" :href="club.facebook" target="_blank" class="card-link">Facebook</a>
            </b-col>
         </b-row>
      </b-card-body>
   </b-card>
</template>

<script>
 import { mapGetters } from "vuex";

 export default {
   props: ["club"],
   data () {
     return {

     }
   },
   methods: {

   },
   mounted () {

   },
   computed: {
     ...mapGetters("clubs", [
       "club_page_url"
     ])
   }
 }
</script>

<style scoped lang="scss">
 .less-padding-y {
   padding-top: 0.5rem;
   padding-bottom: 0.5rem;
 }
 .spacer {
   padding: 0;
   flex-grow: 1000;
 }
 .club_logo {
   width: 100%;
   height: 20vh;
   object-fit: contain;
   padding: 20px;
 }
</style>
