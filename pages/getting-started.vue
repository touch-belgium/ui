<template>
   <div>
      <carousel :pictures="banner_pictures_of('getting started')"></carousel>
      <b-container class="mt-5">
         <b-row>
            <b-col cols="12">
               <h1>Getting started</h1>
               <p class="text-justify">
                  Are you interested in creating a Touch section at your
                  club?  Are you part of a group of friends that would
                  like to play Touch more regularly, or to discover Touch
                  as part of a corporate team building day, or school
                  sports program?
               </p>

               <p class="text-justify">
                  Touch Belgium has a number of ways to help you discover
                  Touch, or to help aspiring groups of players to become
                  more established:
               </p>
               <ul>
                  <li>
                     Providing '<em>An introduction to Touch</em>' sessions that
                     enable players to have a taste of the sport, and
                     understand the basics of the game
                  </li>
                  <li>
                     Sending volunteer coaches and players to your school
                     or company as part of organized sports programs or team
                     building days
                  </li>
                  <li>
                     Providing coaching assistance for your team for the
                     initial training stages
                  </li>
                  <li>
                     Helping advise you as a coach during your team's
                     training sessions as your section grows and becomes
                     more established
                  </li>
                  <li>
                     Promoting your club or section via the Touch Belgium
                     social media channels
                  </li>
                  <li>
                     Organising social tournaments and competitions
                     throughout the year to provide numerous playing
                     opportunities for both new and more experienced players
                  </li>

               </ul>

               <p class="text-justify">
                  If you would like to know more about discovering
                  Touch or establishing a Touch club, please contact:
                  <a href="mailto:president@touch-belgium.be">president@touch-belgium.be</a>
               </p>


            </b-col>
         </b-row>
      </b-container>
   </div>
</template>

<script>
 import { mapGetters } from "vuex";

 import Carousel from "@/components/Carousel";

 export default {
   async asyncData ({ store, error }) {
     try {
       await store.dispatch("banner_pictures/fetch_banner_pictures");
     } catch (e) {
       error({ statusCode: 404, message: "This page is currently unavailable" });
     }
   },
   head () {
     return {
       title: "Getting Started - Touch Belgium"
     }
   },
   mounted () {

   },
   methods: {

   },
   computed: {
     ...mapGetters("banner_pictures", [
       "banner_pictures_of"
     ]),
   },
   components: {
     Carousel
   }
 }
</script>

<style module lang="scss">
</style>
