<template>
   <b-container class="mt-5">
      <b-row>
         <b-col cols="12">
            <h1>News</h1>
         </b-col>
      </b-row>
      <b-row>
         <b-col v-if="filtered_posts != null && !filtered_posts.length" cols="12">
            <b-alert show variant="info">No posts to show.</b-alert>
         </b-col>

         <b-col md="4" v-for="post in posts" :key="post.id" class="mb-4">
            <post-card :post="post" />
         </b-col>
      </b-row>
   </b-container>
</template>

<script>
 import { mapGetters, mapState } from "vuex";

 import PostCard from "@/components/PostCard.vue";

 export default {
   async asyncData ({ store, error }) {
     try {
       await store.dispatch("blog/fetch_posts");
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
     ...mapState("blog", [
       "posts"
     ]),
     ...mapGetters("blog", [
       "filtered_posts"
     ])
   },
   components: {
     PostCard
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
