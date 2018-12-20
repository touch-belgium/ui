<template>
   <v-container>
      <v-layout row wrap>
         <v-flex xs12>
            <h2 class="display-2 mt-4 mb-5"><v-icon size="30px">event</v-icon>Events</h2>
         </v-flex>

         <v-flex xs12>
            <div id="calendar">
               <calendar-view
                 :show-date="showDate"
                 :events="events"
                 :time-format-options="{hour: 'numeric', minute:'2-digit'}"
                 :show-event-times="true"
                 :starting-day-of-week=1
                 class="theme-default holiday-us-traditional holiday-us-official"
                 @click-event="onClickEvent"
               >
                  <calendar-view-header slot="header" slot-scope="{ headerProps }" :header-props="headerProps" @input="setShowDate" />
               </calendar-view>
            </div>
         </v-flex>
      </v-layout>
   </v-container>
</template>

<script>
 import { CalendarView, CalendarViewHeader } from "vue-simple-calendar";
 require("vue-simple-calendar/static/css/default.css")
 require("vue-simple-calendar/static/css/holidays-us.css")

 export default {
   name: 'calendar',
   data () {
     return {
       showDate: new Date(),
       showEventTimes: true,
       events: [] // fill with call to GCalendar API
     }
   },
   components: {
     CalendarView,
     CalendarViewHeader,
   },
   mounted () {
     this.fetchEvents();
   },
   methods: {
     setShowDate(d) {
       this.showDate = d;
     },
     clean_event(ev) {
       return {
         startDate: typeof ev.start.date === 'undefined' ? ev.start.dateTime : ev.start.date,
         endDate: typeof ev.end.date === 'undefined' ? ev.end.dateTime : ev.end.date,
         title: ev.summary
       }
     },
     fetchEvents () {
       /* Google Apis JS library doesn't work very well with Vue, so
          the request is made in a simpler way */
       let CALENDAR = "touch-belgium.be_n8dnngo4r1tjc2rqto95mii46k@group.calendar.google.com";
       let GOOGLE_API_KEY = "AIzaSyAGfECY7JPalI0pfARPXTmAxiN1uz15Ja8";
       let url = "https://www.googleapis.com/calendar/v3/calendars/" +
                 CALENDAR + "/events?key=" + GOOGLE_API_KEY;
       fetch(url)
         .then(response => response.json())
         .then(data => {
           this.events = data.items.map(this.clean_event);
         });
     },
     onClickEvent(e) {
       /* popup or tooltip maybe */
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
   .cv-event {
     overflow: visible;
     white-space: normal;
   }
 }
</style>
