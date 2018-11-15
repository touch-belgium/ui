<template>
   <div class="container">
      <div id="calendar">
         <calendar-view
           :show-date="showDate"
           class="theme-default holiday-us-traditional holiday-us-official">
            <calendar-view-header
              slot="header"
              slot-scope="t"
              :header-props="t.headerProps"
              @input="setShowDate" />
         </calendar-view>
      </div>
   </div>
</template>

<script>
 import { CalendarView, CalendarViewHeader } from "vue-simple-calendar";
 // The next two lines are processed by webpack. If you're using the component without webpack compilation,
 // you should just create <link> elements for these. Both are optional, you can create your own theme if you prefer.
 require("vue-simple-calendar/static/css/default.css")
 require("vue-simple-calendar/static/css/holidays-us.css")

 export default {
   name: 'calendar',
   data: function() {
     return {
       showDate: new Date(),
       events: [] // fill with call to GCalendar API
     }
   },
   components: {
     CalendarView,
     CalendarViewHeader,
   },
   mounted () {
     /* How to include external JS in Vue component */
     /* let gapi_script = document.createElement('script');
      * gapi_script.setAttribute('src', 'https://apis.google.com/js/api.js');
      * document.head.appendChild(gapi_script); */
     gapi.load('client', () => {})
     /* this.fetchEvents(); */
   },
   methods: {
     setShowDate(d) {
       this.showDate = d;
     },
     fetchEvents() {
       gapi.client.init({
         'apiKey': '234523452345',
         // Your API key will be automatically added to the Discovery Document URLs.
         'discoveryDocs': ['https://people.googleapis.com/$discovery/rest'],
       }).then(function() {
         // 3. Initialize and make the API request.
         return gapi.client.people.people.get({
           'resourceName': 'people/me',
           'requestMask.includeField': 'person.names'
         });
       }).then(function(response) {
         console.log(response.result);
       }, function(reason) {
         console.log('Error: ' + reason.result.error.message);
       });
     },
   }
 }
</script>

<style>
 #app {
   font-family: 'Avenir', Helvetica, Arial, sans-serif;
   color: #2c3e50;
   height: 67vh;
   width: 90vw;
   margin-left: auto;
   margin-right: auto;
 }
</style>
