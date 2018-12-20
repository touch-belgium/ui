<template>
   <v-card hover>
      <v-img :src="picture"></v-img>

      <!-- <a :href="'news/' + props.iden + '/' + props.slug"> -->
      <v-card-text>
         <p><em>Published: {{ created_at | moment("from") }} by {{ author.username }}</em></p>
         <h5 class="headline mb-4">{{ title }}</h5>
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

 export default {
   props: ['iden', 'body', 'title', 'picture', 'created_at', 'author', 'tags', 'slug'],
   /* Hack to show children components inside functional components */
   /* https://github.com/vuejs/vue/issues/7492 */
   computed: {
     raw_body: function () {
       return this.body.replace(/<(?:.|\n)*?>/gm, '');
     }
   },
   components: {
     Tag
   }
 }
</script>

<style scoped lang="scss">
 @import "custom-color-variables";
</style>
