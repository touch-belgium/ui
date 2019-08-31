<template>
   <div>
      <navbar></navbar>
      <router-view></router-view>
      <vue-progress-bar></vue-progress-bar>
      <foot></foot>
   </div>
</template>

<script>
 import Navbar from './components/Navbar.vue';
 import Foot from './components/Foot.vue';

 export default {
   name: 'App',
   components: { Navbar, Foot },
 }
</script>

<style></style>
