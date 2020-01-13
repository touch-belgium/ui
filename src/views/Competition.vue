<template>
   <div>
      <BannerPicture v-if="competition" :picture="competition.picture"></BannerPicture>
      <FixedTBLogo></FixedTBLogo>
      <b-container class="mt-3">
         <b-row v-if="error">
            <b-col>
               <b-alert show variant="danger">Failed to load competition</b-alert>
            </b-col>
         </b-row>
         <b-row>
            <b-col>
               <h1 class="display-4" v-if="competition">{{competition.name}}</h1>
            </b-col>

         </b-row>
         <b-row>
            <b-col>
               <p v-if="competition">
                  <span class="mr-2" v-html="milestone_icon"></span> <span class="align-middle">
                     {{competition.venue.name}}.
                     <span class="font-italic" v-if="competition.venue.address">
                        {{competition.venue.address}}
                     </span>
                  </span>
               </p>

               <div v-if="competition" v-html="competition.description"></div>
            </b-col>
         </b-row>

         <Category v-if="competition" :cat="competition.categories[0]"></Category>

      </b-container>
   </div>
</template>

<script>
 import FixedTBLogo from "../components/FixedTBLogo.vue";
 import Category from "../components/Category.vue";
 import BannerPicture from "../components/BannerPicture.vue";

 import octicons from "@primer/octicons";
 import { mapState, mapGetters } from "vuex";

 export default {
   data () {
     return {
       error: null,
       selected_team: null
     }
   },
   methods: {
     on_select_team_box (team) {
       this.selected_team = team;
     },
     clear_select_team_box () {

     }
   },
   async mounted () {
     try {
       this.$Progress.start();
       await this.$store.dispatch("competitions/fetch_competition", this.$route.params.id);
       this.$Progress.finish();
     } catch (e) {
       this.$Progress.fail();
       this.error = "Competition could not be retrieved";
     }
     console.log(this.competition);
   },
   computed: {
     ...mapState("competitions", [
       "competition"
     ]),
     ...mapGetters("competitions", [
     ]),
     milestone_icon () {
       return octicons["milestone"].toSVG();
     }
   },
   components: {
     FixedTBLogo, Category, BannerPicture
   }
 }
</script>

<style module lang="scss">

</style>
