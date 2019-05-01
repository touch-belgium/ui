<template>
   <v-container>
      <v-layout row wrap>
         <!-- Header -->
         <v-flex xs12>
            <h2 class="display-2 mt-4 mb-5"><v-icon color="blue darken-2" size="48px" class="mr-2 mb-1">event</v-icon>Events</h2>
         </v-flex>

         <!-- Calendar navigation -->
         <v-flex
           xs4
           class="text-sm-left text-xs-center mb-4"
         >
            <v-btn @click="$refs.calendar.prev()">
               <v-icon
                 dark
                 left
               >
                  keyboard_arrow_left
               </v-icon>
               Prev
            </v-btn>
         </v-flex>
         <v-flex
           xs4 offset-xs4
           class="text-sm-right text-xs-center mb-4"
         >
            <v-btn
              @click="$refs.calendar.next()">
               Next
               <v-icon
                 right
                 dark
               >
                  keyboard_arrow_right
               </v-icon>
            </v-btn>
         </v-flex>


         <!-- Calendar component -->
         <v-flex xs12>
            <v-sheet
              elevation="8"
              height="600"
              class="mb-4">
               <v-calendar
                 :locale="$i18n.locale"
                 :now="today"
                 :value="today"
                 v-model="start"
                 ref="calendar"
                 color="primary"
               >
                  <template
                    slot="day"
                    slot-scope="{ date }"
                  >
                     <template v-for="event in eventsMap[date]">
                        <v-menu
                          :key="event.title"
                          v-model="event.open"
                          full-width
                          offset-x
                        >
                           <div
                             slot="activator"
                             v-ripple
                             class="my-event"
                             v-html="event.title"
                           ></div>
                           <v-card
                             color="grey lighten-4"
                             min-width="350px"
                             flat
                           >
                              <v-toolbar
                                color="primary"
                                dark
                              >
                                 <v-toolbar-title v-html="event.title"></v-toolbar-title>
                                 <v-spacer></v-spacer>
                              </v-toolbar>
                              <v-card-title
                                v-if="event.location"
                                primary-title
                              >
                                 <v-icon class="mr-2">place</v-icon>
                                 <span v-html="event.location"></span>
                              </v-card-title>
                              <v-card-actions>
                                 <v-btn
                                   flat
                                   color="secondary"
                                 >
                                    Close
                                 </v-btn>
                              </v-card-actions>
                           </v-card>
                        </v-menu>
                     </template>
                  </template>
               </v-calendar>
            </v-sheet>
         </v-flex>
      </v-layout>
   </v-container>
</template>

<script>
 import moment from 'moment';

 export default {
   name: 'calendar',
   data () {
     return {
       start: moment().format('YYYY-MM-DD'),
       /* Weekdays option is coming  */
       weekdays: [1, 2, 3, 4, 5, 6, 0],
       showDate: new Date(),
       showEventTimes: true,
       events: [] // fill with call to GCalendar API
     }
   },
   mounted () {
     this.fetchEvents();
     console.log(this.events);
   },
   methods: {
     setShowDate(d) {
       this.showDate = d;
     },
     clean_event(ev) {
       let start_date = typeof ev.start.date === 'undefined' ?
                        ev.start.dateTime : ev.start.date;
       return {
         ...ev,
         date: moment(start_date).format('YYYY-MM-DD'),
         end_date: typeof ev.end.date === 'undefined' ? ev.end.dateTime : ev.end.date,
         title: ev.summary,
         open: false
       }
     },
     fetchEvents () {
       /* Google Apis JS library doesn't work very well with Vue, so
          the request is made in a simpler way */
       let CALENDAR = "touch-belgium.be_n8dnngo4r1tjc2rqto95mii46k@group.calendar.google.com";
       let GOOGLE_API_KEY = "AIzaSyAGfECY7JPalI0pfARPXTmAxiN1uz15Ja8";
       let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR}/events?key=${GOOGLE_API_KEY}`;
       fetch(url)
         .then(response => response.json())
         .then(data => {
           this.events = data.items.map(this.clean_event);
           console.log(data.items);
         });
     },
     onClickEvent(e) {
       /* popup or tooltip maybe */
     },
   },
   computed: {
     // convert the list of events into a map of lists keyed by date
     eventsMap () {
       const map = {};
       this.events.forEach(e => (map[e.date] = map[e.date] || []).push(e));
       console.log("yeah");
       console.log(map);
       return map;
     }
   }
 }
</script>

<style>
 .my-event {
   overflow: hidden;
   text-overflow: ellipsis;
   white-space: nowrap;
   border-radius: 2px;
   background-color: #1867c0;
   color: #ffffff;
   border: 1px solid #1867c0;
   width: 100%;
   font-size: 12px;
   padding: 3px;
   cursor: pointer;
   margin-bottom: 1px;
 }
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
