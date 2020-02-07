<template>
   <b-card class="m-2 postcard" :img-src="post.picture" img-top>
      <b-card-text>
         <nuxt-link :to="slug" class="lead">{{ post.title }}</nuxt-link>
         <p v-html="post.excerpt" class="mt-2"></p>
         <div v-if="post.tags.length" class="post-tags">
            <em>Tags: </em>
            <tag v-for="tag in post.tags" :key="tag.id" v-bind:word="tag.word" />
         </div>
      </b-card-text>
      <div slot="footer">
         <small class="text-muted">
            Last updated: {{ $moment(post.created_at).fromNow() }} by {{ post.author }}
         </small>
      </div>
   </b-card>
</template>

<script>
 import slugify from "slugify";

 import Tag from "@/components/Tag";

 export default {
   props: ["post"],
   computed: {
     raw_body () {
       return this.post.body.replace(/<(?:.|\n)*?>/gm, '');
     },
     slug () {
       const slug = slugify(this.post.title, {
         lower: true
       });
       return `posts/${this.post.id}/${slug}`;
     }
   },
   mounted () {
     /* this.$root.$on("SIGlocale", () => {
      *   this.$forceUpdate();
      * }) */
   },
   components: {
     Tag
   }
 }
</script>

<style scoped lang="scss">
 .postcard {
   height: 100%;
 }
 .card-img-top {
   max-height: 20vh;
   object-fit: cover;
 }
 .b-card {
   cursor: auto;
   a {
     text-decoration: none;
   }
 }
</style>
