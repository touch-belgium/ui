<template>
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
</template>

<script>
 import Blog from "./Blog.vue";
 import PostCard from "./PostCard.vue";
 import slugify from "slugify";
 import api from "../common/api.js";

 export default {
   extends: Blog,
   props: ['postNumber'],
   data () {
     return {
       posts: null
     }
   },
   methods: {
     async fetchPosts () {
       let url = 'posts/recent';
       const response = await api.get(url).json();
       console.log(response);
       this.posts = response.results;
       console.log(this.posts);
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
