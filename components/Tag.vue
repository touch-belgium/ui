<template>
   <b-badge pill class="mr-1" variant="info"
            @click="add_tag"
            @input="remove_tag"
            :close="this.close"
   >
      {{ this.word }}
   </b-badge>
</template>

<script>
 export default {
   props: ['word', 'close'],
   methods: {
     add_tag () {
       this.$parent.$emit('add_tag', this.word);
     },
     remove_tag () {
       this.$parent.$emit('remove_tag', this.word);
     }
   },
   computed: {

   },
 }
</script>

<style scoped lang="scss">

</style>
