<template functional>
   <div class="row">
      <div class="s12">
         <div class="card post">
            <div class="card-content">
               <span class="card-title">{{ props.title }}</span>
               <p><em>Published: {{ props.created_at | moment("from") }}</em></p>
               <div v-html="props.body"></div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
 export default {
   props: ['title', 'body', 'created_at', 'author'],
 }
</script>

<style scoped>

</style>
