<template>
   <v-container v-bind="{ [`grid-list-xl`]: true }">
      <v-layout row wrap>
         <v-flex xs12>
            <h2 class="display-2"><v-icon size="48px" color="blue darken-2">chat</v-icon>
               </div>Latest news</h2>
         </v-flex>

         <v-flex xs12 sm6 md4 lg3 v-for="post in posts" :key="post.id">
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
         </v-flex>
      </v-layout>
   </v-container>
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
   methods: {
     fetchPosts () {
       let url = `${API}posts/recent`;
       axios.get(url, {crossdomain: true}).then(response => {
         this.posts = response.data.results;
       });
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
 }
</style>
