<template>
   <v-card hover>
      <!-- <a :href="'news/' + props.iden + '/' + props.slug"> -->
      <v-card-text>
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

</script>

<style module lang="scss">

</style>
