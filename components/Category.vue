<template>
   <div class="mt-3">
      <b-row v-show="false">
         <b-col>
            <h4>Category: <b-badge>{{cat.category}}</b-badge></h4>
         </b-col>
      </b-row>

      <b-row v-show="competition_type == 'LL'">
         <b-col cols="12">
            <h1>Table</h1>
            <b-table
              striped
              bordered
              responsive
              hover
              sort-by="points"
              sort-desc
              :sort-compare="custom_sort_table"
              :fields="table_fields"
              :items="table_info"
            >
            </b-table>
         </b-col>
      </b-row>

      <div v-show="true">
         <b-row class="mt-3">
            <b-col>
               <h1>Fixtures and results</h1>
            </b-col>
         </b-row>

         <b-row>
            <b-col>
               <p>Filter matches by team:</p>
            </b-col>
         </b-row>

         <b-row class="mb-4">
            <b-col cols="12" md="6" lg="4">
               <b-form-select
                 @input="on_select_team_box"
                 :options="teams"
               >
               </b-form-select>
               <!-- TODO: clear selected team -->
            </b-col>
         </b-row>

         <b-row no-gutters v-for="match in filtered_matches(selected_team)" :key="match.id">
            <b-col cols="12">
               <match :info="match" />
            </b-col>
         </b-row>
      </div>
   </div>
</template>

<script>
 import Match from "@/components/Match.vue";

 import { mapState, mapGetters } from "vuex";

 export default {
   props: ["cat", "competition_type"],
   data () {
     return {
       selected_team: null,
     }
   },
   methods: {
     custom_sort_table (aRow, bRow, key, sortDesc, formatter, compareOptions, compareLocale) {
       const points_a = aRow[key];
       const points_b = bRow[key];
       const td_a = aRow["td"];
       const td_b = bRow["td"];
       if (
         /* This is useless but whatever */
         (typeof points_a === 'number' && typeof points_b === 'number') ||
         (points_a instanceof Date && points_b instanceof Date)
       ) {
         if (points_a != points_b) {
           return points_a < points_b ? -1 : points_a > points_b ? 1 : 0
         } else {
           /* If same points, sort based on the tries difference */
           return td_a < td_b ? -1 : td_a > td_b ? 1 : 0
         }
       } else {
         // Otherwise stringify the field data and use String.prototype.localeCompare
         /* This is useless but whatever */
         return toString(points_a).localeCompare(toString(points_b), compareLocale, compareOptions)
       }
     },
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
       "table_fields"
     ]),
     ...mapGetters("competitions", [
       "teams",
       "table_info",
       "filtered_matches"
     ])
   },
   components: {
     Match
   }
 }
</script>

<style scoped lang="scss">

</style>
