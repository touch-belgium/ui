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
               <span>{{ tag.word }}</span> <span class="ml-2" v-html="plus_icon"></span>
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
 import octicons from "@primer/octicons";

 import PostCard from "./PostCard.vue";

 export default {
   data () {
     return {
       error: null
     }
   },
   methods: {
     tag_click_handler (tag_word) {
       this.$store.dispatch("blog/select_tag", tag_word);
     }
   },
   async mounted () {
     try {
       this.$Progress.start();
       await this.$store.dispatch("blog/fetch_posts");
       await this.$store.dispatch("blog/fetch_tags");
       this.$Progress.finish();
     } catch (e) {
       this.error = true;
       this.$Progress.fail();
     }
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
     ...mapGetters("blog", [
       "tag_selected",
       "filtered_posts",
       "tags"
     ]),
     ...mapState("blog", [
       "posts"
     ]),
     x_icon () {
       return octicons.x.toSVG();
     },
     plus_icon () {
       return octicons.plus.toSVG();
     }
   },
   components: {
     PostCard
   },
 }
</script>

<style module lang="scss">
 @import "Styles/_custom-bootstrap-variables";

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
