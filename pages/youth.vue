<template>
   <div>
      <carousel :pictures="banner_pictures_of('youth')"></carousel>
      <b-container class="mt-3">
         <b-row>
            <b-col cols="12">
               <h1>Youth</h1>

               <p class="text-justify">
                  Open to all ages and abilities, Touch is a fantastic
                  way for children to learn a team sport in a mixed
                  environment.
               </p>

               <p class="text-justify">
                  For junior players, the speed, agility and dynamism of
                  Touch make it great fun to discover. The safety of
                  Touch lies in the fact that it is a limited-contact
                  sport.
               </p>


               <p class="text-justify">
                  14 players make up a team. 6 players maximum are
                  allowed on the pitch at the same time, and with
                  unlimited substitution, everyone is involved.
               </p>


               <p class="text-justify">
                  Touch Belgium has recently started a youth section,
                  with trainings dedicated to children between the ages
                  of 12 and 17. Each training session is a new
                  opportunity for beginners and experienced players to
                  come along and play.
               </p>


               <p class="text-justify">
                  Junior players are welcome at all of the Belgian Touch
                  clubs. For a list of opportunities to play in Belgium,
                  see our <nuxt-link :to="{ name: 'clubs' }">'Where to play' section</nuxt-link>.
               </p>

               <p class="text-justify">
                  To find out more about the involvement of Touch Belgium with the youth, email <a href="mailto:youth@touch-belgium.be">youth@touch-belgium.be</a>.
               </p>
            </b-col>
         </b-row>
         <b-row v-if="display_sponsorship_brochure" class="mb-5">
            <b-embed
              type="iframe"
              :src="display_sponsorship_brochure.file">
            </b-embed>
         </b-row>
      </b-container>
   </div>
</template>

<script>
 import { mapGetters } from "vuex";

 export default {
   async fetch () {
     const { store } = this.$nuxt.context;
     await store.dispatch("banner_pictures/fetch_banner_pictures");
     await store.dispatch("files/fetch_files");
   },
   data () {
     return {

     }
   },
   head () {
     return {
       title: "Youth - Touch Belgium"
     }
   },
   methods: {

   },
   mounted () {

   },
   computed: {
     ...mapGetters("banner_pictures", [
       "banner_pictures_of"
     ]),
     ...mapGetters("files", [
       "display_sponsorship_brochure"
     ])
   }
 }
</script>

<style module lang="scss">
</style>
