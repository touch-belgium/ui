<template functional>
   <div class="col s12 m6 l4">
      <div class="card post hoverable">
         <div class="card-image">
            <img class="responsive-img" :src="'/media/' + props.picture">
         </div>
         <div class="card-content">
            <p><em>Published: {{ props.created_at | moment("from") }} by {{ props.author.username }}</em></p>
            <a :href="'news/' + props.iden + '/' + props.slug">
               <span class="card-title truncate">{{ props.title }}</span>
            </a>
            <div v-if="props.tags.length > 0" class="post-tags">
               <em>Tags: </em>
               <comp :is="injections.components.Tag" v-for="tag in props.tags" :key="tag.id" v-bind:word="tag.word"></comp>
            </div>
         </div>
      </div>
   </div>
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

 .card.post {
   .card-content {
     p {
       em {
         color: color("grey", "darken-3");
         font-size: 0.8em;
       }
       margin-bottom: 1.5em;
     }
     .post-tags {
       margin-top: 2em;
     }
   }
 }
</style>
