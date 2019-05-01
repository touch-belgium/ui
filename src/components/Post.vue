<template>
   <v-container>
      <p>← Back to news</p>
      <v-card raised v-if="post">
         <v-card-title primary-title>
            <h3 class="display-1">{{post.title}}</h3>
         </v-card-title>

         <v-card-text>
            <p><em>Published: {{ post.created_at | moment("from") }} by {{ post.author.username }}</em></p>
            <div v-html="post.body"></div>
            <div v-if="post.tags.length" class="mt-5">
               <em>Tags: </em>
               <Tag v-for="tag in post.tags" :key="tag.id" v-bind:word="tag.word"></Tag>
            </div>
         </v-card-text>
      </v-card>
   </v-container>
</template>

<script>
 import Tag from './Tag.vue';
 import axios from 'axios';

 export default {
   data () {
     return {
       post: null
     }
   },
   methods: {
     fetchPost () {
       let url = API + "posts/" + this.$route.params.id + "/";
       axios.get(url, {crossdomain: true}).then(response => {
         this.post = response.data;
       });
     }
   },
   created () {
     this.fetchPost();
   },
   watch: {
     '$route': 'fetchPost'
   },
   mounted () {
     this.$root.$on("SIGlocale", () => {
       this.$forceUpdate();
     })
   },
   components: {
     Tag
   }
 }
</script>

<style scoped lang="scss">
 @import "custom-color-variables";

 .card.post {
   .card-content {
     p {
       em {
         color: color("grey", "darken-3");
         font-size: 0.8em;
       }
     }
   }
 }
</style>
