<template>
   <b-container class="mt-5">
      <b-row>
         <b-col cols="12">
            <h2 class="display-4">
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
   async asyncData ({ store }) {
     try {
       await store.dispatch("calendar/fetch_events");
     } catch (e) {
       return { error_message: "Network error" };
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
