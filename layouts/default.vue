<template>
   <!-- The purpose of flex wrapper is to push the footer down when content is short -->
   <div class="flex-wrapper">
      <navbar />
      <nuxt />
      <foot />
   </div>
</template>

<script>
 import Navbar from "@/components/Navbar";
 import Foot from "@/components/Foot";


 export default {
   components: {
     Navbar, Foot
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
