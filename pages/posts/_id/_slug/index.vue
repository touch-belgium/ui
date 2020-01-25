<template>
   <b-container class="mt-5">

      <b-row class="mb-3">
         <router-link :to="{ name: 'posts' }" class="lead">← Back to news</router-link>
      </b-row>

      <b-row class="mb-5" v-if="post">
         <b-card
           no-body
           footer-tag="footer"
         >
            <b-card-body>
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

 import Tag from "@/components/Tag";
 import SharingButtons from "@/components/SharingButtons";

 export default {
   async asyncData({ store, params, error, req }) {
     try {
       await store.dispatch("blog/fetch_post", params.id);
       /* Augment with request data to get the window.location url */
       return {
         url: req.originalUrl,
         headers: req.headers
       }
     } catch (e) {
       error({ statusCode: 404, message: "This page is currently unavailable" });
     }
   },
   data () {
     return {

     }
   },
   head () {
     return {
       title: `Touch Belgium`
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
     share_text () {
       /* return `Touch Belgium news: ${this.post.title}`; */
       return "asdf";
     },
     share_url () {
       /* return `${this.req.headers.protocol}://${this.req.headers.host}${this.req.originalUrl}`; */
       return "asdf";
     }
   },
   components: {
     Tag, SharingButtons
   }
 }
</script>

<style scoped lang="scss">

</style>
