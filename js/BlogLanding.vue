<template>
   <div class="container">
      <div class="row">
         <PostCard v-for="post in posts"
                   :key="post.id"
                   v-bind:iden="post.id"
                   v-bind:title="post.title"
                   v-bind:picture="post.picture"
                   v-bind:created_at="post.created_at"
                   v-bind:author="post.author"
                   v-bind:tags="post.tags"
                   v-bind:slug="post.slug"
         ></PostCard>
      </div>
   </div>
</template>

<script>
 import Blog from './Blog.vue';
 import PostCard from './PostCard.vue';
 import slugify from 'slugify';
 import axios from 'axios';

 export default {
   extends: Blog,
   props: ['postNumber'],
   data () {
     return {
       posts: null
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
 .container {
   padding-top: 5px;
   .row {
     display: flex;
     flex-wrap: wrap;
   }
 }
</style>
