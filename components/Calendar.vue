<template>
   <div>
      <client-only>
         <div id="calendar" class="mt-3">
            <calendar-view
              :show-date="show_date"
              :events="show_events"
              :show-event-times="false"
              :starting-day-of-week=1
              :locale="locale"
              class="theme-default"
              @click-event="on_click_event"
            >
               <calendar-view-header
                 slot="header"
                 slot-scope="{ headerProps }"
                 :header-props="headerProps"
                 @input="change_period"
               />
            </calendar-view>
         </div>
         <div>
            <b-modal centered ref="event_modal" hide-footer title="Touch Belgium event" title-tag="p">
               <div v-if="this.selected_event">
                  <p class="h4">{{this.selected_event.title}}</p>
                  <p>
                     <font-awesome-icon icon="calendar-day" />
                     <span>{{formatted_datetime(this.selected_event)}} </span>
                  </p>
                  <p v-if="this.selected_event.location">
                     <font-awesome-icon icon="map-marker-alt" />
                     {{this.selected_event.location}}
                  </p>
                  <p>{{this.selected_event.description}}</p>
                  <b-button class="mt-3" variant="outline-secondary" block @click="on_click_close_modal">Close</b-button>
               </div>
            </b-modal>

            <b-alert show class="mt-4">
               Sync this calendar (iCal):
               <a class="text-break" href="https://calendar.google.com/calendar/ical/touch-belgium.be_n8dnngo4r1tjc2rqto95mii46k%40group.calendar.google.com/public/basic.ics">https://calendar.google.com/calendar/ical/touch-belgium.be_n8dnngo4r1tjc2rqto95mii46k%40group.calendar.google.com/public/basic.ics</a>
            </b-alert>
         </div>
      </client-only>
   </div>
</template>

<script>
 import { mapState, mapGetters, mapMutations } from "vuex";
 require("vue-simple-calendar/static/css/default.css");

 export default {
   data () {
     return {
       locale: "en",
       error_message: null
     }
   },
   mounted () {
     const month_start = new Date();
     /* Set month start to the first day of the current month and call
     change_period to reduce the number of events shown */
     month_start.setDate(1);
     this.$store.dispatch("calendar/change_period", month_start);
   },
   methods: {
     change_period (e) {
       /* e is just the first day of the selected month */
       this.$store.dispatch("calendar/change_period", e);
     },
     on_click_event(e) {
       this.$store.commit("calendar/set_selected_event", e);
       this.$refs['event_modal'].show();
     },
     on_click_close_modal() {
       this.$refs['event_modal'].hide();
     },
   },
   computed: {
     /* ...mapState("i18n", [
      *   "locale"
      * ]), */
     ...mapState("calendar", [
       "show_date",
       "show_events",
       "selected_event"
     ]),
     ...mapGetters("calendar", [
       "formatted_datetime"
     ])
   },
   components: {

   }
 }
</script>

<!-- Global styles are able to take effect in calendar-view component -->
<style lang="scss">
 /* Make all same-month cells transparent */
 .theme-default .cv-day.past {
   background-color: transparent !important;
   &.outsideOfMonth {
     background-color: #fafafa;
   }
 }
 .theme-default .cv-event.clickable_event {
   cursor: pointer;
 }
</style>

<style scoped lang="scss">

 #calendar {
   @media (min-width: map-get($grid-breakpoints, "xl")) {
     min-height: 700px;
   }
   height: 60vh;
   display: flex;
   flex-direction: column;
   flex-grow: 1;
   font-family: 'Avenir', Helvetica, Arial, sans-serif;
   color: #2c3e50;
   margin-left: auto;
   margin-right: auto;
 }
</style>
