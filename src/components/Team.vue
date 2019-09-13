<template>
   <b-card
     no-body
     class="mb-5"
   >
      <b-card-img :src="team.logo" alt="Team logo" top></b-card-img>

      <b-card-body>
         <b-card-title>{{team.name}}</b-card-title>
         <b-card-sub-title class="mb-2">Card Sub Title</b-card-sub-title>
         <b-card-text>
            Some quick example text to build on the card title and make up the bulk of the card's
            content.
         </b-card-text>
      </b-card-body>

      <b-list-group flush>
         <b-list-group-item>Cras justo odio</b-list-group-item>
         <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
         <b-list-group-item>Vestibulum at eros</b-list-group-item>
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
 .card-img-top {
   width: 100%;
   height: 10vw;
   object-fit: contain;
 }
</style>
