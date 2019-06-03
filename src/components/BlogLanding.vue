<template>
   <div>
      <b-col v-if="error" cols="12">
         <b-alert show variant="warning">Oops. Could not retrieve any blog posts</b-alert>
      </b-col>
      <b-col v-if="posts != null && !posts.length" cols="12">
         <b-alert show variant="info">No posts yet. Come back later !</b-alert>
      </b-col>
      <b-card-group deck>
         <b-row>
            <b-col md="6" v-for="post in posts" :key="post.id">
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
 import Blog from "./Blog.vue";
 import PostCard from "./PostCard.vue";
 import slugify from "slugify";
 import api from "../common/api.js";

 export default {
   /* extends: Blog, */
   props: ['postNumber'],
   data () {
     return {
       posts: null,
       error: null,
     }
   },
   methods: {
     async fetchPosts () {
       let url = 'posts/recent';
       try {
         const response = await api.get(url).json()
         this.posts = response.results;
       } catch (e) {
         /* this.error = "Oops. The blog posts could not be retrieved"; */
         this.error = true;
       }
     }
   },
   mounted () {
     this.fetchPosts();
   },
   components: {
     PostCard
   }
 }
</script>

<style scoped lang="scss">
</style>
