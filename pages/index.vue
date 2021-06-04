<template>
   <div class="landing-wrapper">
      <VideoOverlay />
      <section class="mt-5">
         <b-container>
            <b-row>
               <b-col cols="12">
                  <h1 class="creo-font">
                     <font-awesome-icon icon="newspaper" />
                     {{ $t("news") }}
                  </h1>
               </b-col>
            </b-row>
            <b-row>
               <b-col sm="12" md="9">
                  <blog-landing></blog-landing>
               </b-col>
               <b-col class="twitter-timeline" sm="12" md="3">
                  <Timeline id="touchbelgium" sourceType="profile" :options="{ tweetLimit: '4', 'data-height': '300' }">
                     <b-spinner variant="primary" label="Spinning"></b-spinner>
                  </Timeline>
               </b-col>
            </b-row>
         </b-container>
      </section>

      <section class="mb-4">
         <b-container>
            <b-row>
               <b-col cols="12">
                  <h1 class="mb-2">
                     <font-awesome-icon icon="trophy" />
                     Upcoming events
                  </h1>
                  <p class="text-justify">
                     Playing Touch is one of the best ways to get involved,
                     learn the game and develop as a player.
                  </p>
                  <p class="text-justify">
                     Touch Belgium and its member clubs organise a
                     number of sporting and social events throughout
                     the year. Check out the upcoming ones below and
                     click on them to find out more:
                  </p>
               </b-col>
            </b-row>
            <upcoming-events :competitions="upcoming_competitions" />
         </b-container>
      </section>

      <section>
         <b-container>
            <b-row>
               <b-col cols="12">
                  <h1 class="creo-font">
                     <font-awesome-icon icon="calendar-alt" />
                     {{ $t('calendar') }}
                  </h1>
               </b-col>
            </b-row>
            <b-row>
               <b-col>
                  <calendar></calendar>
               </b-col>
            </b-row>
         </b-container>
      </section>
   </div>
</template>

<script>
 import { mapGetters, mapState } from "vuex";
 import { Timeline } from "vue-tweet-embed";

 import BlogLanding from "@/components/BlogLanding";
 import Calendar from "@/components/Calendar";
 import VideoOverlay from "@/components/VideoOverlay";
 import UpcomingEvents from "@/components/UpcomingEvents";

 export default {
   async asyncData ({ app, req, store, error }) {
     try {
       /* Google API Key is restricted based on the HTTP referer, add
          it to Axios server-side request. If the process.client, it
          doesn't matter since the browser overrides the header and it
          works. */
       const referrer = process.client ? window.document.referrer : `https://${req.headers.host}`;
       app.$axios.setHeader('Referer', referrer);
       /* News */
       await store.dispatch("blog/fetch_posts");
       /* Calendar */
       await store.dispatch("calendar/fetch_events");
       /* Tournaments */
       await store.dispatch("competitions/fetch_competition_list");
     } catch (e) {
       console.log(e);
       error({ statusCode: 404, message: "This page is currently unavailable" });
     }
   },
   data () {
     return {

     }
   },
   head () {
     return {
       title: "Home - Touch Belgium"
     }
   },
   computed: {
     ...mapGetters("competitions", [
       "upcoming_competitions"
     ])
   },
   components: {
     Timeline, BlogLanding, Calendar, VideoOverlay, UpcomingEvents
   },
 }
</script>

<style scoped lang="scss">
 .twitter-timeline {
   height: 50vh;
   overflow-y: scroll;
 }
</style>
