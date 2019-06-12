<template>
   <b-container class="mt-5">
      <b-img fluid src="media/banner_tournaments.jpg"></b-img>
      <h1>Tournaments and competitions</h1>

      <b-row>
         <b-col class="my-4" cols="12" md="6" lg="4" xl="6">
            <b-form-input
              label="Competition name"
              placeholder="Start typing to narrow down the results"
              browser-autocomplete="off"
              v-model="search"
            ></b-form-input>
         </b-col>
      </b-row>


      <b-row>
         <b-table
           striped
           outlined
           responsive
           :per-page="per_page"
           :fields="headers"
           :items="shown"
           :current-page="current_page"
         >
         </b-table>
      </b-row>

      <b-row>
         <b-col md="6" class="my-1">
            <b-pagination
              v-model="current_page"
              :total-rows="total_rows"
              :per-page="per_page"
              class="my-0"
            ></b-pagination>
         </b-col>
      </b-row>
   </b-container>
</template>

<script>
 import slugify from "slugify";
 import ky from "ky";
 import api from "../common/api.js";

 export default {
   props: [],
   data () {
     return {
       current_page: 1,
       per_page: 10,
       competitions: [],
       search: "",
       headers: [
         {
           label: 'Competition',
           key: 'name',
           sortable: true,
         },
       ],
       pagination: {
         descending: false,
         page: 1,
         rowsPerPage: 10,
         sortBy: 'name',
         totalItems: 0,
       }
     }
   },
   methods: {
     async fetch_competitions () {
       let url = "competitions";

       try {
         const response = await api.get(url).json();
         console.log(response);
         this.competitions = response.results;
         console.log(this.competitions);
       } catch (e) {
         this.error = true;
       }
     },
     url (name, id) {
       return 'competitions/' + slugify(name) + ',' + id;
     }
   },
   created () {
   },
   mounted () {
     this.fetch_competitions();
   },
   computed: {
     shown () {
       let patt = new RegExp(this.search, "i");
       return this.competitions.filter(c => patt.test(c.name));
     },
     total_rows () {
       let patt = new RegExp(this.search, "i");
       return this.competitions.filter(c => patt.test(c.name)).length;
     }
   }
 }

</script>

<style module lang="scss">
 .v-rating .v-icon {
   padding: 0;
   font-size: 18px;
 }
</style>
