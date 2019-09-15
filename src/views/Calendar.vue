<template>
   <b-container class="mt-5">
      <b-row>
         <b-col cols="12">
            <h2 class="display-4"><span v-html="calendar_icon"></span> {{ $t('home.Calendar') }}</h2>
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
 import Calendar from "../components/Calendar.vue";

 export default {
   data () {
     return {

     }
   },
   methods: {

   },
   async mounted () {

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
