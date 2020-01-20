<template>
   <div>
      <BannerPicture :picture="competition.picture"></BannerPicture>
      <b-container class="mt-3">
         <b-row>
            <b-col>
               <h1 class="display-4" v-if="competition">{{competition.name}}</h1>
            </b-col>
         </b-row>
         <b-row>
            <b-col>
               <p>
                  <!-- Add milestone icon -->
                  <span class="align-middle">
                     {{competition.venue.name}}.
                     <span class="font-italic" v-if="competition.venue.address">
                        {{competition.venue.address}}
                     </span>
                  </span>
               </p>

               <div v-html="competition.description"></div>
            </b-col>
         </b-row>

         <Category v-show="false" :cat="competition.categories[0]"></Category>

      </b-container>
   </div>
</template>

<script>
 import Category from "@/components/Category";
 import BannerPicture from "@/components/BannerPicture";

 import { mapState, mapGetters } from "vuex";

 export default {
   async asyncData ({ store, params, error }) {
     try {
       await store.dispatch("competitions/fetch_competition", params.id);
     } catch (e) {
       error({ statusCode: 404, message: "This page is currently unavailable" });
     }
   },
   data () {
     return {
       selected_team: null
     }
   },
   head () {
     return {
       title: "Touch Belgium"/* FIXME: add comp name */
     }
   },
   methods: {
     on_select_team_box (team) {
       this.selected_team = team;
     },
     clear_select_team_box () {

     }
   },
   mounted () {

   },
   computed: {
     ...mapState("competitions", [
       "competition"
     ])
   },
   components: {
     Category, BannerPicture
   }
 }
</script>

<style scoped lang="scss">

</style>
