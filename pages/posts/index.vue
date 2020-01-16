<template>
   <b-container class="mt-5">
      <b-row>
         <b-col cols="12">
            <p>Sort by tag:</p>
            <b-button v-for="tag in tags"
                      pill
                      :key="tag.id"
                      :ref="tag.word"
                      class="mr-2 mb-3"
                      :class="{ selectable_blog_tag: !tag_selected(tag.word) }"
                      variant="outline-primary"
                      @click="tag_click_handler(tag.word)"
            >
               <!-- TODO: Add fontawesome icon -->
            </b-button>
         </b-col>
      </b-row>

      <b-row>
         <b-col v-if="error" cols="12">
            <b-alert show variant="warning">Posts could not be retrieved.</b-alert>
         </b-col>

         <b-col v-if="filtered_posts != null && !filtered_posts.length" cols="12">
            <b-alert show variant="info">No posts to show.</b-alert>
         </b-col>

         <b-col md="4" v-for="post in posts" :key="post.id" class="mb-4">
            <PostCard
              v-bind:iden="post.id"
              v-bind:title="post.title"
              v-bind:body="post.body"
              v-bind:picture="post.picture"
              v-bind:created_at="post.created_at"
              v-bind:author="post.author"
              v-bind:tags="post.tags"
            ></PostCard>
         </b-col>
      </b-row>
   </b-container>
</template>

<script>
 import { mapGetters, mapState } from "vuex";

 import PostCard from "@/components/PostCard.vue";

 export default {
   async asyncData ({ $axios }) {
     return { eso: 1 };
   },
   data () {
     return {
       error: null
     }
   },
   head () {
     return {
       title: "News - Touch Belgium"
     }
   },
   methods: {
     /* tag_click_handler (tag_word) {
      *   this.$store.dispatch("blog/select_tag", tag_word);
      * } */
   },
   mounted () {
     /* try {
      *   await this.$store.dispatch("blog/fetch_posts");
      *   await this.$store.dispatch("blog/fetch_tags");
      * } catch (e) {
      *   this.error = true;
      * } */
     /* this.$on('add_tag', (word) => {
      *   this.tags = this.tags.filter(x => x != word);
      *   if (!this.selected_tags.includes(word))
      *     this.selected_tags.push(word);
      *   this.selected_tags.sort();
      * }); */
     /* this.$on('remove_tag', (word) => {
      *   this.selected_tags = this.selected_tags.filter(t => t != word);
      *   this.tags.push(word);
      *   this.tags.sort();
      * }) */
   },
   computed: {

   },
   components: {
     PostCard
   },
 }
</script>

<style module lang="scss">
 @import "~assets/css/_custom-bootstrap-variables";

 .container {
   padding-top: 5px;
   .row {
     display: flex;
     flex-wrap: wrap;
   }
 }
 .selectable_blog_tag {
   &:hover {
     .octicon {
       fill: white;
     }
   }
   .octicon {
     fill: $blue;
   }
 }

 .selected_blog_tag {

 }
</style>
