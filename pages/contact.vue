<template>
   <b-container class="mt-5">
      <b-row>
         <b-col cols="12">
            <h2>Contact</h2>
            <p class="text-justify">
               Would you like to discover more about Touch? Are you
               looking for the next referee or coaching course
               opportunity in Belgium? Want to secure your team's in
               the next fun-filled tournament?
            </p>

            <p class="text-justify">
               All of the Touch Belgium contact details are below -
               we're looking forward to hearing from you!
            </p>
         </b-col>
      </b-row>

      <b-row class="mb-5">
         <b-col cols="12" md="8">
            <b-list-group>
               <b-list-group-item v-for="c in contacts" :key="c.name" class="d-flex justify-content-between align-items-center">
                  {{c.name}}
                  <a :href="mailto(c.email)">{{c.email}}</a>
               </b-list-group-item>
            </b-list-group>
         </b-col>
      </b-row>
   </b-container>
</template>

<script>
 import { mapState } from "vuex";

 export default {
   data () {
     return {
       error: null
     }
   },
   head () {
     return {
       title: "Contact - Touch Belgium"
     }
   },
   methods: {
     mailto (email) {
       return `mailto:${email}`;
     }
   },
   async mounted () {
     try {
       await this.$store.dispatch("contacts/fetch_contacts");
     } catch (e) {
       this.error = true;
     }
   },
   computed: {
     ...mapState("contacts", [
       "contacts"
     ])
   }
 }
</script>

<style module lang="scss">
</style>
