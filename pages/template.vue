<template>
   <b-container class="mt-5">
      <b-row>
         <b-col cols="12">
            <h2>Title</h2>
            <p class="text-justify">

            </p>

            <p class="text-justify">

            </p>
         </b-col>
      </b-row>
   </b-container>
</template>

<script>
 export default {
   async fetch() {
     const { store } = this.$nuxt.context;
   },
   data () {
     return {

     }
   },
   head () {
     return {
       title: "Touch Belgium"
     }
   },
   methods: {

   },
   mounted () {

   },
   computed: {

   },
   components: {

   }
 }
</script>

<style scoped lang="scss">
</style>
