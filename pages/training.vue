<template>
   <b-container class="mt-5">
      <b-row>
         <b-col cols="12">
            <h2>Training and courses</h2>
            <p class="text-justify">
               Would you like to become a qualified Touch referee or
               learn more about the rules of the game? Are you
               interested in a possible coaching pathway, or
               opportunities to teach the sport to others?
            </p>

            <p class="text-justify">
               There are so many ways to become involved in Touch both
               on and off the field. Click on one of the links
               below to find out more, or look at the <nuxt-link :to="{ name: 'calendar' }">calendar</nuxt-link> to
               find out when the next course will take place.
            </p>
         </b-col>
      </b-row>
      <b-row>
         <b-col>
            <p>
               <nuxt-link :to="{ name: 'referees', hash: '#referee-courses' }">Referees</nuxt-link>
            </p>
            <p>
               <nuxt-link :to="{ name: 'coaching', hash: '#coaching-courses' }">Coaches</nuxt-link>
            </p>
         </b-col>
      </b-row>
   </b-container>
</template>

<script>
 export default {
   async asyncData() {

   },
   data () {
     return {

     }
   },
   head () {
     return {
       title: "Training and Courses - Touch Belgium"
     }
   },
   methods: {

   },
   mounted () {

   },
   computed: {

   }
 }
</script>

<style scoped lang="scss">
</style>
