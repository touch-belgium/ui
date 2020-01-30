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
         <committee-card v-for="person in committee"
                         :person="person"
                         :key="person.name" />
      </b-row>
   </b-container>
</template>

<script>
 import { mapGetters } from "vuex";

 import CommitteeCard from "@/components/CommitteeCard";

 export default {
   async asyncData ({ store, error }) {
     try {
       await store.dispatch("members/fetch_committee");
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
   },
   components: {
     CommitteeCard
   }
 }
</script>

<style module lang="scss">
</style>
