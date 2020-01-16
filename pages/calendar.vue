<template>
   <b-container class="mt-5">
      <b-row>
         <b-col cols="12">
            <h2 class="display-4"><span v-html="calendar_icon"></span> {{ $t('calendar') }}</h2>
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
 import octicons from "@primer/octicons";
 import Calendar from "@/components/Calendar.vue";

 export default {
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
     calendar_icon () {
       return octicons["calendar"].toSVG({ "height": 48 });
     }
   },
   components: {
     Calendar
   }
 }
</script>

<style module lang="scss">
</style>
