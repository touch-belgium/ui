<template>
   <b-container class="mt-5">
      <b-row>
         <b-col cols="12">
            <h2>Rules and regulations</h2>
            <p class="text-justify">
               The rules and regulations for Touch are developed by
               the <a href="https://docs.internationaltouch.org">Federation of International Touch</a>
            </p>

            <p class="text-justify">
               These include policies on player eligibility, codes of
               behavior, referee commission policy, uniform policy and
               player behaviour.
            </p>

            <p class="text-justify">
               In order to encourage the growth and development of
               Touch in Belgium, specific policies are in place for
               Touch Belgium members.
            </p>

            <p>Documents:</p>
            <b-list-group class="mb-3">
               <b-list-group-item v-for="doc in files_of('rules')" :key="doc.title">
                  <a target="_blank" :href="doc.file">{{doc.title}}</a>
               </b-list-group-item>
            </b-list-group>

         </b-col>
      </b-row>
   </b-container>
</template>

<script>
 import { mapGetters } from "vuex";

 export default {
   async asyncData ({ store, error }) {
     try {
       await store.dispatch("files/fetch_files");
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
       title: "Rules and regulations - Touch Belgium"
     }
   },
   methods: {

   },
   mounted () {

   },
   computed: {
     ...mapGetters("files", [
       "files_of"
     ])
   }
 }
</script>

<style scoped lang="scss">
</style>
