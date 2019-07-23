<template>
   <div id="calendar">
      <calendar-view
        :show-date="show_date"
        :events="events"
        :time-format-options="{hour: 'numeric', minute:'2-digit'}"
        :show-event-times="true"
        :starting-day-of-week=1
        :locale="nl"
        class="theme-default"
        @click-event="on_click_event"
      >
         <calendar-view-header slot="header"
                               slot-scope="{ headerProps }"
                               :header-props="headerProps"
                               @input="set_show_date" />
      </calendar-view>

      <b-modal centered ref="event_modal" hide-footer title="Touch Belgium event">
         <h4>{{this.selected_event.title}}</h4>
         <p><span v-html="calendar_icon"></span><span> {{this.selected_event.start}} - {{this.selected_event.end}}</span></p>
         <b-button class="mt-3" variant="outline-secondary" block @click="on_click_close_modal">Close</b-button>
      </b-modal>

      <b-alert show class="mt-3">Sync this calendar:</b-alert>
   </div>
</template>

<script>
 import { CalendarView, CalendarViewHeader } from "vue-simple-calendar";
 import { RRule, Day } from "rfc5545-rrule";
 import octicons from "octicons";
 import moment from "moment";
 import _ from "lodash";
 import ky from "ky";
 require("vue-simple-calendar/static/css/default.css");

 export default {
   data () {
     return {
       show_date: new Date(),
       events: [], // fill with call to GCalendar API
       selected_event: {
         title: null,
         start: null,
         end: null
       }
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
     on_click_event(e) {
       this.selected_event.title = e.title;
       this.selected_event.start = moment(e.startDate).format('LT');
       this.selected_event.end = moment(e.endDate).format('LT');
       this.$refs['event_modal'].show();
     },

     on_click_close_modal() {
       this.$refs['event_modal'].hide();
     },

     set_show_date(d) {
       this.show_date = d;
     },

     expand_recurrent_events(arr) {
       const expanded_events = [];
       for (const ev of arr) {
         if (ev.hasOwnProperty('recurrence')) {
           const rfc5545 = RRule.fromString(ev.recurrence[0]);
           const startDate = ev.start.hasOwnProperty('dateTime') ? ev.start.dateTime : ev.start.date;
           const endDate = ev.end.hasOwnProperty('dateTime') ? ev.end.dateTime : ev.end.date;
           if (rfc5545.frequency === 'weekly') {
             let count;
             if (rfc5545.hasOwnProperty('until')) {
               /* Calculate for how many weeks should the event be
                  shown. The MomentJS diff result could be 3.8 weeks,
                  or 5.02 weeks so we round that number */
               count = _.round(moment(rfc5545.until).diff(moment(startDate), 'weeks', true));
             } else if (rfc5545.hasOwnProperty('count')) {
               count = rfc5545.count;
             }
             _.times(count, (i) => {
               const next = _.cloneDeep(ev);
               next.start.dateTime = moment(startDate).add(i, 'weeks');
               next.end.dateTime = moment(endDate).add(i, 'weeks');
               expanded_events.push(next);
             });
           }
         } else {
           expanded_events.push(ev);
         }
       }
       return expanded_events;
     },

     streamline_event(ev) {
       return {
         title: ev.summary,
         startDate: ev.start.hasOwnProperty('dateTime') ? ev.start.dateTime : ev.start.date,
         endDate: ev.end.hasOwnProperty('dateTime') ? ev.end.dateTime : ev.end.date,
         classes: "clickable_event",
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
         this.events = this.expand_recurrent_events(response.items).map(e => this.streamline_event(e));
       } catch (e) {
         console.log(e);
       }
     },
   },
   computed: {
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
