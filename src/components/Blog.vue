<template>
   <b-container class="mt-5">
      <b-row>
         <b-col cols="12">
            <p>Selected tags:</p>
            <Tag v-for="tag in selected_tags"
                 :key="tag.id"
                 v-bind:word="tag"
                 v-bind:close="true"
            ></Tag>
         </b-col>
      </b-row>

      <b-row>
         <b-col cols="12">
            <p>Sort by tag:</p>
            <Tag v-for="tag in tags"
                 :key="tag.id"
                 v-bind:word="tag.word"
                 v-bind:close="false"
            ></Tag>
         </b-col>
      </b-row>

      <b-row>
         <b-col v-if="error" cols="12">
            <b-alert show variant="warning">Posts could not be retrieved.</b-alert>
         </b-col>

         <b-col md="4" v-for="post in filtered_posts" :key="post.id">
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
 import { mapGetters } from "vuex";
 import PostCard from "./PostCard.vue";
 import Tag from "./Tag.vue";

 export default {
   data () {
     return {
       error: null
     }
   },
   methods: {
   },
   async mounted () {
     try {
       await this.$store.dispatch("blog/fetch_posts");
       await this.$store.dispatch("blog/fetch_tags");
     } catch (e) {
       this.error = true;
     }
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
     ...mapGetters("blog", [
       "filtered_posts",
       "tags"
     ])
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
