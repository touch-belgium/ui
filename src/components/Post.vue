<template>
   <b-container class="mt-5">

      <b-row>
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
               <b-card-title>
                  <h3 class="display-4">{{ post.title }}</h3>
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
 import Tag from "./Tag.vue";
 import { mapGetters, mapState } from "vuex";

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
   /* watch: {
    *   '$route': 'fetchPost'
    * }, */
   computed: {
     ...mapState("blog", [
       "post"
     ])
   },
   components: {
     Tag
   }
 }
</script>

<style scoped lang="scss">
 @import "~Styles/custom-color-variables";

</style>
