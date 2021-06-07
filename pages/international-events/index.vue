<template>
   <b-container class="mt-5">
      <b-row>
         <b-col cols="12">
            <h2>
               International events
            </h2>
            <p class="text-justify">
               Belgium is proud to send players to represent the
               country at international tournaments, including the
               European Touch Championships, the Junior Touch
               Championships and the World Cup.
            </p>

            <h3>
               The European Touch Championships
            </h3>
            <p class="text-justify">
               The European Touch Championships take place every two
               years. It is Europe's highest quality Touch
               tournament. Throughout the four days of competition,
               our teams give it their all to perform at their best.
            </p>
            <p class="text-justify">
               The ETC2020 will be taking place in Nottingham, UK from
               Tuesday 28th July to Saturday 1st August
               included. Belgium will be sending three teams: Women's
               Open, Men's Open and Men's Over 40.
            </p>
            <p class="text-justify">
               Each team is training hard in the lead-up to July, with
               the aim of rising up the ranks from 2018 where the
               women's team came 6th place out of 11, the men's team
               came 8th out of 11 and the M40 came 6th out of 11.
            </p>
            <h3>
               The Junior Touch Championships (JTC)
            </h3>
            <p class="text-justify">
               The European Junior Touch Championships is an annual
               event. For the first time in Belgian Touch history, we
               are aiming to send players to participate in the Junior
               Touch Championships 2020, with one team in the U15
               category and one team in the U18 category. With that
               objective in mind, we have recently created a dedicated
               junior Touch section.
            </p>
            <p class="text-justify">
               This sporting milestone will give pride of place to
               those representing the future of our sport.
            </p>
            <p class="text-justify">
               We need you! In order to be able to continue developing
               the future of Touch in Belgium at this competitive
               level, we need your support. The ETC and JTC offer
               unique opportunities to sponsor the national teams. Any
               contribution - no matter the type or amount - is
               gratefully received, and will help Touch Belgium to
               reach our international goals across all five
               teams. Links to the Touch Belgium sponsorship booklets
               can be found on the <nuxt-link :to="{ name: 'sponsorship' }">Sponsorship</nuxt-link> section of our website.
            </p>
         </b-col>
      </b-row>
   </b-container>
</template>

<script>
 export default {
   async fetch() {

   },
   data () {
     return {

     }
   },
   head () {
     return {
       title: "International Events - Touch Belgium"
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
