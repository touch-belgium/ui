<template>
   <div id="calendar" class="mb-5 mt-3">
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

      <b-modal centered ref="event_modal" hide-footer title="Touch Belgium event">
         <div v-if="this.selected_event">
            <h4>{{this.selected_event.title}}</h4>
            <p><span v-html="calendar_icon"></span><span>{{formatted_datetime(this.selected_event)}} </span></p>
            <p v-if="this.selected_event.location"><span v-html="location_icon"></span> {{this.selected_event.location}}</p>
            <p>{{this.selected_event.description}}</p>
            <b-button class="mt-3" variant="outline-secondary" block @click="on_click_close_modal">Close</b-button>
         </div>
      </b-modal>

      <b-alert show class="mt-3">Sync this calendar (iCal): <a class="text-break" href="https://calendar.google.com/calendar/ical/touch-belgium.be_n8dnngo4r1tjc2rqto95mii46k%40group.calendar.google.com/public/basic.ics">https://calendar.google.com/calendar/ical/touch-belgium.be_n8dnngo4r1tjc2rqto95mii46k%40group.calendar.google.com/public/basic.ics</a></b-alert>
   </div>
</template>

<script>
 import { CalendarView, CalendarViewHeader } from "vue-simple-calendar";
 import { mapState, mapGetters, mapMutations } from "vuex";
 import octicons from "@primer/octicons";
 require("vue-simple-calendar/static/css/default.css");

 export default {
   data () {
     return {

     }
   },
   components: {
     CalendarView,
     CalendarViewHeader,
   },
   async mounted () {
     await this.$store.dispatch("calendar/fetch_events");
     const month_start = new Date();
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
     ...mapState("i18n", [
       "locale"
     ]),
     ...mapState("calendar", [
       "show_date",
       "show_events",
       "selected_event"
     ]),
     ...mapGetters("calendar", [
       "formatted_datetime"
     ]),
     calendar_icon () {
       return octicons["calendar"].toSVG();
     },
     location_icon () {
       return octicons["location"].toSVG();
     }
   }
 }
</script>

<style>
 @import "Styles/_custom-bootstrap-variables.scss";

 #calendar {
   @media (min-width: map-get($grid-breakpoints, "xl")) {
     min-height: 700px;
   }
   height: 70vh;
   display: flex;
   flex-direction: column;
   flex-grow: 1;
   font-family: 'Avenir', Helvetica, Arial, sans-serif;
   color: #2c3e50;
   margin-left: auto;
   margin-right: auto;
   padding-bottom: 5em;

   .clickable_event {
     cursor: pointer;
   }
 }
</style>
