<template>
   <b-card class="m-2" :img-src="picture" img-top style="height: 100%;">
      <b-card-text>
         <router-link tag="a" :to="slug" class="lead">{{ title }}</router-link>
         <p v-html="raw_body" class="block-with-text mt-2"></p>
         <div v-if="tags.length" class="post-tags">
            <em>Tags: </em>
            <Tag v-for="tag in tags" :key="tag.id" v-bind:word="tag.word"></Tag>
         </div>
      </b-card-text>
      <div slot="footer"><small class="text-muted">Last updated {{ created_at | moment("from") }} by {{ author.username }}</small></div>
   </b-card>
</template>

<script>
 import Tag from "./Tag.vue";
 import slugify from "slugify";


 export default {
   props: ['iden', 'body', 'title', 'picture', 'created_at', 'author', 'tags'],
   computed: {
     raw_body: function () {
       return this.body.replace(/<(?:.|\n)*?>/gm, '');
     },
     slug () {
       return "news/" + slugify(this.title) + "," + this.iden;
     }
   },
   mounted () {
     this.$root.$on("SIGlocale", () => {
       this.$forceUpdate();
     })
   },
   components: {
     Tag
   }
 }
</script>

<style scoped lang="scss">
 .b-card {
   cursor: auto;
   a {
     text-decoration: none;
   }
 }
</style>
