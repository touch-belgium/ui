<template>
   <b-container class="mt-5">

      <b-row class="mb-3">
         <router-link :to="{ name: 'news' }" class="lead">← Back to news</router-link>
      </b-row>

      <b-row v-if="error">
         <b-col cols="12">
            <b-alert show variant="warning">Post could not be retrieved.</b-alert>
         </b-col>
      </b-row>

      <b-row class="mb-5" v-if="post">
         <b-card
           no-body
           footer-tag="footer"
         >
            <b-card-body>
               <SharingButtons :text="share_text" :url="share_url"></SharingButtons>
               <b-card-title>
                  <h3>{{ post.title }}</h3>
               </b-card-title>


               <b-card-text>
                  <p><em>Published: {{ post.created_at | moment("from") }} by {{ post.author.username }}</em></p>

                  <div v-html="post.body"></div>
               </b-card-text>
            </b-card-body>
            <b-card-footer v-if="post.tags.length">
               <em>Tags: </em>
               <Tag v-for="tag in post.tags" :key="tag.id" v-bind:word="tag.word"></Tag>
            </b-card-footer>
         </b-card>
      </b-row>
   </b-container>
</template>

<script>
 import { mapGetters, mapState } from "vuex";

 import Tag from "./Tag.vue";
 import SharingButtons from "./SharingButtons.vue";

 export default {
   data () {
     return {
       error: null
     }
   },
   async mounted () {
     /* Setup i18n listener */
     this.$root.$on("SIGlocale", () => {
       this.$forceUpdate();
     });
     /* Fetch the post */
     try {
       await this.$store.dispatch("blog/fetch_post", this.$route.params.id);
     } catch (e) {
       this.error = true;
     }
   },
   methods: {

   },
   computed: {
     ...mapState("blog", [
       "post"
     ]),
     share_text () {
       return `Touch Belgium news: ${this.post.title}`;
     },
     share_url () {
       return `${window.location.href}`;
     }
   },
   components: {
     Tag, SharingButtons
   }
 }
</script>

<style scoped lang="scss">
 @import "~Styles/custom-color-variables";
</style>
