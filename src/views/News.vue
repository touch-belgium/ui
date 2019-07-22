<template>
   <b-container class="mt-5">
      <b-row>
         <b-col xs="12">
            <h2 class="display-4">News</h2>
         </b-col>
      </b-row>
      <b-row>
         <blog></blog>
      </b-row>
   </b-container>
</template>

<script>
 import Blog from "../components/Blog.vue";
 export default {
   data () {
     return {

     }
   },
   components: {
     Blog
   }
 }
</script>

<style lang="scss">
</style>
