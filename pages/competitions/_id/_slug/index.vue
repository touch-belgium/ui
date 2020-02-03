<template>
   <div>
      <BannerPicture :picture="competition.picture"></BannerPicture>
      <b-container class="mt-5">
         <b-card class="transparent">
            <b-row>
               <b-col>
                  <h1>{{ competition.name }}</h1>
               </b-col>
            </b-row>
            <b-row>
               <b-col>
                  <p>
                     <font-awesome-icon icon="map-marker-alt" />
                     <span class="align-middle">
                        {{ competition.venue.name }}.
                        <span class="font-italic" v-if="competition.venue.address">
                           {{ competition.venue.address }}
                        </span>
                     </span>
                  </p>

                  <div v-html="competition.description"></div>
               </b-col>
            </b-row>
         </b-card>

         <b-card no-body class="my-5">
            <b-tabs pills card>
               <template v-slot:tabs-start>
                  <h5 class="tab-start">Categories:</h5>
               </template>
               <b-tab v-for="cat in competition.categories"
                      :key="cat.category"
                      :title="cat.category"
                      @click="change_cat(cat.category)"
                      lazy>
                  <category :cat="cat" :competition_type="competition.competition_type" />
               </b-tab>
            </b-tabs>
         </b-card>
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
       title: `${this.competition.name} - Touch Belgium`
     }
   },
   methods: {
     change_cat (cat_name) {
       this.$store.dispatch("competitions/set_category", cat_name);
     },
     on_select_team_box (team) {
       this.selected_team = team;
     },
     clear_select_team_box () {

     }
   },
   mounted () {
     this.$store.dispatch("competitions/set_category", this.competition.categories[0].category);
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
 .tab-start {
   margin-right: 1em;
   margin-top: 0.5rem;
 }
</style>
