<template>
   <b-container class="mt-5">
      <b-row>
         <b-col cols="12">
            <h2>Committee</h2>
            <p class="text-justify">
               Touch Belgium is the national body responsible for the
               development of touch across Belgium. The Touch Belgium
               Committee is composed of a group of hard-working,
               dedicated volunteers who are committed to developing
               Touch in Belgium.
            </p>
            <p class="text-justify">
               The Committee meets once a month, with all of the
               member club representatives, to discuss development
               opportunities, plan tournaments, schedule referee and
               coaching courses and share new ideas to grow the sport.
            </p>
         </b-col>
      </b-row>
      <b-row>
         <b-table
           class="shadow"
           outlined
           responsive
           striped
           :items="committee"
           table-variant="light"
         >
            <template #cell(email)="data">
               <a :href='"mailto:" + data.value'>{{ data.value }}</a>
            </template>
         </b-table>
      </b-row>
      <b-row v-if="$fetchState.pending">
         <b-col cols="12">
            <b-skeleton-table
              :rows="8"
              :columns="3"
              :table-props="{ bordered: true, striped: true }"
            ></b-skeleton-table>
         </b-col>
      </b-row>
   </b-container>
</template>

<script>
 import { mapGetters } from "vuex";

 export default {
   async fetch () {
     const { store } = this.$nuxt.context;
     await store.dispatch("members/fetch_committee");
   },
   head () {
     return {
       title: "Committee - Touch Belgium"
     }
   },
   methods: {

   },
   mounted () {

   },
   computed: {
     ...mapGetters("members", [
       "committee"
     ])
   }
 }
</script>

<style module lang="scss">
</style>
