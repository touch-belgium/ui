<template>
   <v-container>
      <v-card raised v-if="post">
         <v-card-title primary-title>
            <h3 class="display-1">{{post.title}}</h3>
         </v-card-title>

         <v-card-text>
            <p><em>Published: {{ post.created_at | moment("from") }} by {{ post.author.username }}</em></p>
            <div v-html="post.body"></div>
         </v-card-text>
      </v-card>
   </v-container>
</template>

<script>
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
       margin-bottom: 1.5em;
     }
     .post-tags {
       margin-top: 2em;
       span {
         background-color: color("teal", "base");
         color: color("shades", "white");
         padding: 5px;
         border-radius: 2px;
         margin-right: 0.5em;
       }
     }
   }
 }
</style>
