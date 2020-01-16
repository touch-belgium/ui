<template>
   <div class="landing-wrapper">
      <VideoOverlay />
      <section class="mt-5">
         <b-container>
            <b-row>
               <b-col cols="12">
                  <h2 class="display-4 creo-font">
                     <font-awesome-icon icon="newspaper" />
                     {{ $t("news") }}
                  </h2>
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

      <section>
         <b-container>
            <b-row>
               <b-col cols="12">
                  <h2 class="display-4 creo-font">
                     <font-awesome-icon icon="calendar-alt" />
                     {{ $t('calendar') }}
                  </h2>
               </b-col>
            </b-row>
            <b-row>
               <b-col>
                  <calendar></calendar>
               </b-col>
            </b-row>
         </b-container>
      </section>

      <section>
         <b-container>
            <b-row>
               <b-col cols="12">
                  <h2 class="display-4 creo-font mb-5">
                     <font-awesome-icon icon="trophy" />
                     Upcoming tournaments
                  </h2>
               </b-col>
            </b-row>
            <b-row>
               <b-col>

               </b-col>
            </b-row>
         </b-container>
      </section>


   </div>
</template>

<script>
 import { Timeline } from "vue-tweet-embed";

 import BlogLanding from "@/components/BlogLanding";
 import Calendar from "@/components/Calendar";
 import VideoOverlay from "@/components/VideoOverlay";

 export default {
   async asyncData ({ store }) {
     try {
       /* News */

       /* Calendar */
       await store.dispatch("calendar/fetch_events");
       /* Tournaments */

     } catch (e) {
       return { error_message: "Network error" };
     }
   },
   data () {
     return {

     }
   },
   head () {
     return {
       title: "Touch Belgium"
     }
   },
   computed: {

   },
   components: {
     Timeline, BlogLanding, Calendar, VideoOverlay
   },
 }
</script>

<style scoped lang="scss">
 .twitter-timeline {
   height: 50vh;
   overflow-y: scroll;
 }
</style>
