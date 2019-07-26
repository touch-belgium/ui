<template>
   <div id="calendar" class="mb-5 mt-3">
      <calendar-view
        :show-date="show_date"
        :events="events"
        :time-format-options="{hour: 'numeric', minute:'2-digit'}"
        :show-event-times="true"
        :starting-day-of-week=1
        locale="fr"
        class="theme-default"
        @click-event="on_click_event"
      >
         <calendar-view-header
           slot="header"
           slot-scope="{ headerProps }"
           :header-props="headerProps"
           @input="set_show_date"
         />
      </calendar-view>

      <b-modal centered ref="event_modal" hide-footer title="Touch Belgium event">
         <h4>{{this.selected_event.title}}</h4>
         <p><span v-html="calendar_icon"></span><span> {{this.selected_event.start}} - {{this.selected_event.end}}</span></p>
         <b-button class="mt-3" variant="outline-secondary" block @click="on_click_close_modal">Close</b-button>
      </b-modal>

      <b-alert show class="mt-3">Sync this calendar (iCal): <a href="https://calendar.google.com/calendar/ical/touch-belgium.be_n8dnngo4r1tjc2rqto95mii46k%40group.calendar.google.com/public/basic.ics">https://calendar.google.com/calendar/ical/touch-belgium.be_n8dnngo4r1tjc2rqto95mii46k%40group.calendar.google.com/public/basic.ics</a></b-alert>
   </div>
</template>

<script>
 import { CalendarView, CalendarViewHeader } from "vue-simple-calendar";
 import { mapState, mapGetters, mapMutations } from "vuex";
 import octicons from "octicons";
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
   },
   methods: {
     ...mapMutations("calendar", [
       "set_show_date"
     ]),
     on_click_event(e) {
       this.$store.commit("calendar/set_selected_event", e);
       this.$refs['event_modal'].show();
     },
     on_click_close_modal() {
       this.$refs['event_modal'].hide();
     },
   },
   computed: {
     ...mapState("calendar", [
       "show_date",
       "events",
       "selected_event"
     ]),
     ...mapGetters("calendar", [

     ]),
     calendar_icon () {
       return octicons["calendar"].toSVG();
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
