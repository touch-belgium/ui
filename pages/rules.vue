<template>
   <b-container class="mt-5">
      <b-row>
         <b-col cols="12">
            <h2>Rules and regulations</h2>
            <p class="text-justify">
               The rules and regulations for Touch are developed by
               the <a href="https://docs.internationaltouch.org">Federation
               of International Touch</a>. These include policies on
               player eligibility, codes of behavior, referee
               commission policy, uniform policy and player behaviour.
            </p>

            <p class="text-justify">
               The Federation of Touch (FIT) has released the 5th
               edition of the Rules of Touch, which are based on the
               8th edition of Touch Football Australia's Rules
               (TFA8). The FIT5 rules are being adopted by Touch
               Belgium and the European Federation of Touch (EFT) from
               now and will be used at the next European Touch
               Championships in 2021. Touch Belgium is adopting the
               new rules immediately and that they will be used for
               the upcoming Fall into Touch tournament and the Belgian
               National Championships.
            </p>

            <p class="text-justify">
               In order to encourage the growth and development of
               Touch in Belgium, specific policies are also put in
               place for Touch Belgium members.
            </p>

            <p>Documents:</p>
            <b-list-group class="mb-3">
               <b-list-group-item v-for="doc in files_of('rules')" :key="doc.title">
                  <a target="_blank" :href="doc.file">{{doc.title}}</a>
               </b-list-group-item>
            </b-list-group>

            <p v-if="rules_links.length">Links:</p>
            <b-list-group v-if="rules_links.length" class="mb-3">
               <b-list-group-item v-for="link in rules_links" :key="link.title">
                  <a target="_blank" :href="link.link">{{link.title}}</a>
               </b-list-group-item>
            </b-list-group>
         </b-col>
      </b-row>
   </b-container>
</template>

<script>
 import { mapGetters } from "vuex";

 export default {
   async fetch () {
     const { store } = this.$nuxt.context;
     await store.dispatch("files/fetch_files");
     await store.dispatch("links/fetch_links");
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
     ]),
     ...mapGetters("links", [
       "rules_links"
     ])
   }
 }
</script>

<style scoped lang="scss">
</style>
