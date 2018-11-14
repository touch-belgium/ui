<template>
   <div class="container">
   <div class="row">
      <div class="s12">
         <h2>News</h2>
      </div>
   </div>
   <div class="row">
      <PostCard v-for="post in posts"
                :key="post.id"
                v-bind:title="post.title"
                v-bind:created_at="post.created_at"
                v-bind:author="post.author"
                v-bind:tags="post.tags"
      ></PostCard>
   </div>
   </div>
</template>

<script>
 import PostCard from './PostCard.vue';

 export default {
   props: ['postNumber'],
   data () {
     return {
       posts: null
     }
   },
   methods: {
     fetchPosts: function () {
       if (typeof this.postNumber !== 'undefined') {
         var url = "/api/posts/?number=" + this.postNumber;
       } else {
         var url = "/api/posts/"
       }
       fetch(url)
         .then(response => response.json())
         .then(data => this.posts = data.results)
     }
   },
   mounted () {
     this.fetchPosts()
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
