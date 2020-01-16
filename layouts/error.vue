<template>
   <!-- The purpose of flex wrapper is to push the footer down when content is short -->
   <div class="flex-wrapper">
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
 .flex-wrapper {
   display: flex;
   min-height: 100vh;
   flex-direction: column;
   justify-content: space-between;
 }
</style>
