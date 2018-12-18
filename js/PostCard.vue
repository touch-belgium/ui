<template functional>
   <v-card hover>
      <v-img :src="props.picture"></v-img>

      <!-- <a :href="'news/' + props.iden + '/' + props.slug"> -->
      <v-card-text>
         <p><em>Published: {{ props.created_at | moment("from") }} by {{ props.author.username }}</em></p>
         <h5 class="headline mb-4">{{ props.title }}</h5>
         <!-- Some text about the news  -->
            <div v-if="props.tags.length" class="post-tags">
               <em>Tags: </em>
               <comp :is="injections.components.Tag" v-for="tag in props.tags" :key="tag.id" v-bind:word="tag.word"></comp>
            </div>
         </v-card-text>
   </v-card>
</template>

<script>
 import Tag from './Tag.vue';

 export default {
   props: ['iden', 'title', 'picture', 'created_at', 'author', 'tags', 'slug'],
   /* Hack to show children components inside functional components */
   /* https://github.com/vuejs/vue/issues/7492 */
   inject: {
     components: {
       default: {
         Tag
       }
     }
   }
 }
</script>

<style scoped lang="scss">
 @import "custom-color-variables";
</style>
