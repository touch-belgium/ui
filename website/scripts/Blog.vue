<template>
   <div class="container">
      <div class="row">
         <div class="s12">
            <h2>News</h2>
         </div>
      </div>
      <Post v-for="post in posts"
            :key="post.id"
            v-bind:title="post.title"
            v-bind:body="post.body"
            v-bind:created_at="post.created_at"
            v-bind:author="post.author"
      ></Post>
   </div>
</template>

<script>
 import Post from './Post.vue';

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
     Post
   }
 }
</script>

<style scoped lang="scss">
 .container {
   padding-top: 5px;
 }
</style>
