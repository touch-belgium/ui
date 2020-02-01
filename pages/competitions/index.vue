<template>
   <div>
      <carousel :pictures="banner_pictures_of('domestic events')"></carousel>
      <b-container class="mt-5">
         <h1>Touch Belgium competitions and tournaments</h1>

         <p class="text-justify">
            From one day tournaments to six-week social competitions,
            there are plenty of opportunities to play touch throughout
            the year!
         </p>
         <p class="text-justify">
            The next tournament to be held in Belgium will be the
            Winter Thaw tournament, taking place on Saturday 21st
            March.
         </p>
         <h3>
            Brussels Men's and Women's International - BMWI
         </h3>
         <p class="text-justify">
            Belgium's biggest international tournament! Welcoming
            teams from across Europe, and played according to
            international rules, it is one of the few men's and
            women's competitive level tournaments held on an annual
            basis.
         </p>
         <h3>
            Winter Thaw
         </h3>
         <p class="text-justify">
            Winter Thaw is a purely social tournament designed to give
            new and experienced players alike the opportunity to enjoy
            a fun afternoon playing touch. As the name suggests, it is
            held in the first few months of the year to help ease
            players out of the winter with a social tournament! Teams
            are created on the day from individual subscriptions, so
            it's a perfect opportunity to play with players from other
            clubs.
         </p>
         <h3>
            Spring Into Touch
         </h3>
         <p class="text-justify">
            Spring Into Touch is a summer league, aimed specifically
            at allowing new players to discover the sport and played
            for fun! Teams play two games per week over six weeks,
            every Wednesday from May to June. Burgers and beer are
            waiting for all players at the end of every evening.
         </p>
         <p class="text-justify">
            Experienced and new players are welcome! Bring your
            friends, bring your colleagues, sign up your own team, or
            join an existing team to participate in Spring Into Touch.
         </p>
         <h3>
            St Nicolas
         </h3>
         <p class="text-justify">
            Want to play some festive Touch? St Nicolas is a one-day
            social tournament, that takes place at the beginning of
            December, around the festival of St Nicolas.
         </p>
         <p class="text-justify">
            All teams are welcome to join. With a great atmosphere,
            plenty of Touch to play to keep everyone warm and a fun
            and friendly after party, this is one not to be missed.
         </p>

         <hr />

         <b-row v-if="ongoing_domestic_competitions.length" class="pb-4">
            <b-col>
               <ongoing-events :competitions="ongoing_domestic_competitions" />
            </b-col>
         </b-row>

         <b-row v-if="upcoming_domestic_competitions.length" class="pb-4">
            <b-col>
               <upcoming-events :competitions="upcoming_domestic_competitions" />
            </b-col>
         </b-row>

         <b-row v-if="past_domestic_competitions.length" class="pb-4" v-show="false">
            <b-col>
               <past-events :competitions="past_domestic_competitions" />
            </b-col>
         </b-row>


         <b-row>
            <b-col cols="12">
               <h2 class="creo-font">
                  <font-awesome-icon icon="calendar-alt" />
                  Full calendar
               </h2>
            </b-col>
         </b-row>
         <b-row>
            <b-col>
               <calendar></calendar>
            </b-col>
         </b-row>
      </b-container>
   </div>
</template>

<script>
 import Carousel from "@/components/Carousel";
 import Calendar from "@/components/Calendar";
 import OngoingEvents from "@/components/OngoingEvents";
 import UpcomingEvents from "@/components/UpcomingEvents";
 import PastEvents from "@/components/PastEvents";

 import { mapGetters, mapState } from "vuex";

 export default {
   async asyncData ({ store, error }) {
     try {
       await store.dispatch("banner_pictures/fetch_banner_pictures");
       await store.dispatch("competitions/fetch_competition_list");
       await store.dispatch("calendar/fetch_events");
     } catch (e) {
       error({ statusCode: 404, message: "This page is currently unavailable" });
     }
   },
   data () {
     return {
       per_page: 5,
       error: null
     }
   },
   head () {
     return {
       title: "Competitions - Touch Belgium"
     }
   },
   methods: {
     on_show_more_click (e) {
       this.$store.commit("competitions/show_more");
     },
     on_type_search_box (text) {
       this.$store.commit("competitions/update_search_competition_box", text);
     }
   },
   mounted () {

   },
   computed: {
     ...mapState("competitions", [
       "max_shown",
       "search_competition_box"
     ]),
     ...mapGetters("banner_pictures", [
       "banner_pictures_of"
     ]),
     ...mapGetters("competitions", [
       "domestic_competitions",
       "ongoing_domestic_competitions",
       "upcoming_domestic_competitions",
       "past_domestic_competitions"
     ])
   },
   components: {
     Carousel, Calendar, OngoingEvents, UpcomingEvents, PastEvents
   }
 }

</script>

<style scoped lang="scss">

</style>
