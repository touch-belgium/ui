<template>
   <!-- The purpose of flex wrapper is to push the footer down when content is short -->
   <div>
      <navbar />
      <nuxt />
   </div>
</template>

<script>
 import Navbar from "@/components/Navbar";


 export default {
   components: {
     Navbar
   }
 }
</script>

<style lang="scss">

</style>
