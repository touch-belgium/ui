<template>
   <v-container class="mt-5" v-bind="{ [`grid-list-xl`]: true }">
      <v-layout row wrap>
         <v-flex xs12>
            <h2 class="display-1"><div data-icon="ei-pencil" data-size="m" style="display: inline;"></div>News</h2>
         </v-flex>

         <v-flex xs12 sm6>
            <p>Selected tags:</p>

         </v-flex>

         <v-flex xs12 sm6>
            <p>Sort by tag:</p>
            <Tag v-for="tag in tags"
                 :key="tag.id"
                 v-bind:word="tag"></Tag>
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
 import axios from 'axios';
 import PostCard from './PostCard.vue';
 import Tag from './Tag.vue';

 export default {
   props: ['postNumber'],
   data () {
     return {
       posts: [],
       shown: null,
       tags: [],
       selected_tags: [],
     }
   },
   methods: {
     fetchPosts () {
       if (typeof this.postNumber !== 'undefined') {
         var url = API + "posts/?number=" + this.postNumber;
       } else {
         var url = API + "posts/";
       }
       axios.get(url, {crossdomain: true}).then(response => {
         this.posts = response.data.results;
       });
     },
     fetchTags () {
       let url = API + "tags/";
       axios.get(url).then(response => {
         this.tags = response.data.results.map(x => x.word);
       });
     },
   },
   created () {
   },
   mounted () {
     this.fetchPosts();
     this.fetchTags();
   },
   components: {
     PostCard,
     Tag
   },
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
