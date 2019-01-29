<template>
   <span>match at {{ info.when | moment("dddd, MMMM Do YYYY") }}</span>
</template>

<script>
 export default {
   props: ['info'],
   data () {
     return {

     }
   }
 }
</script>

<style module lang="scss">

</style>
