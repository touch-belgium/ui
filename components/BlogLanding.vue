<template>
   <div>
      <b-col v-if="latest_posts != null && !latest_posts.length" cols="12">
         <b-alert show variant="info">No posts to show.</b-alert>
      </b-col>
      <b-card-group deck>
         <b-row>
            <b-col md="6" v-for="post in latest_posts" :key="post.id" class="mb-4">
               <post-card :post="post" />
            </b-col>
         </b-row>
      </b-card-group>
   </div>
</template>

<script>
 import { mapGetters } from "vuex";

 import PostCard from "@/components/PostCard";

 export default {
   data () {
     return {

     }
   },
   methods: {
   },
   mounted () {

   },
   computed: {
     ...mapGetters("blog", [
       "latest_posts"
     ])
   },
   components: {
     PostCard
   }
 }
</script>

<style scoped lang="scss">

</style>
