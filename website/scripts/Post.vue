<template functional>
   <div class="row">
      <div class="s12">
         <div class="card post">
            <div class="card-content">
               <span class="card-title">{{ props.title }}</span>
               <p><em>Published: {{ props.created_at | moment("from") }} by {{ props.author.username }}</em></p>
               <div v-html="props.body"></div>
               <div v-if="props.tags.length > 0" class="post-tags">
                  <em>Tags: </em>
                  <span v-for="tag in props.tags">{{ tag.word }}</span>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
 export default {
   props: ['title', 'body', 'created_at', 'author', 'tags'],
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
       span {
         background-color: color("teal", "base");
         color: color("shades", "white");
         padding: 5px;
         border-radius: 2px;
         margin-right: 0.5em;
       }
     }
   }
 }
</style>
