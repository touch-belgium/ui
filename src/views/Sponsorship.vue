<template>
   <div>
      <FixedTBLogo></FixedTBLogo>
   <b-container class="mt-5">
      <b-row>
         <b-col cols="12">
            <h2>Sponsorship</h2>
            <p class="text-justify">
               By supporting the development of Touch in Belgium, you
               are supporting the growth of an inclusive sport that is
               open to anyone, of any age and ability. You are helping
               the national teams to represent Belgium at
               international events, and you are offering playing
               opportunities to a rapidly growing community of clubs
               and players, at senior and junior level.
            </p>

            <p class="text-justify">
               Official touch sections exist at eight clubs across
               Flanders, Wallonia and Brussels, and this number is on
               the rise.
            </p>
            <p class="text-justify">
               From one day tournaments, to six-week social
               competitions, and five-day international events that
               attract over 800 players and spectators with games live
               streamed on the BBC and YouTube, the growth and
               recognition of Touch is rapidly increasing.
            </p>
            <p class="text-justify">
               There are a number of sponsorship opportunities
               available, including tournaments at local and
               international level, equipment, social media and
               website profiling. For more information, download our
               sponsorship brochures here:
            </p>

            <b-list-group class="mb-3">
               <b-list-group-item v-if="!sponsorship_files.length" variant="warning">
                  No documents to show.
               </b-list-group-item>
               <b-list-group-item v-for="doc in sponsorship_files" :key="doc.title">
                  <a target="_blank" :href="doc.file">{{doc.title}}</a>
               </b-list-group-item>
            </b-list-group>

            <p class="text-justify">
               For tailored sponsoring opportunities or any further
               questions, contact <a href="mailto:sponsorship@touch-belgium.be">sponsorship@touch-belgium.be</a>
            </p>
         </b-col>
      </b-row>
      <b-row v-if="sponsorship_files.length" class="mb-5">
         <b-embed
           type="iframe"
           :src="display_sponsorship_brochure.file">
         </b-embed>
      </b-row>
   </b-container>
   </div>
</template>

<script>
 import { mapGetters, mapState } from "vuex";

 import FixedTBLogo from "../components/FixedTBLogo.vue";

 export default {
   data () {
     return {

     }
   },
   methods: {

   },
   async mounted () {
     try {
       this.$Progress.start();
       await this.$store.dispatch("files/fetch_files");
       this.$Progress.finish();
     } catch (e) {
       this.error = true;
       this.$Progress.fail();
     }
   },
   computed: {
     ...mapGetters("files", [
       "sponsorship_files",
       "display_sponsorship_brochure"
     ])
   },
   components: { FixedTBLogo }
 }
</script>

<style module lang="scss">

</style>
