<template>
   <v-card hover>
      <v-img contain :src="picture"></v-img>

      <v-card-text>
         <p><em>Published: {{ created_at | moment("from") }} by {{ author.username }}</em></p>
         <router-link tag="a" :to="slug" class="headline mb-4">{{ title }}</router-link>
         <p v-html="raw_body" class="block-with-text"></p>
         <div v-if="tags.length" class="post-tags">
            <em>Tags: </em>
            <Tag v-for="tag in tags" :key="tag.id" v-bind:word="tag.word"></Tag>
         </div>
      </v-card-text>
   </v-card>
</template>

<script>
 import Tag from './Tag.vue';
 import slugify from 'slugify';


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
 @import "custom-color-variables";
 .v-card {
   cursor: auto;
   a {
     text-decoration: none;
   }
 }
</style>
