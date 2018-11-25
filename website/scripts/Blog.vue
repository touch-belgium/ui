<template>
   <div class="container">
      <div class="row">
         <div class="col s12 m6 left">
            <p>Selected tags:</p>
         </div>
         <div class="col s12 m6 right">
            <p>Sort by tag:</p>
            <Tag v-for="tag in tags"
                 :key="tag.id"
                 v-bind:word="tag"></Tag>
         </div>
      </div>
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
 import axios from 'axios';
 import PostCard from './PostCard.vue';
 import BlogLanding from './BlogLanding.vue';
 import Tag from './Tag.vue';

 export default {
   extends: BlogLanding,
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
     fetchTags () {
       let url = "/api/tags/";
       axios.get(url).then(response => {
         this.tags = response.data.results.map(x => x.word);
       });
     },
   },
   created () {
   },
   mounted () {
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
