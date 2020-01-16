<template>
   <b-card
     no-body
     class="mb-2"
     style="height: 100%;"
   >
      <b-card-img class="team_logo" :src="team.logo" alt="Team logo" top></b-card-img>

      <b-card-body>
         <b-card-title title-tag="p" class="h4">{{ team.name }}</b-card-title>
         <b-card-sub-title sub-title-tag="p" class="h6 mb-2">{{ team.venue.address }}</b-card-sub-title>
      </b-card-body>

      <b-list-group flush v-show="false">
         <b-list-group-item variant="primary" :to="team_page_url(team)">Team page/stats</b-list-group-item>
      </b-list-group>

      <!-- Spacer -->
      <b-card-body class="spacer"></b-card-body>

      <b-card-body>
         <a v-if="team.website" :href="team.website" target="_blank" class="card-link">Website</a>
         <a v-if="team.facebook" :href="team.facebook" target="_blank" class="card-link">Facebook</a>
      </b-card-body>
   </b-card>
</template>

<script>
 import { mapGetters } from "vuex";

 export default {
   props: ["team"],
   data () {
     return {

     }
   },
   methods: {

   },
   mounted () {

   },
   computed: {
     ...mapGetters("teams", [
       "team_page_url"
     ])
   }
 }
</script>

<style scoped lang="scss">
 .team_logo {
   width: 100%;
   height: 30vh;
   object-fit: contain;
   padding: 20px;
 }
</style>
