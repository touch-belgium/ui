<template>
   <v-container class="mt-5" v-bind="{ [`grid-list-xl`]: true }">
      <v-layout row wrap>
         <v-flex xs12>
            <h2 class="display-1"><v-icon large color="blue darken-2">chat</v-icon>
               </div>News</h2>
         </v-flex>

         <v-flex xs12 sm6>
            <p>Selected tags:</p>
            <Tag v-for="tag in selected_tags"
                 :key="tag.id"
                 v-bind:word="tag"
                 v-bind:close="true"
            ></Tag>
         </v-flex>

         <v-flex xs12 sm6>
            <p>Sort by tag:</p>
            <Tag v-for="tag in tags"
                 :key="tag.id"
                 v-bind:word="tag"
                 v-bind:close="false"
            ></Tag>
         </v-flex>

         <v-flex xs12 sm6 md4 lg3 v-for="post in shown" :key="post.id">
            <PostCard
              v-bind:iden="post.id"
              v-bind:title="post.title"
              v-bind:body="post.body"
              v-bind:picture="post.picture"
              v-bind:created_at="post.created_at"
              v-bind:author="post.author"
              v-bind:tags="post.tags"
            ></PostCard>
         </v-flex>
      </v-layout>
   </v-container>
</template>

<script>
 import axios from 'axios';
// import { some } from 'lodash';
 import PostCard from './PostCard.vue';
 import Tag from './Tag.vue';

 export default {
   props: ['postNumber'],
   data () {
     return {
       posts: [],
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
         this.tags = response.data.results.map(t => t.word);
       });
     },
   },
   mounted () {
     this.fetchPosts();
     this.fetchTags();
     this.$on('add_tag', (word) => {
       this.tags = this.tags.filter(x => x != word);
       if (!this.selected_tags.includes(word))
         this.selected_tags.push(word);
       this.selected_tags.sort();
     });
     this.$on('remove_tag', (word) => {
       this.selected_tags = this.selected_tags.filter(t => t != word);
       this.tags.push(word);
       this.tags.sort();
     })
   },
   computed: {
     shown () {
       if (this.selected_tags.length) {
         return this.posts.filter(p => {
           return p.tags.some(t => {
             console.log(t.word);
             return this.selected_tags.includes(t.word);
           });
         });
       } else {
         return this.posts;
       }
     }
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
