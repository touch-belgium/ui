<template>
   <b-container class="mt-5">
      <b-row class="mb-3">
         <router-link :to="{ name: 'posts' }" class="lead">← Back to news</router-link>
      </b-row>

      <b-row v-if="$fetchState.error">
         <APIError />
      </b-row>
      <b-row class="mb-5" v-if="post && !$fetchState.pending && !$fetchState.error">
         <b-card
           no-body
           footer-tag="footer"
         >
            <b-card-body>
               <b-img :src="post.picture" fluid class="mb-2 post-picture"></b-img>
               <sharing-buttons :text="share_text" :url="share_url" />
               <b-card-title>
                  <h2>{{ post.title }}</h2>
               </b-card-title>


               <b-card-text>
                  <p><em>Published: {{ $moment(post.created_at).fromNow() }} by {{ post.author }}</em></p>

                  <div v-html="post.body"></div>
               </b-card-text>
            </b-card-body>
            <b-card-footer v-if="post.tags.length">
               <em>Tags: </em>
               <tag v-for="tag in post.tags" :key="tag.id" v-bind:word="tag.word" />
            </b-card-footer>
         </b-card>
      </b-row>
   </b-container>
</template>

<script>
 import { mapState, mapGetters } from "vuex";

 export default {
   async fetch () {
     const { store, params, route } = this.$nuxt.context;
     await store.dispatch("blog/fetch_post", params.id);
     this.path = route.fullPath;
   },
   data () {
     return {
       path: ""
     }
   },
   head () {
     return {
       title: this.post_page_title
     }
   },
   methods: {

   },
   mounted () {

   },
   computed: {
     ...mapState("blog", [
       "posts",
       "post"
     ]),
     ...mapGetters("blog", [
       "share_text",
       "post_page_title"
     ]),
     share_url () {
       return `https://touch-belgium.be${this.path}`;
     }
   }
 }
</script>

<style scoped lang="scss">
 .post-picture {
   max-height: 60vh;
   width: 100%;
   object-fit: cover;
 }
</style>
