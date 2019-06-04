<template>
   <div id="calendar">
      <calendar-view
        :show-date="show_date"
        :events="events"
        :time-format-options="{hour: 'numeric', minute:'2-digit'}"
        :show-event-times="true"
        :starting-day-of-week=1
        class="theme-default"
      >
         <calendar-view-header slot="header" slot-scope="{ headerProps }" :header-props="headerProps" @input="set_show_date" />
      </calendar-view>
   </div>
</template>

<script>
 import { CalendarView, CalendarViewHeader } from "vue-simple-calendar";
 import { RRule, Day } from "rfc5545-rrule";
 import moment from "moment";
 import ky from "ky";
 require("vue-simple-calendar/static/css/default.css");

 export default {
   data () {
     return {
       show_date: new Date(),
       events: [] // fill with call to GCalendar API
     }
   },
   components: {
     CalendarView,
     CalendarViewHeader,
   },
   mounted () {
     this.fetch_events();
   },
   methods: {
     set_show_date(d) {
       this.show_date = d;
     },

     expand_recurrent_event(ev) {
       const startDate = ev.start.hasOwnProperty('dateTime') ? ev.start.dateTime : ev.start.date;
       const endDate = ev.end.hasOwnProperty('dateTime') ? ev.end.dateTime : ev.end.date;
       const title = ev.summary;
       const rfc5545 = RRule.fromString(ev.recurrence[0]);
       let count;
       if ('count' in rfc5545) {
         count = rfc5545.count;
       } else {
         /* + 1 for the first (or last) day */
         count = moment(rfc5545.until).diff(moment(startDate), 'weeks') + 1;
       }
       return {
         startDate: ev.start.hasOwnProperty('dateTime') ? ev.start.dateTime : ev.start.date,
         endDate: ev.end.hasOwnProperty('dateTime') ? ev.end.dateTime : ev.end.date,
         title: ev.summary
       }
     },

     clean_event(ev) {
       if (ev.hasOwnProperty('recurrence')) {
         return this.expand_recurrent_event(ev)
       } else {
         return {
           startDate: ev.start.hasOwnProperty('dateTime') ? ev.start.dateTime : ev.start.date,
           endDate: ev.end.hasOwnProperty('dateTime') ? ev.end.dateTime : ev.end.date,
           title: ev.summary
         }
       }
     },

     async fetch_events () {
       /* Google Apis JS library doesn't work very well with Vue, so
          the request is made in a simpler way */
       const CALENDAR = "touch-belgium.be_n8dnngo4r1tjc2rqto95mii46k@group.calendar.google.com";
       const GOOGLE_API_KEY = "AIzaSyAGfECY7JPalI0pfARPXTmAxiN1uz15Ja8";
       const endpoint = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR}/events?key=${GOOGLE_API_KEY}`;

       try {
         const response = await ky.get(endpoint).json();
         console.log(response);
         this.events = response.items.map(e => this.clean_event(e));
       } catch (e) {
         console.log(e);
       }
     },
   }
 }
</script>

<style>
 #calendar {
   min-height: 70vh;
   display: flex;
   flex-direction: column;
   flex-grow: 1;
   font-family: 'Avenir', Helvetica, Arial, sans-serif;
   color: #2c3e50;
   margin-left: auto;
   margin-right: auto;
   padding-bottom: 5em;
 }
</style>
