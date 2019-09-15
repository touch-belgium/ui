<template>
   <b-card
     no-body
     class="mb-5"
   >
      <b-card-img class="team_logo" :src="team.logo" alt="Team logo" top></b-card-img>

      <b-card-body>
         <b-card-title>{{team.name}}</b-card-title>
         <b-card-sub-title class="mb-2">{{team.address}}</b-card-sub-title>
      </b-card-body>

      <b-list-group flush>
         <b-list-group-item>Team page/stats</b-list-group-item>
      </b-list-group>

      <b-card-body>
         <a v-if="team.website" :href="team.website" class="card-link">Website</a>
         <a v-if="team.facebook" :href="team.facebook" class="card-link">Facebook</a>
      </b-card-body>
   </b-card>
</template>

<script>
 export default {
   props: ['team'],
   data () {
     return {

     }
   },
   methods: {

   },
   async mounted () {

   },
   computed: {

   }
 }
</script>

<style module lang="scss">
 .card-img-top.team_logo {
   width: 100%;
   height: 10vw;
   object-fit: contain;
   padding: 20px;
 }
</style>
