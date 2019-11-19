<template>
   <div>
      <b-col v-if="error" cols="12">
         <b-alert show variant="danger">Posts could not be retrieved.</b-alert>
      </b-col>
      <b-col v-if="latest_posts != null && !latest_posts.length" cols="12">
         <b-alert show variant="info">No posts to show.</b-alert>
      </b-col>
      <b-card-group deck>
         <b-row>
            <b-col md="6" v-for="post in latest_posts" :key="post.id" class="mb-4">
               <PostCard
                 v-bind:iden="post.id"
                 v-bind:title="post.title"
                 v-bind:body="post.body"
                 v-bind:picture="post.picture"
                 v-bind:created_at="post.created_at"
                 v-bind:author="post.author"
                 v-bind:tags="post.tags"
                 v-bind:slug="post.slug"
               ></PostCard>
            </b-col>
         </b-row>
      </b-card-group>
   </div>
</template>

<script>
 import slugify from "slugify";
 import { mapGetters } from "vuex";

 import Blog from "./Blog.vue";
 import PostCard from "./PostCard.vue";

 export default {
   /* extends: Blog, */
   data () {
     return {
       error: null
     }
   },
   methods: {
   },
   async mounted () {
     try {
       await this.$store.dispatch("blog/fetch_recent_posts");
     } catch (e) {
       this.error = true;
     }
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
