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
 export default {
   async fetch () {
     const { store } = this.$nuxt.context;
     await store.dispatch("calendar/fetch_events");
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

   }
 }
</script>

<style module lang="scss">
</style>
