<template>
   <b-container class="mt-5">
      <b-row>
         <b-col cols="12">
            <h2>
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
</template>

<script>
 import Calendar from "@/components/Calendar.vue";

 export default {
   async asyncData ({ store, error }) {
     try {
       await store.dispatch("calendar/fetch_events");
     } catch (e) {
       error({ statusCode: 404, message: "This page is currently unavailable" });
     }
   },
   data () {
     return {

     }
   },
   head () {
     return {
       title: "Calendar - Touch Belgium"
     }
   },
   methods: {

   },
   mounted () {

   },
   computed: {

   },
   components: {
     Calendar
   }
 }
</script>

<style module lang="scss">

</style>
