<template>
   <v-container class="mt-3" v-bind="{ [`grid-list-xl`]: true }">
      <v-layout row wrap>
         <v-flex xs12>
            <h2 class="display-1">Tournaments and competitions</h2>
         </v-flex>

         <v-flex xs12 sm6 md4 lg3>
            <v-text-field
              label="Competition name"
              placeholder="Start typing to narrow down the results"
              browser-autocomplete="off"
              v-model="search"
            ></v-text-field>
         </v-flex>
         <v-flex sm6 md8 lg9></v-flex>

         <v-flex>
            <v-data-table
              :headers="headers"
              :items="shown"
              class="elevation-1 mb-4"
              no-data-text="No competitions yet."
              :pagination.sync="pagination"
              >
               <template slot="items" slot-scope="props">
                  <router-link :style="{ cursor: 'pointer'}" tag="td" :to="url(props.item.name, props.item.id)">{{ props.item.name }}</router-link>
                  <td><v-rating readonly :value="props.item.rating" class="ml-2"></v-rating></td>
               </template>
            </v-data-table>
         </v-flex>
      </v-layout>
   </v-container>
</template>

<script>
 import slugify from 'slugify';
 import axios from 'axios';
 export default {
   props: [],
   data () {
     return {
       competitions: [],
       search: "",
       headers: [
         {
           text: 'Competition',
           value: 'name',
           class: 'subheading',
         },
         { text: 'Rating',
           value: 'rating',
           class: 'subheading'
         }
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
     fetchComp () {
       let url = API + "competitions/";

       axios.get(url, {crossdomain: true}).then(response => {
         this.competitions = response.data.results;
       });
     },
     url (name, id) {
       return 'competitions/' + slugify(name) + ',' + id;
     }
   },
   created () {
   },
   mounted () {
     this.fetchComp();
   },
   computed: {
     shown () {
       let patt = new RegExp(this.search, "i");
       return this.competitions.filter(c => patt.test(c.name));
     },
   }
 }

</script>

<style module lang="scss">
 .v-rating .v-icon {
   padding: 0;
   font-size: 18px;
 }
</style>
